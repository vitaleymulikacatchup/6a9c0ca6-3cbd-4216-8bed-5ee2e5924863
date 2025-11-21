import React from 'react';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Origin is unreachable
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-medium">
              <span>Visit</span>
              <a 
                href="https://cloudflare.com" 
                className="cloudflare-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                cloudflare.com
              </a>
              <span>for more information.</span>
            </div>
            <div className="mt-2 text-sm text-gray-medium">
              2025-11-21 12:50:33 UTC
            </div>
          </div>
          <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium text-gray-dark">
            Error code 523
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;