import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TagIcon, FireIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { CalendarIcon } from '@heroicons/react/24/outline';

function BuyCoupons() {
  const navigate = useNavigate();
  
  const favorites = [
    { title: "Summer Fashion", discount: "50% OFF", category: "Apparel", expires: "2024-04-10" },   
     { title: "Summer Fashion", discount: "50% OFF", category: "Apparel", expires: "2024-04-10" },
    { title: "Smart Home Setup", discount: "$150 OFF", category: "Electronics", expires: "2024-04-15" }
  ]

  const trending = [
    { title: "Grocery Super Saver", discount: "30% OFF", category: "Groceries", expires: "2024-04-05" },
    { title: "Grocery Super Saver", discount: "30% OFF", category: "Groceries", expires: "2024-04-05" },
    { title: "Fitness Bundle", discount: "40% OFF", category: "Fitness", expires: "2024-04-12" }
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Buy Coupons</h1>
        <button 
          onClick={() => navigate('/browse')}
          className="flex items-center bg-gradient-to-r from-gray-900 to-purple-900 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Browse All Coupons
          <ArrowRightIcon className="h-4 w-4 ml-2" />
        </button>
      </div>

      <div className="space-y-8">
        {/* Favorites Section */}
        <section>
          <div className="flex items-center mb-6">
            <StarIcon className="h-8 w-8 text-yellow-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-700">Your Favorites</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {favorites.map((coupon, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{coupon.title}</h3>
                    <p className="text-purple-600 font-bold text-base mt-1">{coupon.discount}</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">
                    Favorited
                  </span>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center text-gray-600 text-sm">
                    <TagIcon className="h-4 w-4 mr-1.5 text-purple-600" />
                    {coupon.category}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1.5 text-purple-600" />
                    Expires {coupon.expires}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <div className="flex items-center mb-6">
            <FireIcon className="h-8 w-8 text-red-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-700">Trending Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trending.map((coupon, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{coupon.title}</h3>
                    <p className="text-purple-600 font-bold text-base mt-1">{coupon.discount}</p>
                  </div>
                  <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
                    Hot Deal
                  </span>
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="flex items-center text-gray-600 text-sm">
                    <TagIcon className="h-4 w-4 mr-1.5 text-purple-600" />
                    {coupon.category}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <CalendarIcon className="h-4 w-4 mr-1.5 text-purple-600" />
                    Expires {coupon.expires}
                  </div>
                </div>
                <button className="mt-3 w-full bg-gradient-to-r from-gray-900 to-purple-900 text-white py-1.5 text-sm rounded-md hover:from-purple-700 transition-colors">
                  View Deal
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BuyCoupons
