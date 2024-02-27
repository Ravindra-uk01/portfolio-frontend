import React from 'react'
import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/ravindra-singh-rayal/' target="_blank" rel="noopener noreferrer">
           <FaLinkedin />
         </a>
        </div>
        <div>
          <a href='https://github.com/Ravindra-uk01' target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
        <div>
          <a href='https://twitter.com/Ravindra_uk01' target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
        </div>
        <div>
          <a href='https://auth.geeksforgeeks.org/user/ravindra_uk01' target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks />
          </a>
        </div>
        <div>
          <a href='https://leetcode.com/Ravindra_uk01/' target="_blank" rel="noopener noreferrer">
            <SiLeetcode />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia