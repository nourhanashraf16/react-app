import React from 'react';
import Blog1 from "../assets/blog1.jpg.webp";
import Blog2 from "../assets/blog2.jpg.webp";
import Blog3 from "../assets/blog3.jpg.webp";
import { Link } from 'react-router-dom';

export const News = () => {
  const data = [{
    id:1,
    img:Blog1,
    title :"What Curling Irons Are The Best Ones",
  },
  {  id:2,
    img:Blog2,
    title :"Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes",
  },
  {
    id:3,
    img:Blog3,
    title :"What Curling Irons Are The Best Ones",
  }]
  return (
  
    <section className='news py-5'>
      <div className="container">
        <h3 className='news_header text-center my-5'>Latest News</h3>
        <div className="row">
          {data&&data.map((ele)=>{
            return(
                 <div className='col-md-4 col-lg-4'>
                    <figure className='news_img'>
                      <img src={ele.img} alt="" />
                    </figure>
                    <div>
                      <h6 className='text-muted'>Fashion Tips</h6>
                      <h5 className='new_title' >{ele.title}</h5>
                      <p className='text-muted'>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
                      <Link to="" className='my-3'>Read More</Link>
                    </div>
                 </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

