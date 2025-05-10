import React, { useState } from 'react';
import { TrashIcon, TagIcon, ArrowLeftIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Amazon Prime Membership",
      price: 49.99,
      code: "PRIME2024",
      expires: "2024-12-31",
      quantity: 1
    },
    {
      id: 2,
      title: "Nike Sports Gear",
      price: 29.99,
      code: "NIKE30",
      expires: "2024-08-15",
      quantity: 2
    },
    {
      id: 3,
      title: "Nike Sports Gear",
      price: 19.99,
      code: "NIKE30",
      expires: "2024-08-15",
      quantity: 1
    }
  ]);

  const [discountCode, setDiscountCode] = useState('');
const navigate = useNavigate();
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = 0; // Add your discount calculation logic
  const total = subtotal - discount;

  const updateQuantity = (id, newQuantity) => {
    if(newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? {...item, quantity: newQuantity} : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
        <Navbar/>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="ml-4 bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
            {cartItems.length} items
          </span>
        </div>

        <div className="mb-20 grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.length === 0 ? (
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-600">Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-white mb-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      <div className="mt-2 flex items-center text-sm text-gray-600">
                        <TagIcon className="h-5 w-5 mr-2 text-purple-600" />
                        Code: {item.code}
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Expires: {new Date(item.expires).toLocaleDateString()}
                      </div>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="cursor-pointer text-red-600 hover:text-red-700"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="cursor-pointer px-3 py-1 border rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="cursor-pointer px-3 py-1 border rounded-r-lg"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-lg font-bold text-purple-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Discount Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter code"
                />
                <button className="cursor-pointer px-4 py-2 bg-gradient-to-r from-gray-900 to-purple-900 text-white rounded-lg ">
                  Apply
                </button>
              </div>
            </div>

            <button className="cursor-pointer w-full bg-gradient-to-r from-gray-900 to-purple-900  text-white py-3 rounded-lg  transition-colors flex items-center justify-center">
              <LockClosedIcon className="h-5 w-5 mr-2" />
              Secure Checkout
            </button>

            <button onClick={()=>navigate('/browse')} className="cursor-pointer w-full mt-4 text-purple-600 hover:text-purple-700 flex items-center justify-center">
              <ArrowLeftIcon className="h-5 w-5 mr-2 " />
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default Cart;
