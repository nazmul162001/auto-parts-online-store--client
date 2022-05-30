import React from 'react';
import Footer from '../Shared/Footer';

const Blogs = () => {
  return (
    <div>
      <h2 className="text-center text-5xl text-gray-500 my-5">
        Our Recents Blogs
      </h2>
      <div className="accordion px-8 mb-12">
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                <strong>Q1. </strong> How will you improve the performance of a
                react applications?
              </span>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class=""
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                To Improve our react applications performance Keeping component
                state local where necessary We have learned that a state update
                in a parent component re-renders the parent and its child
                components.So, to ensure re-rendering a component only happens
                when necessary, we can extract the part of code that cares about
                the component state, making it local to that part of the code.
              </p>
              <p className="my-1">
                {' '}
                (i) Using the useCallback Hook With the useCallback Hook, the
                incrementCount function only redefines when the count dependency
                array changes
              </p>
              <p className="my-1">
                {' '}
                (ii) Using the useMemo Hook When the prop we pass down to a
                child component is an array or object, we can use a useMemo Hook
                to memoize the value between renders. As we have learned above,
                these values point to different spaces in memory and are
                entirely new values.
              </p>
              <p className="my-1">
                {' '}
                (iii) Lazy loading images in React To optimize an application
                that consists of several images, we can avoid rendering all of
                the images at once to improve the page load time. With lazy
                loading, we can wait until each of the images is about to appear
                in the viewport before we render them in the DOM.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                <strong>Q2. </strong> What is a unit test? Why should write unit
                tests?
              </span>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class=""
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                <strong> What is Unit Testing? </strong> UNIT TESTING is a type
                of software testing where individual units or components of a
                software are tested. The purpose is to validate that each unit
                of the software code performs as expected. Unit Testing is done
                during the development of an application by the developers. Unit
                Tests isolate a section of code and verify its correctness. A
                unit may be an individual function, method, procedure, module,
                or object. In SDLC, STLC, V Model, Unit testing is first level
                of testing done before integration testing. Unit testing is a
                WhiteBox testing technique that is usually performed by the
                developer. Though, in a practical world due to time crunch or
                reluctance of developers to tests, QA engineers also do unit
                testing.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                <strong>Why Unit Testing? </strong> Unit Testing is important
                because software developers sometimes try saving time doing
                minimal unit testing and this is myth because inappropriate unit
                testing leads to high cost Defect fixing during System Testing,
                Integration Testing and even Beta Testing after application is
                built. If proper unit testing is done in early development, then
                it saves time and money in the end.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                <strong>Q3. </strong> How does prototypical inheritance work?
              </span>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class=""
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                সহজ কথায়, প্রোটোটাইপিকাল ইনহ্যারিটেন্স হলো উত্তরাধিকার অন্য
                বস্তু থেকে বস্তুর বৈশিষ্ট্য অ্যাক্সেস করার ক্ষমতা বোঝায়।
                বিদ্যমান অবজেক্ট কনস্ট্রাক্টরে নতুন বৈশিষ্ট্য এবং পদ্ধতি যোগ
                করতে আমরা একটি জাভাস্ক্রিপ্ট প্রোটোটাইপ ব্যবহার করি। আমরা তখন
                মূলত আমাদের JS কোডকে একটি প্রোটোটাইপ থেকে সম্পত্তির উত্তরাধিকারী
                হতে বলতে পারি। প্রোটোটাইপিকাল ইনহেরিটেন্স আমাদেরকে একটি
                রেফারেন্স পয়েন্টার ফাংশনের মাধ্যমে একটি জাভাস্ক্রিপ্ট অবজেক্ট
                থেকে অন্যটিতে বৈশিষ্ট্য বা পদ্ধতিগুলিকে পুনরায় ব্যবহার করতে
                দেয়।
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                <strong>Q4. </strong> Why you do not set the state directly in
                React. For example, if you have const [products, setProducts] =
                useState([]). Why you do not set products = [...] instead, you
                use the setProducts
              </span>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class=""
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                There are many reason for not to set the state directly in
                React. Here is some important reason -
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                (i) If we update state directly, calling the setState()
                afterward may just replace the update we made.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                (ii) When we directly update the state, it does not change
                this.state immediately. Instead, it creates a pending state
                transition, and accessing it after calling this method will only
                return the present value.
              </p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                (iii) And we will lose control of the state across all
                components.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                <strong>Q5. </strong> You have an array of product. Each object
                has a name, price, description etc. How will you implement a
                search to find product by name?
              </span>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class=""
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="font-bold">
                Suppose i have an array of product like this
              </p>
              <textarea
              className='w-1/2 px-5'
                name=""
                id=""
                cols="30"
                value='
                const products = [
                  "Dell hardcore 129 laptop",
                  "iphone 1Tb camera flashlight phone",
                  "yellow laptop with balack camera",
                  "Dell 1x59 lenovo commercial yoga Laptop",
                  "LG supernove laptop dell",
                  "HTC low price phone",
                  "Dell purple color phone with Laptop"
              ]

                const searching = "phone";
                    const output = [];
                    for (const product of products) {
                        if (product.toLowerCase().includes(searching.toLowerCase())) {
                            output.push(product)
                        }
                    }
                    console.log(output);'
                rows="10"
              ></textarea>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              data-accordion-target="#accordion-collapse-body-1"
              aria-expanded="true"
              aria-controls="accordion-collapse-body-1"
            >
              <span>
                <strong>Q6. </strong> What are the different way to manage a
                state in a different way?
              </span>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            class=""
            aria-labelledby="accordion-collapse-heading-1"
          >
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
                স্টেট ম্যানেজ করার জন্য অনেক উপায় রয়েছে । এর জন্য রিএ্যক্ট এর
                বিল্ট ইন কিছু উপায় রয়েছে তার ভিতরে জনপ্রিয় হচ্ছে useState । এই
                useState দিয়ে সহজেই স্টেট ম্যানেজ করা যায় । এবং এইরকম আরো একটি
                পদ্ধতি হচ্ছে useReducer । use reducer দিয়েও আমরা চাইলে state ও
                manage করতে পারি । তবে একটু বড় application এর জন্য এগুলো তেমন
                ভূমিকা রাখতে পারে না । এজন্য বড় application এর জন্য react এর
                কিছু state management library আছে সেগুলো ব্যাবহার করতে হয় ‌।
                তার মধ্যে জনপ্রিয় হচ্ছে redux । Redux দিয়ে আমারা স্টেট ম্যানেজ
                স্টেট ম্যানেজ large application এর state গুলো খুব সহজেই ম্যানেজ
                করতে পারি । তাই বলা যায় react State Manage এর অনেক উপায় আছে
                তার ভিতরে , useState , useReducer এবং redux , MobX , Vuex
                ইত্যাদি বেশি জনপ্রিয়।
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
