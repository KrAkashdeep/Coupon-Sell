import React, { useState } from 'react';
import { GlobeAltIcon, ShieldCheckIcon, SunIcon, TrashIcon } from '@heroicons/react/24/outline';

function Setting() {
  const [settings, setSettings] = useState({
    language: 'en',
    timezone: 'UTC+05:30',
    theme: 'light',
    accentColor: '#8b5cf6',
    dataSharing: true
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Account Settings</h1>

      {/* General Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold flex items-center mb-6">
          <GlobeAltIcon className="h-6 w-6 mr-2 text-purple-600" />
          General
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({...settings, language: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => setSettings({...settings, timezone: e.target.value})}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            >
              <option value="UTC+05:30">(UTC+05:30) India</option>
              <option value="UTC-05:00">(UTC-05:00) Eastern Time</option>
              <option value="UTC+00:00">(UTC+00:00) London</option>
            </select>
          </div>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold flex items-center mb-6">
          <ShieldCheckIcon className="h-6 w-6 mr-2 text-purple-600" />
          Privacy
        </h2>

        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <h3 className="font-medium">Data Sharing</h3>
            <p className="text-sm text-gray-500">Allow anonymous usage statistics</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={settings.dataSharing}
              onChange={(e) => setSettings({...settings, dataSharing: e.target.checked})}
              className="sr-only"
            />
            <div className={`w-11 h-6 rounded-full ${settings.dataSharing ? 'bg-purple-600' : 'bg-gray-300'}`}>
              <div className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform ${settings.dataSharing ? 'translate-x-5 bg-white' : 'bg-white'}`} />
            </div>
          </label>
        </div>
      </div>

      {/* Appearance Settings */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold flex items-center mb-6">
          <SunIcon className="h-6 w-6 mr-2 text-purple-600" />
          Appearance
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Theme</label>
            <div className="flex gap-4">
              <button 
                onClick={() => setSettings({...settings, theme: 'light'})}
                className={`p-2 rounded-lg ${settings.theme === 'light' ? 'ring-2 ring-purple-500' : 'bg-gray-100'}`}
              >
                <SunIcon className="h-6 w-6 text-gray-600" />
              </button>
              <button 
                onClick={() => setSettings({...settings, theme: 'dark'})}
                className={`p-2 rounded-lg ${settings.theme === 'dark' ? 'ring-2 ring-purple-500' : 'bg-gray-100'}`}
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Accent Color</label>
            <input
              type="color"
              value={settings.accentColor}
              onChange={(e) => setSettings({...settings, accentColor: e.target.value})}
              className="w-12 h-12 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50 rounded-xl shadow-sm p-6 border border-red-200">
        <h2 className="text-xl font-semibold flex items-center mb-6 text-red-600">
          <TrashIcon className="h-6 w-6 mr-2" />
          Danger Zone
        </h2>

        <div className="space-y-4">
          <button 
            onClick={() => setShowDeleteModal(true)}
            className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50"
          >
            Delete Account
          </button>
        </div>
      </div>

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative">
            <button 
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold mb-4 text-red-600">Delete Account</h2>
            <p className="mb-6">Are you sure you want to permanently delete your account? This action cannot be undone.</p>
            
            <div className="flex justify-end gap-4">
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Confirm Deletion
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
