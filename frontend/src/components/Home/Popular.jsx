// import React from 'react'
// import { FireIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
// 

// function Popular() {
//   
//   const coupons = [
//     { title: "Fashion Frenzy", discount: "60% OFF", code: "STYLE60", expires: "2024-03-31" },
//     { title: "Tech Treat", discount: "$200 OFF", code: "GADGET200", expires: "2024-04-15" },
//     { title: "Grocery Bonanza", discount: "40% OFF", code: "GROCERY40", expires: "2024-04-05" },
//     { title: "Travel Deal", discount: "25% OFF", code: "WANDER25", expires: "2024-03-28" },
//     { title: "Home Essentials", discount: "30% OFF", code: "HOME30", expires: "2024-04-10" },
//     { title: "Beauty Blast", discount: "50% OFF", code: "GLOW50", expires: "2024-04-01" }
//   ]
//   const brands = [
//     { name: "Amazon", coupons: 45, logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg", rating: 4.8 },
//     { name: "Nike", coupons: 32, logo: "https://clipartmag.com/images/nike-logo-png-38.png", rating: 4.7 },
//     { name: "Adidas", coupons: 39, logo: "https://th.bing.com/th/id/R.a256d74b77286d29095f6bcd600cf991?rik=ZPx%2fHsPcoCEgZQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f10%2fAdidas-Logo.jpg&ehk=W3QAdAlZyX6x2fhyFVPKxcbnmjhMAJJu%2fZiPr26XrkY%3d&risl=&pid=ImgRaw&r=0", rating: 4.4 },
//   ]
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-4xl font-bold flex items-center">
//             <FireIcon className="h-10 w-10 text-orange-500 mr-3" />
//             Trending Deals
//           </h2>
//           <button onClick={()=>navigate("/browse")}  className="cursor-pointer flex items-center text-purple-600 font-semibold hover:text-purple-700">
//             View All
//             <ArrowRightIcon className="h-5 w-5 ml-2" />
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {coupons.map((coupon, index) => (
//             <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
//               <div className="relative h-48 bg-gradient-to-r from-gray-900 to-purple-900 text-gray-300 rounded-t-2xl">
//                 <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
//                   {coupon.discount}
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <h3 className="text-2xl font-bold">{coupon.title}</h3>
//                   <p className="text-sm opacity-90">Expires {coupon.expires}</p>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <span className="text-gray-500 text-sm">Use code</span>
//                     <div className="text-2xl font-bold text-purple-600">{coupon.code}</div>
//                   </div>
//                   <button className="bg-gradient-to-r from-gray-900 to-purple-900 text-white px-6 py-3 rounded-xl  transition-colors duration-300">
//                     Get Deal
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

 
        
//         <div className="mt-16">
//           <h3 className="text-2xl font-bold mb-8">Popular Brands</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {brands.map((brand, index) => (
//               <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 group">
//                 <div className="flex items-center justify-between mb-4">
//                   <img 
//                     src={brand.logo} 
//                     alt={brand.name} 
//                     className="h-12 object-contain"
//                   />
//                   <div className="flex items-center bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
//                     <span className="text-sm font-semibold">{brand.rating}</span>
//                     <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                     </svg>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h4 className="text-lg font-semibold">{brand.name}</h4>
//                     <p className="text-gray-500 text-sm">{brand.coupons} active coupons</p>
//                   </div>
//                   <button className="bg-gradient-to-r from-gray-900 to-purple-900 text-white px-4 py-2 rounded-lg transition-colors text-sm">
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Popular





import React from 'react'
import { Flame, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const Popular = () => {
  const navigate = useNavigate();
  const coupons = [
    { title: "Fashion Frenzy", discount: "60% OFF", code: "STYLE60", expires: "2024-03-31" },
    { title: "Tech Treat", discount: "$200 OFF", code: "GADGET200", expires: "2024-04-15" },
    { title: "Grocery Bonanza", discount: "40% OFF", code: "GROCERY40", expires: "2024-04-05" },
    { title: "Travel Deal", discount: "25% OFF", code: "WANDER25", expires: "2024-03-28" },
    { title: "Home Essentials", discount: "30% OFF", code: "HOME30", expires: "2024-04-10" },
    { title: "Beauty Blast", discount: "50% OFF", code: "GLOW50", expires: "2024-04-01" }
  ]
  
  const brands = [
    { name: "Amazon", coupons: 45, logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg", rating: 4.8 },
    { name: "Nike", coupons: 32, logo: "https://clipartmag.com/images/nike-logo-png-38.png", rating: 4.7 },
    { name: "Adidas", coupons: 39, logo: "https://th.bing.com/th/id/R.a256d74b77286d29095f6bcd600cf991?rik=ZPx%2fHsPcoCEgZQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2016%2f10%2fAdidas-Logo.jpg&ehk=W3QAdAlZyX6x2fhyFVPKxcbnmjhMAJJu%2fZiPr26XrkY%3d&risl=&pid=ImgRaw&r=0", rating: 4.4 },
  ]
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold flex items-center">
            <Flame className="h-10 w-10 text-orange-500 mr-3" />
            Trending Deals
          </h2>
          <button onClick={()=>navigate("/browse")} className="cursor-pointer flex items-center text-purple-600 font-semibold hover:text-purple-800">
            View All
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coupons.map((coupon, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative h-48 bg-purple-100 text-gray-900 rounded-t-2xl flex flex-col justify-between p-4">
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  {coupon.discount}
                </div>
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-purple-800">{coupon.title}</h3>
                  <p className="text-sm text-purple-700">Expires {coupon.expires}</p>
                </div>
                <div className="h-16 w-full absolute bottom-0 left-0 bg-gradient-to-t from-purple-200 to-transparent opacity-80"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-500 text-sm">Use code</span>
                    <div className="text-2xl font-bold text-purple-600">{coupon.code}</div>
                  </div>
                  <button className="bg-gradient-to-r from-gray-900 to-purple-900 text-white px-6 py-3 rounded-xl transition-colors duration-300">
                    Get Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Popular Brands</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="h-8 object-contain"
                  />
                  <div className="flex items-center bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{brand.rating}</span>
                    <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">{brand.name}</h4>
                    <p className="text-gray-500 text-sm">{brand.coupons} active coupons</p>
                  </div>
                  <button className="bg-gradient-to-r from-gray-900 to-purple-900 text-white px-4 py-2 rounded-lg transition-colors text-sm">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Popular