"use client";

import React, { useEffect } from "react";

export default function Home() {

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }

  }, []);

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          BharatInvesto
        </h1>

        <button
          onClick={()=>{
            localStorage.removeItem("token");
            window.location.href="/login";
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-12">

        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to BharatInvesto 📈
        </h2>

        <p className="text-gray-600 mt-4">
          Discover high potential stocks with advanced analysis
        </p>

      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 mt-12">

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">
            📊 Stock Analysis
          </h3>
          <p className="text-gray-600">
            Get detailed fundamental and technical analysis of high growth stocks.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">
            🤖 AI Stock Picks
          </h3>
          <p className="text-gray-600">
            Our AI engine finds stocks with strong return potential.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">
            📈 Portfolio Tracker
          </h3>
          <p className="text-gray-600">
            Track your investments and monitor profit or loss.
          </p>
        </div>

      </div>

      <div className="bg-white shadow-lg rounded-xl p-6">

<h2 className="text-xl font-bold mb-3">
Tata Power
</h2>

<img 
src="/charts/tatapower.png"
className="rounded-lg mb-4"
/>

<p className="text-green-600 font-semibold">
Recommendation: BUY
</p>

<p className="text-gray-700 mt-2">
Target: ₹430
</p>

<p className="text-gray-700">
Stop Loss: ₹365
</p>

<p className="mt-3 text-gray-600">
Reason: Breakout with strong volume and sector momentum.
</p>

</div>

    </div>

  );
}