import { SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-6">
              Unlock Amazing
              <span className="inline-block ml-3">
                Discounts
                <SparklesIcon className="h-12 w-12 text-amber-400 inline-block ml-2 -mt-4" />
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Buy and sell exclusive coupons with zero hassle. Join thousands saving big on their favorite brands!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={()=>navigate("/browse")} className="cursor-pointer bg-gradient-to-r from-gray-900 to-purple-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-shadow duration-300">
                Browse Coupons
                <ArrowRightIcon className="h-5 w-5 inline-block ml-2" />
              </button>
              <button onClick={()=>navigate("/howWork")} className="cursor-pointer border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors">
                How It Works
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center md:justify-start space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-gray-500">Active Users</div>
              </div>
              <div className="h-12 w-px bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">50K+</div>
                <div className="text-gray-500">Coupons Listed</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="md:w-1/2 relative">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-400 blur-3xl opacity-20 rounded-full"></div>
              <img 
                src="./public/c1.jpg" 
                alt="Coupon marketplace"
                className="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
