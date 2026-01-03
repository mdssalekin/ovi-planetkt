import React from "react";
import PayLogo from './assets/pay.svg';
import gaviLogo from './assets/logo 2.png';

const Footer = () => {
  return (
    <div className="w-full bg-brand-16 text-sm" id="footer">
      {/* Top Section */}
      <div className="h-fit px-5 md:px-0">
        <div className="container grid grid-cols-1 gap-7 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* 1️⃣ Logo & Company Info */}
          <div className="w-full text-brand-3">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <div className="flex items-baseline justify-center md:justify-start">
                <img
                  src={gaviLogo}
                  style={{ height: 256, width: 256,}}
                  alt="logo"
                  className="h-12 w-[110px] cursor-pointer"
                />
              </div>
              <p>Let us be your trusted travel companion every step of the way.</p>

              {/* 2️⃣ Social Media Links */}
              <div className="flex items-baseline justify-center gap-2 md:justify-start">
                <a href="https://www.facebook.com/planetkt0" target="_blank" className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black/[16%] hover:bg-brand-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="currentColor"
                    style={{ color: "#1877f2" }}
                    viewBox="0 0 24 24"
                    >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/plane__tickets" target="_blank" className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black/[16%] hover:bg-brand-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/company/planetkt0" target="_blank" className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black/[16%] hover:bg-brand-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                </a>
              </div>
            </div>
          </div>

          {/* 3️⃣ Explore Links */}
          <div className="w-full text-black">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <p className="pb-2 text-lg font-medium">Explore</p>
              <div className="flex flex-col md:flex-col gap-1">
                <a href="/flight" className="hover:text-orange-400">Flight</a>
                <a href="/hotel" className="hover:text-orange-400">Hotel</a>
                <a href="/holiday" className="hover:text-orange-400">Holiday</a>
                <a href="/visa" className="hover:text-orange-400">Visa</a>
                <a href="https://blog.firsttrip.com/" target="_blank" className="hover:text-orange-400">Travel Guide</a>
              </div>
            </div>
          </div>

          {/* 4️⃣ Useful Links */}
          <div className="w-full text-black">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <p className="pb-2 text-lg font-medium">Useful Links</p>
              <div className="flex flex-col gap-1">
                <a href="/about-us" className="hover:text-orange-400">About Us</a>
                <a href="/about-us?id=contact_us" className="hover:text-orange-400">Contact Us</a>
                <a href="/visa" className="hover:text-orange-400">Visa Guide & Application</a>
                <a href="/terms-conditions" className="hover:text-orange-400">Terms & Conditions</a>
                <a href="/privacy-policy" className="hover:text-orange-400">Privacy Policy</a>
              </div>
            </div>
          </div>

          {/* 5️⃣ Contact Info */}
          <div className="w-full text-brand-3">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <p className="pb-2 text-lg font-medium">Contact Us</p>
              <div className="flex flex-col gap-2">
                <p>2rd floor(Lift 3), Venus Complex, Kha -199/2-4 Progati Saroni, Middle Badda, Dhaka-1212</p>
                <p>contact.planetkt@gmail.com</p>
                <p>01885377744</p>
              </div>
              <a href="#" className="flex items-center gap-2 underline">
                <img src="/images/footer/V2/location.svg" alt="Location" className="w-5 h-5" />
                View Map
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 6️⃣ Certification / Badges */}
      <div className="rounded-lg bg-brand-17 p-2 md:rounded-none">
        <div className="container flex flex-col items-center justify-between gap-5 text-sm text-brand-3 md:flex-row">
          {/* 7️⃣ Payment Method */}
          <div className="flex flex-col items-start gap-2 mt-4 md:mt-0">
            <p className="text-lg font-medium">Payment Method</p>
            <img src={PayLogo} alt="Payment Method" className="w-[384px] h-auto md:h-7" />
          </div>
        </div>
      </div>

      {/* 8️⃣ Bottom Bar */}
      <div className="container flex flex-col items-center gap-5 pb-20 pt-10 text-sm text-brand-3 md:flex-row md:justify-between md:gap-10 md:pb-0 md:pt-0">
        <div className="flex basis-1/2 items-center">
          <p>© 2026 <span className="font-bold text-brand-1">PlaneTkt.com</span> All Rights Reserved</p>
        </div>
        <div className="flex basis-1/2 flex-wrap items-center justify-center gap-6 md:justify-end">
          <a href="/emi-policy" target="_blank">EMI Policy</a>
          <a href="/faq" target="_blank">FAQ’s</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
