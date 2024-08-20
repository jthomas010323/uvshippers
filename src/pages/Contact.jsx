import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [submittedForm, setSubmittedForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y67yegf", "template_7fefx5d", form.current, {
        publicKey: "rsMUrvmGfggXFhn07",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmittedForm(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.href = "../";
    }, "2000");
  };

  return (
    <>
      <Header />
      <Navbar />
      <body>
        <section className="bg-default-background">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
              Contact Us
            </h2>
            <p className="mb-8 font-light text-center text-white sm:text-xl">
              Got an Issue? Want to send from feedback? Need details about our
              Business plan? Let us know.
            </p>
            {submittedForm ? (
              <h1 className=" py-5 text-center font-bold text-3xl">
                Thank You for Contacting Us!
              </h1>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-8">
                <div>
                  <label
                    for="full_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="full_name"
                    name="user_name"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="email@address.com"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-shippers-orange sm:w-fit  focus:ring-4 focus:outline-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </section>
      </body>
      <Footer />
    </>
  );
};

export default Contact;
