import React from 'react';
import footer from '../../assets/images/footerBg.jpg';

const Footer = () => {
  return (
    <footer 
    style={{
      background: `url(${footer})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
     class="footer p-10 bg-base-200 text-white">
      <div>
        <span class="footer-title">MENU</span>
        <a class="link link-hover hover:text-primary">Home</a>
        <a class="link link-hover hover:text-primary">Dashboard</a>
        <a class="link link-hover hover:text-primary">My Profile</a>
        <a class="link link-hover hover:text-primary">Portfolio</a>
        <a class="link link-hover hover:text-primary">Blogs</a>
        <a class="link link-hover hover:text-primary">Contact Us</a>
      </div>
      <div>
        <span class="footer-title">CATALOG</span>
        <a class="link link-hover hover:text-primary">Tyres and wheels</a>
        <a class="link link-hover hover:text-primary">Engine Parts</a>
        <a class="link link-hover hover:text-primary">Electrical car system</a>
        <a class="link link-hover hover:text-primary">Fluid chemicals</a>
        <a class="link link-hover hover:text-primary">Suspension</a>
        <a class="link link-hover hover:text-primary">Lighting systems</a>
      </div>
      <div>
        <span class="footer-title">ADDRESS</span>
          <p>Address: Bangladesh, Jashore</p>
          <p>Jashore, Sadar Road</p>
          <p>Email: <strong className='font-bold text-sm'>webdevnazmulh@gmail.com</strong> </p>
          <p>Youtube: <strong className='text-sm font-bold'>NEXT LEVEL CODING</strong> </p>
      </div>
      <div>
        <span class="footer-title">Newsletter</span>
        <div class="form-control w-80">
          <label class="label">
            <span class="label-text text-white ">Enter your email address</span>
          </label>
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="input input-bordered w-full pr-16 text-black"
            />
            <button class="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
