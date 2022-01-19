import React from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('Summiting Contact information!')

    emailjs.sendForm('default_service', 'template_vvznx6r', form.current, 'user_icNAMYeJRaQLivglalOYT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
    
  };

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-48 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=4700+keele+street+&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md dark:bg-gray-900">
            <div className="lg:w-1/1.5 px-6">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                4700 Keele St<br />
                North York, ON<br />
                Canada, M3J 1P0
              </p>
            </div>
            <div className="lg:w-1/1.5 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:kashyap5551@gmail.com" className="text-indigo-400 leading-relaxed hover:text-sky-600">
                kashyap5551@gmail.com
              </a>
              <h2 className="title-font font-semibold tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+1 (437) 981 0540</p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Please feel free to reach out. Whether it is for a job or a project. I'd be glad to hear from you. <br />
            Sending this form once is sufficient!
          </p>
          <div className="relative mb-4">
            <label className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="w-full dark:bg-gray-800 bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="from_email"
              className="w-full dark:bg-gray-800 bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full dark:bg-gray-800 bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            value="Send Email"
            className="text-white dark:bg-gray-800 bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 dark:hover:bg-indigo-500 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}