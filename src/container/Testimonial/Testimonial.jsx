import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {AppWrap, MotionWrap} from '../../wrapper'
import {client, urlFor} from '../../client'
import './Testimonial.scss'

const Testimonial = () => {

  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index)=>{
    setCurrentIndex(index);
  }

  useEffect(()=>{ 
     const query = '*[_type == "testimonials"] | order(_createdAt asc)';
     const brandsQuery  = '*[_type == "brands"] | order(_createdAt desc)';

     client.fetch(query)
     .then((data)=>(setTestimonials(data)));

     client.fetch(brandsQuery)
     .then((data)=>(setBrands(data)))
   },[])

   const test = testimonials[currentIndex];

   console.log('testimonials is ', testimonials)
   console.log('brands is ', brands);

  return (
    <>
    {
      testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
              <img src={urlFor(test.imageurl)} alt='testimonial' />
              <div className='app__testimonial-content app__flex'>
                <p className='p-text'>{test.feedback}</p>
                <div>
                  <h4 className='bold-text'>{test.name}</h4>
                  <h5 className='p-text'>{test.company}</h5>
                </div>
              </div>
          </div>

          <div className='app__testimonials-btns app__flex' >
            <div className='app__flex' onClick={()=>handleClick(currentIndex === 0 ? testimonials.length -1 : currentIndex -1)} >
              <FaChevronLeft/>
            </div>
            <div className='app__flex' onClick={()=>handleClick(currentIndex === testimonials.length -1  ? 0 : currentIndex + 1)} >
              <FaChevronRight/>
            </div>
          </div>
        </>
      )
    }

    <div className='app__testimonials-brands app__flex' >
      {
        brands.map((brand) =>(
          <motion.div
             whileInView={{opacity : [0, 1]}}
             transition={{duration:0.5, type:'tween'}}
             key={brand._id}
          >
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
          </motion.div>
        ))
      }

    </div>
    
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg'
)