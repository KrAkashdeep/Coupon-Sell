import React from 'react';
import { 
  CurrencyDollarIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Footer from '../components/Home/Footer';
import Navbar from '../components/Home/Navbar';

function HowWork() {
  const features = [
    {
      title: "Buy Discounted Coupons",
      icon: CurrencyDollarIcon,
      desc: "Purchase authentic coupons at discounted prices from verified sellers"
    },
    {
      title: "Sell Your Coupons",
      icon: ArrowPathIcon,
      desc: "List your unused coupons and earn money from other users"
    },
    {
      title: "Secure Transactions",
      icon: ShieldCheckIcon,
      desc: "All transactions protected through our escrow payment system"
    }
  ];

  const steps = [
    {
      title: "1. Create Account",
      desc: "Sign up in 30 seconds with email or social media"
    },
    {
      title: "2. Browse Listings",
      desc: "Explore thousands of active coupon offers"
    },
    {
      title: "3. Purchase Safely",
      desc: "Complete secure checkout process"
    },
    {
      title: "4. Redeem & Save",
      desc: "Use purchased coupons immediately"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Gateway to Smart Shopping
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover, buy, and sell verified coupons in a secure marketplace designed
            to maximize your savings
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <feature.icon className="h-12 w-12 text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-12 shadow-lg mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="h-24 w-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p>Happy Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$2M+</div>
              <p>Total Savings</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <p>Active Coupons</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How do I create an account?",
                a: "Click the 'Sign Up' button and complete the registration form with your email or social media account"
              },
              {
                q: "Is my payment information safe?",
                a: "We use bank-level encryption and never store your payment details"
              },
              {
                q: "How do I sell coupons?",
                a: "Go to your dashboard, click 'Sell Coupons', and follow the simple listing process"
              },
              {
                q: "Are there any fees?",
                a: "We charge 5% transaction fee only on successful sales"
              },
              {
                q: "How do I redeem coupons?",
                a: "Immediately after purchase, you'll receive a unique code to use at checkout"
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <div className="flex items-start">
                  <QuestionMarkCircleIcon className="h-6 w-6 text-purple-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Saving?</h2>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-4 rounded-lg text-lg hover:from-purple-700 transition-colors">
            Join Now - It's Free
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HowWork;
