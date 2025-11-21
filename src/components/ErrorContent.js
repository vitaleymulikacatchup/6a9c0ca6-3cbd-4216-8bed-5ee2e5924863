import React from 'react';

function ErrorContent() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* What happened? */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What happened?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The origin web server is not reachable.
            </p>
          </div>

          {/* What can I do? */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What can I do?
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  If you're a visitor of this website:
                </h3>
                <p className="text-gray-700">
                  Please try again in a few minutes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  If you're the owner of this website:
                </h3>
                <div className="text-gray-700 space-y-3">
                  <p>
                    Check your DNS Settings. A 523 error means that Cloudflare could not reach your host web server. The most common cause is that your DNS settings are incorrect.
                  </p>
                  <p>
                    Please contact your hosting provider to confirm your origin IP and then make sure the correct IP is listed for your A record in your Cloudflare DNS Settings page.
                  </p>
                  <p>
                    <a 
                      href="#" 
                      className="cloudflare-link"
                    >
                      Additional troubleshooting information here.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorContent;