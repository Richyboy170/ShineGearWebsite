"use client"

import React, { useEffect, useState } from 'react';
import LandingAds from '@/app/LandingPage/Landing'
import Navbar from '@/app/Components/Navbar'
import SetOfCards from '@/app/LandingPage/SetOfCards'
import Testimonials from '@/app/Testimonials/Testimonials'
import EndingSlide from '@/app/Components/EndingSlide'
import { CartProvider } from '@/app/Stack/CartContext';


export default function Home() {
    const [userPoints, setUserPoints] = useState<number>(0);

    useEffect(() => {
        // Fetch the user's points from your API or state management
        const fetchUserPoints = async () => {
            // Replace with your API call
            const points = await getUserPointsFromAPI();
            setUserPoints(points);
        };

        fetchUserPoints();
    }, []);

    const getUserPointsFromAPI = async () => {
        // Simulate API call
        return new Promise<number>((resolve) => {
            setTimeout(() => resolve(1000), 1000); // Example points
        });
    };

    return (
        <div className="bg-customBlue">
            <CartProvider>
            <Navbar userPoints={userPoints} />
            <LandingAds />
            <SetOfCards />
            <hr className="border-t-2 border-gray-300 my-8" />
            <Testimonials />
            <EndingSlide />
            </CartProvider>
        </div>
    );
}
