import React from "react";

const Location = () => {
  const mapUrl =
    "https://maps.app.goo.gl/EbHiUszPVJJQbSao7?g_st=ic";

  return (
    <section
      id="location"
      className="bg-[#faf8f4] px-5 py-16 sm:px-8 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">

          {/* Location Details */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#ec8c0e]">
              Find Us
            </p>

            <h2 className="mb-5 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Location
            </h2>

            <p className="mb-6 text-base leading-7 text-gray-600">
              Conveniently located and easy to reach. Find us on Google Maps
              and get directions to our property.
            </p>

            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ec8c0e]/10 text-xl">
                📍
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  Location
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  Aarosha Executive
                </p>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#ec8c0e]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#d97d08]
                hover:shadow-[0_8px_25px_rgba(236,140,14,0.3)]
              "
            >
              📍 Get Directions
            </a>
          </div>

          {/* Google Maps */}
          <div className="h-[350px] overflow-hidden rounded-2xl shadow-lg sm:h-[420px]">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4071.8342727347112!2d73.9119869!3d18.3965578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb002e9faf77%3A0x9bc0bc5442f90121!2saarosha_lodging_A1!5e1!3m2!1sen!2sin!4v1787774867783!5m2!1sen!2sin"
            width="100%"
              height="100%"
            style={{ border: 0 }}
            loading="lazy" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;