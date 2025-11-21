import React from 'react';
import { Check, X } from 'lucide-react';

function StatusDiagram() {
  return (
    <section className="bg-gray-light py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {/* Browser Status */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="w-20 h-16 bg-gray-400 rounded-t-lg relative">
                  <div className="absolute top-2 left-2 right-2 h-1 bg-gray-300 rounded"></div>
                  <div className="absolute top-4 left-2 right-2 h-8 bg-white rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 status-icon status-icon-check">
                  <Check className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="status-label">You</div>
            <div className="status-title text-gray-medium">Browser</div>
            <div className="status-working">Working</div>
          </div>

          {/* Cloudflare Status */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="w-20 h-16 bg-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-12 h-8 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 status-icon status-icon-check">
                  <Check className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="status-label">Stockholm</div>
            <div className="status-title cloudflare-link">Cloudflare</div>
            <div className="status-working">Working</div>
          </div>

          {/* Host Status */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="relative">
                <div className="w-20 h-16 bg-gray-400 rounded-lg relative">
                  <div className="absolute top-2 left-2 right-2 h-2 bg-gray-300 rounded"></div>
                  <div className="absolute top-5 left-2 right-2 h-2 bg-gray-300 rounded"></div>
                  <div className="absolute top-8 left-2 right-2 h-2 bg-gray-300 rounded"></div>
                  <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-300 rounded"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 status-icon status-icon-error">
                  <X className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="status-label">sargas.io</div>
            <div className="status-title text-gray-medium">Host</div>
            <div className="status-error">Error</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatusDiagram;