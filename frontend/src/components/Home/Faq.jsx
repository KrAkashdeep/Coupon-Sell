import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "How do I purchase coupons?",
      answer: "Browse our verified coupons, select your preferred deal, and complete the secure checkout process. You'll receive instant digital access or shipping details for physical coupons."
    },
    {
      question: "Can I resell coupons I purchased?",
      answer: "Yes! List any unused coupons in your account dashboard. Our verification system ensures only valid coupons get relisted."
    },
    {
      question: "How are coupon prices determined?",
      answer: "Prices are set by sellers based on demand and discount value. We provide pricing suggestions but final decisions rest with sellers."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency. All transactions are securely encrypted."
    },
    {
      question: "What if a coupon doesn't work?",
      answer: "We offer 100% buyer protection. Submit a claim within 24 hours and our team will investigate and provide a full refund if validated."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Changed grid layout to single column */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <ChevronDownIcon className={`h-6 w-6 text-purple-600 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}/>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}>
                <p className="p-6 pt-0 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-purple-600 font-semibold hover:text-purple-700">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Faq
