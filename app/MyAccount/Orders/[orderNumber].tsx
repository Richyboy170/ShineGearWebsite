// pages/MyAccount/Orders/[orderNumber].tsx

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

interface Order {
  orderNumber: string;
  date: string;
  status: string;
  total: number;
  pointsGain: number;
}

interface OrderDetailsProps {
  order: Order | null;
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = orders.map((order) => ({
    params: { orderNumber: order.orderNumber },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<OrderDetailsProps> = async (context) => {
  const { orderNumber } = context.params as { orderNumber: string };
  const order = orders.find((order) => order.orderNumber === orderNumber) || null;

  return {
    props: {
      order,
    },
  };
};

const OrderDetailsPage: NextPage<OrderDetailsProps> = ({ order }) => {
  const router = useRouter();

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <div className="container mx-auto bg-customBlue text-white">
      <h1 className="text-center" style={{ fontFamily: 'bm hanna_tff' }}>Order Details</h1>
      <div className="border-2 border-customDarkBlue p-4">
        <p><strong>Order Number:</strong> {order.orderNumber}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Total:</strong> {order.total} Baht</p>
        <p><strong>Points Gain:</strong> {order.pointsGain}</p>
      </div>
      <button onClick={() => router.back()} className="mt-4 bg-customGold text-customDarkBlue px-4 py-2 rounded">
        Back to Orders
      </button>
    </div>
  );
};

export default OrderDetailsPage;
