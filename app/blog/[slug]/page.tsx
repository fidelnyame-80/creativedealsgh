import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/app/components/BlogCard";


// The full data object
const posts: Record<string, { title: string; content: string; image: string; excerpt: string }> = {
  "best-smartphones-under-2000": {
    title: "Best Smartphones Under ₵2,000 on Jumia",
    excerpt: "Affordable smartphones with good performance and battery life.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    content: `Looking for a smartphone under ₵2,000 in Ghana that doesn’t compromise on quality? We’ve rounded up the best options available on Jumia that balance performance, battery life, and warranty.\n\n1. Tecno Spark 11 – A reliable phone with a long-lasting battery and decent camera for everyday use.\n2. **Infinix Hot 20** – Offers good performance and a large display, perfect for students and casual users.\n3. **Itel Vision 3** – Extremely affordable with essential features for basic smartphone tasks.`,
  },
  "best-phone-accessories-jumia": {
    title: "Top Phone Accessories You Should Buy on Jumia",
    excerpt: "Chargers, earphones, and power banks that offer the best value.",
    image: "https://i.pinimg.com/1200x/99/64/a2/9964a202c67115b1f40714082848c312.jpg",
    content: `Want to make the most out of your smartphone? Accessories can enhance your experience significantly. Here are the must-have phone accessories available on Jumia:\n\n1. **Chargers & Power Banks** – Never run out of battery with fast chargers and high-capacity power banks.\n2. **Earphones & Headphones** – Enjoy clear sound quality whether listening to music or making calls.\n3. **Phone Cases & Screen Protectors** – Keep your device safe from scratches and accidental drops.`,
  },
  "best-laptops-for-students-ghana": {
    title: "Best Laptops for Students in Ghana (2024)",
    excerpt: "Reliable laptops for school and work carefully selected for Ghana.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    content: `Finding a reliable laptop for school or university doesn’t have to be complicated. Here are some of the best laptops available on Jumia Ghana for students in 2024:\n\n1. **HP Pavilion x360** – Lightweight and versatile, perfect for note-taking and assignments.\n2. **Lenovo IdeaPad 3** – Affordable with a good balance of performance and battery life.`,
  },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) return notFound();

  // Get other posts for the "Related" section
  const otherPosts = Object.entries(posts)
    .filter(([key]) => key !== slug)
    .map(([key, value]) => ({ ...value, slug: key }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Navigation */}
      <Link href="/blog" className="text-orange-500 hover:underline mb-8 inline-block">
        ← Back to all posts
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <span>By Jumia Guide</span>
            <span className="mx-2">•</span>
            <span>May 24, 2024</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative w-full h-[400px] mb-10 overflow-hidden rounded-2xl shadow-lg">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-line">
              {post.content.split("\n").map((line, i) => (
                <p key={i} className="mb-4">{line}</p>
              ))}
            </div>
          </div>

          {/* Simple Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-10">
              <h3 className="font-bold text-lg mb-4">Why buy from Jumia?</h3>
              <ul className="text-sm text-gray-600 space-y-3">
                <li>✅ Genuine Products</li>
                <li>✅ Doorstep Delivery</li>
                <li>✅ Easy Returns</li>
              </ul>
            </div>
          </aside>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="mt-20 border-t pt-10">
        <h2 className="text-2xl font-bold mb-8">You might also like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPosts.map((related) => (
            <BlogCard
              key={related.slug}
              title={related.title}
              excerpt={related.excerpt}
              image={related.image}
              slug={related.slug}
            />
          ))}
        </div>
      </section>
    </div>
  );
}