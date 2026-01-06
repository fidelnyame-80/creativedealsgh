import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  title: string;
  content: string;
  image: string;
  slug: string;
};

export default function BlogCard({ title, content, image, slug }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-4">{content}</p>

        <span className="inline-block text-orange-500 font-medium text-sm">
          Read More →
        </span>
      </div>
    </Link>
  );
}
