import React from 'react'
import { ShoppingBagIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from '@heroicons/react/24/outline'

function AllPurchase() {
  const purchases = [
    {
      id: 1,
      title: "Amazon Prime Membership",
      price: "$49.99",
      purchasedDate: "2024-03-15",
      expiryDate: "2024-06-15",
      status: "active",
      code: "AMZPRIME24"
    },
    {
      id: 2,
      title: "Netflix Annual Subscription",
      price: "$119.88",
      purchasedDate: "2024-02-28",
      expiryDate: "2025-02-28",
      status: "used",
      code: "FLIX2024"
    },
    {
      id: 3,
      title: "Uber Eats Delivery Credit",
      price: "$25.00",
      purchasedDate: "2024-03-01",
      expiryDate: "2024-04-01",
      status: "expired",
      code: "UBERMARCH"
    }
  ]

  const getStatusStyles = (status) => {
    switch(status) {
      case 'active': return { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircleIcon }
      case 'used': return { bg: 'bg-blue-100', text: 'text-blue-800', icon: ClockIcon }
      case 'expired': return { bg: 'bg-red-100', text: 'text-red-800', icon: XCircleIcon }
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', icon: ClockIcon }
    }
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8 flex items-center space-x-3">
        <ShoppingBagIcon className="h-8 w-8 text-purple-600" />
        <h1 className="text-2xl font-bold text-gray-800">Purchase History</h1>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {purchases.map((purchase) => {
          const statusStyles = getStatusStyles(purchase.status)
          const Icon = statusStyles.icon
          
          return (
            <div key={purchase.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{purchase.title}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Code:</span> {purchase.code}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Purchased:</span> {purchase.purchasedDate}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Expires:</span> {purchase.expiryDate}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles.bg} ${statusStyles.text}`}>
                    <Icon className="h-4 w-4 inline-block mr-1" />
                    {purchase.status.charAt(0).toUpperCase() + purchase.status.slice(1)}
                  </span>
                  <p className="text-lg font-bold text-purple-600">{purchase.price}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllPurchase
