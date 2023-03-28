import React from 'react';
import { Link } from 'react-router-dom';
import { ImArrowRight } from 'react-icons/im';

const Home = () => {
    return (
        <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://www.capsulink.com/assets/img/hero/open-feature-smart-urls.svg" className=" w-2/3" />
          <div>
            <h1 className="text-5xl font-bold text-green-400"><span className='text-orange-500'>URL </span>Shortener</h1>
            <p className="py-6">
URL Shortener is a simple react web application where users can short their long URL into a short URL.</p>
           <Link to={'/short'}>
           <button className="btn rounded-sm   bg-blue-600 py-3 px-10 border-none hover:bg-blue-500">Get Started <span className='ml-2'><ImArrowRight></ImArrowRight></span></button></Link>
          </div>
        </div>
      </div>
    );
};

export default Home;