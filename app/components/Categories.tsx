import Link from "next/link";

const categories = [
  {
    name: "Smartphones",
    description: "Android and iPhone deals available on Jumia Ghana",
    slug: "/category/smartphones",
  },
  {
    name: "Phone Accessories",
    description: "Chargers, power banks, earphones, and more",
    slug: "/category/accessories",
  },
  {
    name: "Laptops",
    description: "Student and work laptops with warranty",
    slug: "/category/laptops",
  },
  {
    name: "Electronics",
    description: "TVs, speakers, gadgets, and home electronics",
    slug: "/category/electronics",
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-white py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Browse popular product categories trusted by buyers in Ghana.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.slug}
              className="group border border-gray-200 rounded-xl p-6 hover:border-orange-500 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600">
                {category.description}
              </p>

              <span className="inline-block mt-4 text-sm font-medium text-orange-500">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
