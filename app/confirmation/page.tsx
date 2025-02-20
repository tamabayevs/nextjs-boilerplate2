'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { products } from '../data/products';

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [seconds, setSeconds] = useState(30);
  
  const orderItems = JSON.parse(searchParams.get('items') || '{}');
  
  const orderDetails = Object.entries(orderItems).map(([productId, quantity]) => {
    const product = products.find(p => p.id === productId);
    return {
      product,
      quantity: quantity as number,
      subtotal: product ? product.price * (quantity as number) : 0
    };
  }).filter(item => item.quantity > 0);

  const total = orderDetails.reduce((sum, item) => sum + item.subtotal, 0);

  useEffect(() => {
    if (seconds <= 0) {
      router.push('/');
      return;
    }
    
    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, router]);

  return (
    <div className="min-h-screen p-4 max-w-md mx-auto">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold">Order Confirmation</h1>
        <p className="text-gray-600">Your order will be delivered to your car</p>
      </header>

      <div className="rounded-lg bg-yellow-100 p-3 text-center mb-6">
        Redirecting in {seconds} seconds...
      </div>

      <div className="space-y-4">
        {orderDetails.map(({ product, quantity, subtotal }) => (
          <div key={product?.id} className="flex justify-between items-center p-3 border rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{product?.image}</span>
              <span>{product?.name}</span>
            </div>
            <div className="text-right">
              <div>{quantity} × ${product?.price}</div>
              <div className="font-bold">${subtotal}</div>
            </div>
          </div>
        ))}

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Confirmation() {
  return (
    <Suspense fallback={<div className="min-h-screen p-4 max-w-md mx-auto"><div className="text-center">Loading...</div></div>}>
      <ConfirmationContent />
    </Suspense>
  );
} 