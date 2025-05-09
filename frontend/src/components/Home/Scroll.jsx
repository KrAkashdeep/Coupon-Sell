import React from 'react'

function Scroll() {
  const companies = [
    "CouponHub", "DealMagnet", "SavingsZone", "DiscountWave",
    "VoucherVault", "DealStream", "OfferOcean", "BargainFlow"
  ];

  return (
    <div className="relative overflow-hidden bg-gray-900 py-4">
      <div className="animate-infinite-scroll whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {companies.map((company, idx) => (
              <React.Fragment key={`${i}-${idx}`}>
                <span className="mx-8 text-2xl font-bold uppercase text-white">
                  {company}
                </span>
                <span className="text-2xl text-yellow-400">✦</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
      
      {/* Gradient fade effect */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-900 to-transparent"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-900 to-transparent"></div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(-75%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          display: inline-block;
          min-width: 400%;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Scroll
