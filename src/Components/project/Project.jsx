


import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import styles from "./Project.module.css";
import Capture from '../Skill/image/Capture.PNG';
import Capture1 from '../Skill/image/Capture1.PNG';
import Capture2 from '../Skill/image/Capture2.PNG';
import Capture3 from "../Skill/image/Capture3.PNG"



const Projects = () => {
  return (
    <>
      {/* <!-- My Services Section Start --> */}
      <section className={styles.services} id="services">
        <div className={styles.content}>
          <div className={styles.title}>
            <span>My Projects</span>
          </div>
          {/* upper group */}
          <div className={styles.boxes}>
            {/* first project */}
            <div className={styles.box}>
              <div className={styles.icon}>
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className={styles.imgs}
                  src={Capture}
                  alt=""
                />
              </div>
              <div className={styles.topic}>Lyst</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}><p>
              Lyst is an E-commerce platform where you can buy variety of clothes of top brandings.
              Lyst is a fashion technology company, and premium shopping app.  
              </p></div>
              <p>Teckstack:HTML|CSS|JAVASCRIPT|VS CODE|GITHUB|NETLIFY
              </p>
              </div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/aasimsyed97/makeshift-protest-7826"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://vocal-biscotti-dd0ff4.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
            
            {/* second project */}
            <div className={styles.box} id="box">
              <div className={styles.icon}>
                {/* <!-- <i className="fas fa-desktop"></i> --> */}
                <img
                  className={styles.imgs}
                  src={Capture1}
                  alt=""
                />
              </div>
              <div className={styles.topic}>HeadphoneZone</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}><p>
              Headphonezone is an Electronic- Gadget platform for 
              Earphones or headphones where you can buy variety of 
              products of top brandings.
              </p></div>
              <p>
                Teckstack:Redux | JavaScript | React | CSS | ChakraUI
              </p>
              </div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/Ankur9900/heavy-leather-9904"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://headphone12.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
          </div>
      
      {/* below group */}
            <div className={styles.boxes}>
            {/* third project */}
            <div className={styles.box}>
              <div className={styles.icon}>
                <img className="imgs" src={Capture2} alt="" />
              </div>
              <div className={styles.topic}>Gearbest</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}><p>GearBest is for gadget lovers by gadget lovers.
                 They share your passion for all kinds of cool tech and the hottest gear.
                 Gearbest offers customers services they won’t find anywhere else, all available to browse on practically in any device.</p></div>
              <p>Teckstack:HTML|CSS|JavaScript|LocalStroage </p></div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/Mohit-6164/Team-Gearbest"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://celadon-cendol-c3a752.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>
          
              {/* forth project */}
              <div className={styles.box}>
              <div className={styles.icon}>
                <img className="imgs" src={Capture3} alt="" />
              </div>
              <div className={styles.topic}>KFC</div>
              <div className={styles.topicsum}>
              <div className={styles.paradiv}><p>KFC is a global chicken restaurant brand with a rich,
                 decades-long history of success and innovation. It all started with one cook, 
                 Colonel Harland Sanders, who created a finger lickin' good recipe more than 75 years ago.</p></div>
              <p>Teckstack:React|Redux|JavaScript|Mongodb|Express </p></div>
              <div className={styles.mediaicons}>
                <a href="https://github.com/Ankur9900/Kfc_clone"target="_blank">
                  {" "}
                  <AiOutlineGithub  size={"35px"}/>
                </a>
                <a href="https://sage-flan-e5e2d6.netlify.app/
                 "target="_blank">
                <AiOutlineGlobal id="btns" size={"35px"}/>
                </a>
              </div>
            </div>



            </div>
        </div>
      </section>
    </>
  );
};

export default Projects;