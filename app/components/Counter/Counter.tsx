interface CounterProps {
  productName: string;
  quantity: number;
  price: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export const Counter = ({ productName, quantity, price, onIncrement, onDecrement }: CounterProps) => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
      <div className="flex-1">
        <div className="text-sm">{productName}</div>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={onDecrement} 
          className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          -
        </button>
        <span className="w-4 text-center">{quantity}</span>
        <button 
          onClick={onIncrement} 
          className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
}; 