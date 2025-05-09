import React from 'react'
import { ChartBarIcon, CurrencyDollarIcon, TicketIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

function LandingPage() {
  const stats = [
    { title: "Total Coupons Bought", value: "48", icon: ShoppingCartIcon, color: "bg-purple-500" },
    { title: "Active Listings", value: "12", icon: TicketIcon, color: "bg-blue-500" },
    { title: "Total Earnings", value: "$1,240", icon: CurrencyDollarIcon, color: "bg-green-500" },
    { title: "Savings This Month", value: "$320", icon: ChartBarIcon, color: "bg-orange-500" }
  ]

  const recentActivity = [
    { type: "Purchase", title: "Amazon Voucher", date: "2024-03-15", amount: "-$49.99" },
    { type: "Sale", title: "Nike Discount Code", date: "2024-03-14", amount: "+$19.99" },
    { type: "Listing", title: "Starbucks Offer", date: "2024-03-13", amount: "Active" }
  ]

  return (
    <div className="p-8">
      {/* Main Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-4 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Monthly Summary</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Chart Visualization</span>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${activity.type === 'Purchase' ? 'bg-red-100' : 'bg-green-100'}`}>
                  {activity.type === 'Purchase' ? (
                    <ShoppingCartIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <TicketIcon className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">{activity.title}</h3>
                  <p className="text-gray-500 text-sm">{activity.date}</p>
                </div>
              </div>
              <span className={`font-medium ${activity.type === 'Purchase' ? 'text-red-500' : 'text-green-500'}`}>
                {activity.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
