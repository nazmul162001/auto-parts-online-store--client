import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BsSkype } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import './OurTeamInfo.css'
import team1 from '../../../assets/images/team1.jpg';
import team2 from '../../../assets/images/team2.jpg';

const OurTeamInfo = () => {
  return (
    <section className="our-team-info my-12 grid grid-cols-1 md:grid-cols-2 gap-4 px-12 bg-neutral overflow-x-hidden">
      <div className="team-one">
        <div class="hero h-screen">
          <div class="hero-content bg-white p-8 rounded-lg flex-col lg:flex-row">
            <img
              alt=""
              src={team2}
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-xl font-bold">Kate Smith</h1>
              <h3 className="text-base text-primary font-bold">
                Carts parts Manager
              </h3>
              <p class="py-6">
                Carries out online selection of auto parts and consultations.She
                has in-dept knowledge of car repair.
              </p>
              <div className="social-icon flex">
                <div className="text-white bg-primary px-4 py-2 rounded-full flex items-center">
                  {' '}
                  <FiPhoneCall className='text-xl mr-2'/>
                  call
                </div>
                <span className="p-3 bg-neutral rounded-full mx-2">
                  {' '}
                  <AiOutlineMail />{' '}
                </span>
                <span className="p-3 bg-neutral rounded-full mx-2">
                  {' '}
                  <BsSkype />{' '}
                </span>
                <span className="p-3 bg-neutral rounded-full mx-2">
                  <FaFacebookF />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-two">
      <div class="hero h-screen">
          <div class="hero-content bg-white p-8 rounded-lg flex-col lg:flex-row">
            <img
              alt=""
              src={team1}
              class="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 class="text-xl font-bold">Jose Aldo</h1>
              <h3 className="text-base text-primary font-bold">
                Carts parts Manager
              </h3>
              <p class="py-6">
                Head of the sales department for over 5 years. Sphere of professional interrests.
              </p>
              <div className="social-icon flex">
                <div className="text-white bg-primary px-4 py-2 rounded-full flex items-center">
                  {' '}
                  <FiPhoneCall className='text-xl mr-2'/>
                  call
                </div>
                <span className="p-3 bg-neutral rounded-full mx-2">
                  {' '}
                  <AiOutlineMail />{' '}
                </span>
                <span className="p-3 bg-neutral rounded-full mx-2">
                  {' '}
                  <BsSkype />{' '}
                </span>
                <span className="p-3 bg-neutral rounded-full mx-2">
                  <FaFacebookF />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamInfo;
