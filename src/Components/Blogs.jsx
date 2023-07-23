import React from 'react';
import blog1 from "../assets/images/blog/blog-1.jpg";
import blog2 from "../assets/images/blog/blog-2.jpg";
import blog3 from "../assets/images/blog/blog-3.jpg";
import blog4 from "../assets/images/blog/blog-4.jpg";

const Blogs = () => {
  return (
    <>
        <div className="col-3">
            <div className="card">
                <img src={blog1} alt="" className='card-img-top img-fluid mb-3 p-5'/>
                <div className="card-body">
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius natus incidunt, perspiciatis nesciunt necessitatibus atque quo vero sint rem.</p>
                    <div className="button-blog">
                        Learn More
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={blog2} alt="" className='card-img-top img-fluid mb-3 p-5'/>
                <div className="card-body">
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius natus incidunt, perspiciatis nesciunt necessitatibus atque quo vero sint rem.</p>
                    <div className="button-blog">
                        Learn More
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={blog2} alt="" className='card-img-top img-fluid mb-3 p-5'/>
                <div className="card-body">
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius natus incidunt, perspiciatis nesciunt necessitatibus atque quo vero sint rem.</p>
                    <div className="button-blog">
                        Learn More
                    </div>
                </div>
            </div>
        </div>
        <div className="col-3">
            <div className="card">
                <img src={blog4} alt="" className='card-img-top img-fluid mb-3 p-5'/>
                <div className="card-body">
                    <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius natus incidunt, perspiciatis nesciunt necessitatibus atque quo vero sint rem.</p>
                    <div className="button-blog">
                        Learn More
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Blogs;