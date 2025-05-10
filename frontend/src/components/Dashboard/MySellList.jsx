import React, { useState } from 'react'
import { CurrencyDollarIcon, ClockIcon, TagIcon, PencilIcon, TrashIcon,MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function MySellList() {
  const [searchQuery, setSearchQuery] = useState('')
  
  const listings = [
    {
      id: 1,
      title: "Amazon Prime 1-Year",
      price: "$49.99",
      category: "Subscriptions",
      status: "active",
      expires: "2024-06-15",
      description: "Annual prime membership with full benefits"
    },
    {
      id: 2,
      title: "Netflix Premium",
      price: "$19.99",
      category: "Entertainment",
      status: "sold",
      expires: "2024-05-01",
      description: "4K UHD streaming package"
    },
    {
      id: 3,
      title: "Uber Eats Credit",
      price: "$25.00",
      category: "Food Delivery",
      status: "expired",
      expires: "2024-03-30",
      description: "$30 value food delivery credit"
    }
  ]

  const filteredListings = listings.filter(listing =>
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusStyle = (status) => {
    switch(status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'sold': return 'bg-blue-100 text-blue-800'
      case 'expired': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Active Listings</h1>
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search listings..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredListings.map((listing) => (
          <div key={listing.id} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
              <span className={`px-2 py-1 rounded-full text-sm ${getStatusStyle(listing.status)}`}>
                {listing.status}
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <CurrencyDollarIcon className="h-4 w-4 mr-2 text-purple-600" />
                {listing.price}
              </div>
              <div className="flex items-center">
                <TagIcon className="h-4 w-4 mr-2 text-purple-600" />
                {listing.category}
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-2 text-purple-600" />
                Expires {listing.expires}
              </div>
            </div>

            <p className="mt-3 text-sm text-gray-600">{listing.description}</p>

            <div className="mt-4 flex space-x-2">
              <button className="flex items-center px-3 py-1.5 text-sm text-purple-600 hover:bg-purple-50 rounded-lg">
                <PencilIcon className="h-4 w-4 mr-1" />
                Edit
              </button>
              <button className="flex items-center px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                <TrashIcon className="h-4 w-4 mr-1" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MySellList
