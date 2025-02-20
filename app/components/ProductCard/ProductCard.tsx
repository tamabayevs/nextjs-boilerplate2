interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  onSelect: () => void;
}

export const ProductCard = ({ id, name, image, onSelect }: ProductCardProps) => {
  return (
    <button
      onClick={onSelect}
      className="w-full h-24 rounded border border-gray-300 flex flex-col items-center justify-center bg-white"
    >
      <span className="text-xl">{image}</span>
      <span className="text-xs mt-1">{name}</span>
    </button>
  );
}; 