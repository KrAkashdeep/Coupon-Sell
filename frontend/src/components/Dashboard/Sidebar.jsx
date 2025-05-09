import React from 'react'
import { 
  HomeIcon,
  UserCircleIcon,
  ShoppingBagIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  TicketIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import { NavLink, useNavigate } from 'react-router-dom'

function Sidebar() {
  const navigate = useNavigate();
  const menuItems = [
    // Add Dashboard as first menu item
    { name: "Dashboard", icon: HomeIcon, path: "" },
    { name: "Sell Coupons", icon: CurrencyDollarIcon, path: "sell" },
    { name: "Buy Coupons", icon: ShoppingBagIcon, path: "buy" },
    { name: "My Purchases", icon: ChartBarIcon, path: "purchases" },
    { name: "My Listings", icon: TicketIcon, path: "listings" },
    { name: "Profile", icon: UserCircleIcon, path: "profile" },
    { name: "Settings", icon: Cog6ToothIcon, path: "settings" }
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 flex flex-col">
      {/* User Profile */}
      <div className="p-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 rounded-full">
            <UserCircleIcon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">John Doe</h3>
            <p className="text-gray-400 text-sm">john@couponmagnet.com</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-2">
        {menuItems.map((item) => (
          // In the NavLink component, update the 'to' prop:
          <NavLink
            key={item.path}
            to={`/dashboard/${item.path}`}
            end // Add this to mark exact match
            className={({ isActive }) => 
              `flex items-center p-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon className="h-6 w-6" />
            <span className="ml-3">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button onClick={()=>navigate('/')} className="flex items-center w-full p-3 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
          <span className="ml-3">Log Out</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
