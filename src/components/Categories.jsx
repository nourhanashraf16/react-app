import React from 'react'
import image1 from "../assets/items1.jpg.webp";
import image2 from "../assets/items2.jpg.webp";
import image3 from "../assets/items3.jpg.webp";
export const Categories = () => {
    const data =[{
        id:0,
        image : image1 ,
        description:"Men's fashion"
      },
      {
        id:1,
        image : image2 ,
        description:"women's fashion"
      },
      {
        id:2,
        image : image3 ,
        description:"baby's fashion"
      }]
  return (
<>
<section className='categories py-5'>
    <div className='container'>
      <div className="row">
       {data.map((ele)=>{
        return(
          <div className='col-md-4 categories_item' key={ele.id}>
          <div className='categories_content'>
            <figure  className='categories_img'>
               <img src={ele.image} alt='category_img'/>
            </figure>
            <h5 className='categories_title'>{ele.description}</h5>
          </div>
        </div>
        )
       })}
       
      </div>
    </div>

  </section>
</>
  )
}
