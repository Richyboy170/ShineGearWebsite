import React from 'react';
import Link from 'next/link';

// Define the Order interface
interface Order {
  orderNumber: string;
  date: string;
  status: string;
  total: number;
  pointsGain: number;
}

// Sample data
const orders: Order[] = [
  {
    orderNumber: '12345',
    date: '2023-06-29',
    status: 'Shipped',
    total: 150,
    pointsGain: 15,
  },
  {
    orderNumber: '67890',
    date: '2023-06-28',
    status: 'Processing',
    total: 200,
    pointsGain: 20,
  },
  // Add more orders here
];

const OrderPage: React.FC = () => {
  return (
    <div className="container mx-auto bg-customBlue">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-customBlue border-2 border-customDarkBlue text-white">
          <thead className="text-customGold">
            <tr className="">
              <th className="px-4 py-2 border-b border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>Order Number</th>
              <th className="px-4 py-2 border-b border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>Date</th>
              <th className="px-4 py-2 border-b border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>Status</th>
              <th className="px-4 py-2 border-b border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>Total</th>
              <th className="px-4 py-2 border-b border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>Points Gain</th>
              <th className="px-4 py-2 border-b border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderNumber}>
                <td className="px-4 py-2 border-2 border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>{order.orderNumber}</td>
                <td className="px-4 py-2 border-2 border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>{order.date}</td>
                <td className="px-4 py-2 border-2 border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>{order.status}</td>
                <td className="px-4 py-2 border-2 border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>{order.total} Baht</td>
                <td className="px-4 py-2 border-2 border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>{order.pointsGain}</td>
                <td className="px-4 py-2 border-2 border-customDarkBlue text-center" style={{ fontFamily: 'bm hanna_tff' }}>
                  <Link href={`/MyAccount/Orders/${order.orderNumber}`} className="text-white hover:underline">View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
