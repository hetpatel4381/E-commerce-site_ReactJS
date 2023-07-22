import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../Components/hero';
import FeaturedProducts from '../Components/FeaturedProducts';

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
              <span className="shadow-lg p-3 mt-3 text-white">
                Trade in Offer!
              </span>
              <h1>Super Value Deals</h1>
              <h2>On all Products</h2>
              <p className="p-3 m-0">Save more with Apneck</p>
              <Link className="button-link mb-3">Shop Now</Link>
            </div>
          </div>
        </div>
      </section>

      <Hero />

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Featured Products</h1>
              <p>All Weather Modern Design</p>
            </div>
            <FeaturedProducts />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;