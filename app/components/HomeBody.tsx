"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const buyingGuides = [
  {
    id: 1,
    title: "Best Smartphones Under ₵2,000 on Jumia",
    description:
      "Affordable smartphones with good performance, battery life, and warranty available on Jumia Ghana.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    link: "/blog/best-smartphones-under-2000",
  },
  {
    id: 2,
    title: "Top Phone Accessories You Should Buy on Jumia",
    description:
      "Chargers, earphones, power banks, and phone accessories that offer the best value for money.",
        image: "https://i.pinimg.com/1200x/99/64/a2/9964a202c67115b1f40714082848c312.jpg"
, // fixed
    link: "/blog/best-phone-accessories-jumia",
  },
  {
    id: 3,
    title: "Best Laptops for Students in Ghana (2024)",
    description:
      "Reliable laptops for school, work, and everyday use — carefully selected for Ghanaian buyers.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    link: "/blog/best-laptops-for-students-ghana",
  },
];

export const dynamic = "force-static"; // ensures SSG

export default function HomeBody() {
  return (
    <section className="w-full bg-gray-50 py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Best Buying Guides
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Carefully selected guides to help you choose the best products
            available on Jumia Ghana.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {buyingGuides.map((guide) => (
            <article
              key={guide.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={guide.link}>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={guide.id === 1} // preload first image
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <span className="inline-block text-orange-500 font-medium text-sm">
                    View Guide →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* JSON-LD structured data for SEO */}
      <Script
        id="buying-guides-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: buyingGuides.map((guide, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: guide.title,
              url: `https://yourdomain.com${guide.link}`,
            })),
          }),
        }}
      />
    </section>
  );
}
