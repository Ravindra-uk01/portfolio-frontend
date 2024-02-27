import React from "react";
import { motion } from "framer-motion";
import {AppWrap} from "../../wrapper";
import images from "../../constants/images";
import "./Header.scss";

const scaleVariants = {
  whileInView:{
    opacity: [0, 1],
    scale: [0,1],
    transition: {
      duration: 1,
      ease : 'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{marginLeft:20}}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ravindra</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Web developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{  opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >

        <img src={images.profile1} alt="Profile_bg"/>
        <motion.img 
          src={images.circle} alt="profile circles"
          whileInView={{  scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="overlay_circle"
        />

      </motion.div>
         
      <motion.div
         variants={scaleVariants}
         whileInView={scaleVariants.whileInView}
         className="app__header-circles"
      >
      {[images.react, images.node, images.mongo].map((circle,index)=>(
          <div key={`circle-${circle}`} className="circle-cmp app__flex">
            <img src={circle} alt="profile_bg"/>
          </div>
      ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home') ;
