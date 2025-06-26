// src/pages/PricingPage.jsx
import React from 'react';

function PricingPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-10">
      <div className="w-full p-8 bg-white rounded-lg shadow-md border border-gray-200 justify-center items-center flex-row">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Pricing</h2>
        <p className="text-center text-gray-600 mb-8">
          Find a plan that's right for you.
        </p>
        
        <div className="flex md:grid-cols-3 gap-8  justify-center items-center">
          {/* Free Plan */}
          <div className="border rounded-lg p-6  w-[350px] flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold mb-4">Free</h3>
            <p className="text-4xl font-bold mb-4"> ₹0<span className="text-lg font-normal">/mo</span></p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li>Unlimited Resume</li>
              <li>All Templates</li>
              <li>PDF Downloads</li>
            </ul>
            <button className="w-full bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">
              Current Plan
            </button>
          </div>
          
        
        </div>
      </div>
    </div>
  );
}

export default PricingPage;