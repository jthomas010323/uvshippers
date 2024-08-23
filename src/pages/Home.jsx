import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCards from "../components/ProductCards";
import uvshippersLogo from "../assets/uvshippers-logo.png";
import upsLogo from "../assets/ups-logo-png-transparent.png";
import fedexLogo from "../assets/fedex.png";
import makatiLogo from "../assets/makatiLogo.png";
import faxImg from "../assets/faxImage.png";
import packageImg from "../assets/packageSupplies.png";
import copyImg from "../assets/copying.png";
import shippingImg from "../assets/shippingImg.png";
import mailboxImg from "../assets/mailboxImg.png";
import recievingImg from "../assets/recievingImg.png";
import uhaulImg from "../assets/uhaul.png";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <body>
        <section class="bg-[#242424]">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="lg:mr-auto place-self-center lg:col-span-7">
              <h1 class="text-center lg:text-left max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Universal Shippers
              </h1>
              <p class="max-w-2xl lg:text-left text-center font-light text-white md:text-base lg:text-lg dark:text-gray-400">
                Universal Shippers Corp is your go-to UPS-authorized shipping
                outlet and supply store on northern Staten Island. Whether
                you're shipping a single package or managing a truckload of
                shipments, we've covered you with a wide range of packaging
                supplies, including sturdy cardboard boxes, durable packing
                tape, protective bubble wrap, packing peanuts, and mailing
                tubes. Our large receiving area can accommodate truckloads of
                packages, making it easy for businesses to handle bulk
                shipments. Our team offers expert packing advice to ensure your
                items are secure, and we also provide convenient business
                solutions like faxing and copying, making us a one-stop shop for
                all your shipping and office needs. With the ability to ship
                through FedEx and UPS, we offer flexible options to get your
                packages to their destination quickly and reliably. Stop by
                Universal Shippers Corp for all your shipping needs—we're
                committed to making your experience fast, easy, and hassle-free.
              </p>
              {/* <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                View Our Services
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a> */}
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
              <img
                className="object-contain"
                src={uvshippersLogo}
                alt="mockup"
              />
            </div>
          </div>
        </section>
        <section className="my-10">
          <h2 className="text-center text-2xl font-bold pb-5">
            Authorized UPS, FedEx, and Makati Express Shipping Center
          </h2>
          <div className="flex sm:flex-row flex-col flex-wrap justify-evenly">
            <img src={upsLogo} className="h-32 mb-2 mx-auto" />
            <img src={fedexLogo} className="h-32 mb-2 mx-auto" />
            <img src={makatiLogo} className="h-32 mb-2 mx-auto" />
          </div>
        </section>
        <section class="w-full mb-5">
          <h1 className="text-center text-2xl font-bold">
            OUR FEATURED PRODUCTS & SERVICES
          </h1>
          <div className="flex flex-row justify-evenly flex-wrap">
            <ProductCards name="Package Shipping" imgUrl={shippingImg} />
            <ProductCards name="Package Recieving" imgUrl={recievingImg} />
            <ProductCards name="Packing Supplies" imgUrl={packageImg} />
            <ProductCards name="Fax Services" imgUrl={faxImg} />
            <ProductCards name="Copying Services" imgUrl={copyImg} />
            <ProductCards name="Mailbox Rental" imgUrl={mailboxImg} />
            <ProductCards name="U-Haul Rental" imgUrl={uhaulImg} />
          </div>
        </section>
      </body>

      <Footer />
    </>
  );
};

export default Home;
