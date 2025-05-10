import React, { useState } from 'react';
import { PlusIcon, XMarkIcon, TagIcon, BuildingStorefrontIcon, CreditCardIcon, CalendarDaysIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

function SellCoupons() {
  const [showModal, setShowModal] = useState(false);
  const [coupons, setCoupons] = useState([
    {
      name: "Summer Sale",
      company: "Amazon",
      code: "SUMMER24",
      expiry: "2024-08-31",
      description: "Get 30% off on selected fashion items"
    },
    {
      name: "Tech Bundle",
      company: "Best Buy",
      code: "TECH2024",
      expiry: "2024-07-15",
      description: "$200 off on electronics over $999"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCoupon = Object.fromEntries(formData.entries());
    setCoupons([newCoupon, ...coupons]);
    setShowModal(false);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Sell New Coupons</h1>
        <button 
          onClick={() => setShowModal(true)}
          className="flex items-center bg-gradient-to-r from-gray-900 to-purple-900 text-white px-6 py-2 rounded-lg  transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add New Coupon
        </button>
      </div>

      {/* Latest Coupons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.slice(0,3).map((coupon, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <TagIcon className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-gray-800">{coupon.name}</h3>
                <p className="text-gray-600">{coupon.company}</p>
              </div>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <CreditCardIcon className="h-5 w-5 mr-2 text-purple-600" />
                Code: <span className="font-mono ml-2">{coupon.code}</span>
              </div>
              <div className="flex items-center">
                <CalendarDaysIcon className="h-5 w-5 mr-2 text-purple-600" />
                Expires: {coupon.expiry}
              </div>
              <div className="flex items-start">
                <DocumentTextIcon className="h-5 w-5 mr-2 text-purple-600 mt-1" />
                {coupon.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 w-full max-w-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            </button>

            <h2 className="text-2xl font-bold mb-6">Create New Coupon</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Coupon Name</label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Company</label>
                  <input
                    name="company"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Coupon Code</label>
                  <input
                    name="code"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <input
                    type="date"
                    name="expiry"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    name="description"
                    required
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Create Coupon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellCoupons;