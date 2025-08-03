import Image from "next/image";

interface NewsCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  onReadMore?: () => void;
}

export default function NewsCard({
  image,
  title,
  date,
  description,
  onReadMore,
}: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48 bg-gray-200">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{date}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          onClick={onReadMore}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Read More
        </button>
      </div>
    </div>
  );
}
