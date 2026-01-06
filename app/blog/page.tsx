import BlogCard from "../components/BlogCard";

const posts = [
  {
    title: "Best Smartphones Under ₵2,000 on Jumia",
    content:
      "Affordable smartphones with good performance, battery life, and warranty available on Jumia Ghana.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    slug: "best-smartphones-under-2000",
  },
  {
    title: "Top Phone Accessories You Should Buy on Jumia",
    content:
      "Chargers, earphones, power banks, and phone accessories that offer the best value for money.",
    image: "https://i.pinimg.com/1200x/99/64/a2/9964a202c67115b1f40714082848c312.jpg",
    slug: "best-phone-accessories-jumia",
  },
  {
    title: "Best Laptops for Students in Ghana (2024)",
    content:
      "Reliable laptops for school, work, and everyday use — carefully selected for Ghanaian buyers.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    slug: "best-laptops-for-students-ghana",
  },
];

export default function BlogListing() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">All Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            content={post.content}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}
