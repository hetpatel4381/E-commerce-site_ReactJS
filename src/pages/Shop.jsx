import React from 'react';

const Shop = () => {
  return (
    <>
      <section className="shop-banner p-2">
        <div className="container-xxl">
          <div className="row d-flex flex-column align-items-center justify-content-center">
            <div className="repair-details text-center d-flex flex-column align-items-center mt-4">
              <div>
                <h2 className="text-white">
                  <span className="text-success">
                    <b>100%</b>
                  </span>{" "}
                  Off on All Products
                </h2>
              </div>
              <div>
                <p className='text-white'>Make Your Orders We will Deliver</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;