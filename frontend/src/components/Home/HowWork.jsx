import React from 'react'
import { UserCircleIcon, MagnifyingGlassIcon, CurrencyDollarIcon, TicketIcon } from '@heroicons/react/24/outline'

function HowWork() {
  const steps = [
    {
      icon: UserCircleIcon,
      title: "Create Account",
      desc: "Join our community in 30 seconds with Google or email"
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Find Deals",
      desc: "Browse thousands of verified coupons across categories"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Purchase/Sell",
      desc: "Buy instantly or list your unused coupons securely"
    },
    {
      icon: TicketIcon,
      title: "Redeem",
      desc: "Use digital codes instantly or get physical coupons shipped"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
            How CouponMagnet Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Your marketplace for digital and physical coupons - simple, secure, and satisfying
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6 flex items-center">
                  <div className="p-4 bg-gradient-to-r from-gray-900 to-purple-900 text-gray-300 rounded-xl">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="ml-4 text-2xl font-bold text-gray-700">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button  className="cursor-pointer px-8 py-3 bg-gradient-to-r from-gray-900 to-purple-900 text-white rounded-full transition-colors duration-300 text-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowWork
