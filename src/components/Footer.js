import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-medium">
          <div className="flex items-center gap-2">
            <span>Cloudflare Ray ID:</span>
            <span className="font-mono">9a20502cb966618c</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <span>Your IP:</span>
            <button className="cloudflare-link font-mono">
              Click to reveal
            </button>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <span>Performance & security by</span>
            <a 
              href="https://cloudflare.com" 
              className="cloudflare-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cloudflare
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;