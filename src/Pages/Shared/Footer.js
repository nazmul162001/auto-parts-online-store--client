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
      className="footer p-10 bg-base-200 text-white mt-[380px] lg:mt-0"
    >
      <div>
        <span className="footer-title">MENU</span>
        <a className="link link-hover hover:text-primary">Home</a>
        <a className="link link-hover hover:text-primary">Dashboard</a>
        <a className="link link-hover hover:text-primary">My Profile</a>
        <a className="link link-hover hover:text-primary">Portfolio</a>
        <a className="link link-hover hover:text-primary">Blogs</a>
        <a className="link link-hover hover:text-primary">Contact Us</a>
      </div>
      <div>
        <span className="footer-title">CATALOG</span>
        <a className="link link-hover hover:text-primary">Tyres and wheels</a>
        <a className="link link-hover hover:text-primary">Engine Parts</a>
        <a className="link link-hover hover:text-primary">
          Electrical car system
        </a>
        <a className="link link-hover hover:text-primary">Fluid chemicals</a>
        <a className="link link-hover hover:text-primary">Suspension</a>
        <a className="link link-hover hover:text-primary">Lighting systems</a>
      </div>
      <div>
        <span className="footer-title">ADDRESS</span>
        <p>Address: Bangladesh, Jashore</p>
        <p>Jashore, Sadar Road</p>
        <p>
          Email:{' '}
          <strong className="font-bold text-sm">webdevnazmulh@gmail.com</strong>{' '}
        </p>
        <p>
          Youtube:{' '}
          <strong className="text-sm font-bold">NEXT LEVEL CODING</strong>{' '}
        </p>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-white ">
              Enter your email address
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16 text-black"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
