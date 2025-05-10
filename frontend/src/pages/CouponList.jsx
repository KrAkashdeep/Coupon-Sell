import React, { useState } from 'react'
import { MagnifyingGlassIcon, ShoppingCartIcon, TagIcon, CalendarIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Home/Navbar'

function CouponList() {
  const [searchQuery, setSearchQuery] = useState('')
  const coupons = [
    { 
      title: "Fashion Frenzy", 
      discount: "60% OFF",
      expires: "2024-03-31",
      category: "Fashion",
      description: "Save on trendy outfits and accessories from top brands"
    },
    { 
      title: "Tech Treat", 
      discount: "$200 OFF",
      expires: "2024-04-15",
      category: "Electronics",
      description: "Latest gadgets and electronics at discounted prices"
    },
    // Add more coupons...
  ]

  const filteredCoupons = coupons.filter(coupon =>
    coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    coupon.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
        <Navbar/>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        {/* Search Bar */}
        <div className="mb-12 flex relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search coupons by title or category..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Coupon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoupons.map((coupon, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Coupon Image */}
              <div className="relative bg-gray-100 rounded-t-xl overflow-hidden">
             
                
              </div>

              {/* Coupon Details */}
              <div className="p-6">
                <div className='flex justify-between'>

                <h3 className="text-xl font-bold text-gray-800 mb-2">{coupon.title}</h3>
                <div className=" top-4 right-4 bg-red-500 text-white px-3 py-2 rounded-full text-sm font-bold">
                  {coupon.discount}
                </div>
                </div>
                <div className="flex items-center mb-4">
                  <TagIcon className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-gray-600">{coupon.category}</span>
                  
                </div>
                
                <div className='mb-4'>
                    {/* <span className="text-gray-500 text-sm">Description</span> */}
                    <div className="text-sm text-gray-600 mt-1">
                      {coupon.description}
                    </div>
                    
                  </div>
               

                <div className="flex justify-between items-center">
                <div className="flex items-center mb-4">
                  <CalendarIcon className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-gray-600">Expires {coupon.expires}</span>
                </div>
                  <button className="bg-gradient-to-r from-gray-900 to-purple-900 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-600 transition-colors">
                    Get Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default CouponList
