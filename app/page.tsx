'use client';

import { useState } from 'react';
import { Timer } from './components/Timer/Timer';
import { ProductCard } from './components/ProductCard/ProductCard';
import { useRouter } from 'next/navigation';
import { products } from './data/products';

export default function Home() {
  const router = useRouter();
  const [selectedProducts, setSelectedProducts] = useState<Record<string, number>>({});

  const handleIncrement = (productId: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6">
      <div className="max-w-md mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-xl font-medium">Order Snacks</h1>
          <p className="text-sm text-gray-600">We bring to your car at station</p>
        </header>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onSelect={() => handleIncrement(product.id)}
            />
          ))}
        </div>

        <Timer />

        <button
          onClick={() => router.push('/confirmation')}
          className="w-full py-2 bg-green-500 text-white rounded text-center mt-4"
        >
          Кнопка Заказать
        </button>
      </div>
    </div>
  );
}
