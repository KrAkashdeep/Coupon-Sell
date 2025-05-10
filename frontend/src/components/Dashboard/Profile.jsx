import React, { useState } from 'react';
import { UserCircleIcon, AtSymbolIcon, DevicePhoneMobileIcon, LockClosedIcon, GlobeAltIcon, BellIcon } from '@heroicons/react/24/outline';

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@couponmagnet.com",
    phone: "+1 555-123-4567",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: ""
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false
  });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Profile Settings</h1>

      {/* Profile Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold flex items-center">
            <UserCircleIcon className="h-6 w-6 mr-2 text-purple-600" />
            Personal Information
          </h2>
          <button className="text-purple-600 hover:text-purple-700">Edit</button>
        </div>

        <div className="flex items-center space-x-6 mb-8">
          <img 
            src={user.avatar}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover border-4 border-purple-100"
          />
          <div className="space-y-1">
            <button className="text-sm text-purple-600 hover:text-purple-700">
              Upload new photo
            </button>
            <p className="text-sm text-gray-500">JPG or PNG, max 2MB</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              value={user.name}
              onChange={(e) => setUser({...user, name: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="flex items-center">
              <AtSymbolIcon className="h-5 w-5 mr-2 text-gray-400" />
              <input
                value={user.email}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
                disabled
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <div className="flex items-center">
              <DevicePhoneMobileIcon className="h-5 w-5 mr-2 text-gray-400" />
              <input
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold flex items-center mb-6">
          <LockClosedIcon className="h-6 w-6 mr-2 text-purple-600" />
          Security
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Current Password</label>
            <input
              type="password"
              value={security.currentPassword}
              onChange={(e) => setSecurity({...security, currentPassword: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              value={security.newPassword}
              onChange={(e) => setSecurity({...security, newPassword: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Change Password
          </button>
        </div>
      </div>

      {/* Preferences Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center mb-6">
          <BellIcon className="h-6 w-6 mr-2 text-purple-600" />
          Notifications
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.emailNotifications}
                onChange={(e) => setPreferences({...preferences, emailNotifications: e.target.checked})}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full ${preferences.emailNotifications ? 'bg-purple-600' : 'bg-gray-300'}`}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform ${preferences.emailNotifications ? 'translate-x-5 bg-white' : 'bg-white'}`} />
              </div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <h3 className="font-medium">SMS Notifications</h3>
              <p className="text-sm text-gray-500">Receive updates via SMS</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={preferences.smsNotifications}
                onChange={(e) => setPreferences({...preferences, smsNotifications: e.target.checked})}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full ${preferences.smsNotifications ? 'bg-purple-600' : 'bg-gray-300'}`}>
                <div className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform ${preferences.smsNotifications ? 'translate-x-5 bg-white' : 'bg-white'}`} />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;