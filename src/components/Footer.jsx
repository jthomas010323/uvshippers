import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto w-full ">
        <div className="bg-shippers-orange grid grid-cols-2 gap-8 px-24 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Store Hours
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="">Mon - Fri: 10AM - 7PM</a>
              </li>
              <li className="mb-4">
                <a className="">Sat: 10AM-2PM</a>
              </li>
              <li className="mb-4">
                <a className="">Sun: CLOSED</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Location
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="https://www.google.com/maps/place/UNIVERSAL+SHIPPERS/@40.6116892,-74.1407329,17z/data=!3m1!4b1!4m6!3m5!1s0x89c24da646c1f9fb:0x8ec927ceb946ec3a!8m2!3d40.6116852!4d-74.1381526!16s%2Fg%2F11w4vhmrbk?entry=ttu"
                  className="hover:underline"
                >
                  2246 Victory Blvd, Staten Island, NY 10314
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Services
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="">UPS</a>
              </li>
              <li className="mb-4">
                <a className="">FEDEX</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Contact
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a className="">(347) 466-4628</a>
              </li>
              <li className="mb-4">
                <a className="">support@uvshippers.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-24 py-6 bg-default-background flex items-center justify-between w-full">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2024 <a>Universal Shippers</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a
              href="https://www.instagram.com/uvshippers"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
