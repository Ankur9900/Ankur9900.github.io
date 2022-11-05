import React from "react";
import styles from "./AboutMe.module.css";
import Developer from  "../About/Extra/Developer.png";

const AboutMe = () => {
  return (
    
    <section className={styles.about} id={styles.about} name="aboutme">
      <div className={styles.content}>
        <div className={styles.title}>
          <span>About Me</span>
        </div>
        <div className={styles.aboutdetails}>
          <div className={styles.left}>
            <img src={Developer} alt=""  />
          </div>
          <div className={styles.right}>
            <div className={styles.topic}>I like to code because it's a usable <span style={{color:"#9b1750"}}>ART</span></div>
            <p >
                An aspiring full stack web developer, Knowledgable of front-end development. I love to work individually as well as for collaborative projects also. 
              </p>
              <p >
                I have done my Electrical Engineering. Later on, IT Sector's growth cought my interest and I transformed myself as a Full Stack Web Developer by joining Masai School in April 2022. 
              </p>
              <p >
               I want to expertise myself as a Full Stack Web Developer in the upcoming years with React JS technology.
              </p>
          </div>
        </div>
      </div>
    </section>
  
  );
}

export default AboutMe;