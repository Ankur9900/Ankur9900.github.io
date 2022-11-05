import React from "react";
// import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome";
// import { faGithub } from "../node_modules/@fortawesome/free-brands-svg-icons";
// import { faLink } from "../node_modules/@fortawesome/free-solid-svg-icons";

import Capture from '../Skill/image/Capture.PNG';
import Capture1 from '../Skill/image/Capture1.PNG';
import Capture2 from '../Skill/image/Capture2.PNG';
import styles from "./Project.module.css";
import html from "../Skill/image/html.png"
import CSS from "../Skill/image/CSS.png"
import javascript from "../Skill/image/javascript.jpeg"
import chakra from "../Skill/image/chakra.png"

import github from "../Skill/image/github.png"
import github1 from "../Skill/image/github1.png"
import eye from "../Skill/image/eye.png"
import netlify from "../Skill/image/netlify.png"
import vscode from "../Skill/image/vscode.png"
import react from "../Skill/image/react.png"
import npm from "../Skill/image/npm.png"
import local from "../Skill/image/local.jpeg"

function Project() {
  return (
    <div className="project component__space" id="Projects" name="Project">
      <div className={styles.heading}>
        <h1 className="heading">My Latest Project</h1>
      </div>
      <div className={styles.container}>
            <div className={styles.worklist}>
                <div className={styles.work}>
                    <img src={Capture}alt=""/>
                    <div className={styles.layer}>
                        <h3>
                            Lyst Clone
                        </h3>
                        <p>
                            Lyst is an E-commerce platform where you can buy variety of clothes of top brandings.
                        </p>
                        <div className={styles.techstacks}>
                            <div className={styles.used}>
                                <p>Tech Stack :</p>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={html}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={CSS}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={javascript}alt=""/>
                            </div>
                           
                            <div className={styles.TechstackImage}>
                                <img src={vscode}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={github1}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={netlify}alt=""/>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <a target="_blank" href="https://github.com/aasimsyed97/makeshift-protest-7826">
                                <img src={github}/>
                            </a>
                            <a target="_blank" href="https://vocal-biscotti-dd0ff4.netlify.app/">
                                <img src={eye}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.work}>
                    <img src={Capture1}alt=""/>
                    <div className={styles.layer}>
                        <h3>
                            Headphonezone Clone
                        </h3>
                        <p>
                            Headphonezone is an Electronic- Gadget platform for Earphones or headphones  where you can buy variety of products of top brandings.
                        </p>
                        <div className={styles.techstacks}>
                            <div className={styles.used}>
                                <p>Tech Stack :</p>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={react}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={chakra}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={npm}alt=""/>
                            </div>
                            {/* <div className={styles.TechstackImage}>
                                <img src={nodeImg}alt=""/>
                            </div> */}
                            <div className={styles.TechstackImage}>
                                <img src={vscode}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={github1}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={netlify}alt=""/>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <a target="_blank" href="https://github.com/Ankur9900/heavy-leather-9904">
                            <img src={github}/>
                            </a>
                            <a target="_blank" href="https://headphone12.netlify.app/">
                            <img src={eye}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.work}>
                    <img src={Capture2}alt=""/>
                    <div className={styles.layer}>
                        <h3>
                            Gearbeat Clone
                        </h3>
                        <p>
                        It is an E-commerce website to buy clothes & electronic gadget products online.
                        </p>
                        <div className={styles.techstacks}>
                            <div className={styles.used}>
                                <p>Tech Stack :</p>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={html}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={CSS}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={javascript}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={local}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={vscode}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={github1}alt=""/>
                            </div>
                            <div className={styles.TechstackImage}>
                                <img src={netlify}alt=""/>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <a target="_blank" href="https://github.com/Mohit-6164/Team-Gearbest">
                            <img src={github}/>
                            </a>
                            <a target="_blank" href="https://celadon-cendol-c3a752.netlify.app/">
                            <img src={eye}/>
                            </a>
                        </div>
                    </div>
                </div>
              
                {/* <div class="work">
                    <img src={Project}alt=""/>
                    <div class="layer">
                        <h3>
                             Clone
                        </h3>
                        <p>
                            clone
                        </p>
                        <div class="techstacks">
                            <div class="used">
                                <p>Tech Stacks :</p>
                            </div>
                            <div class="TechstackImage">
                                <img src={reactImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={cssImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={jsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={nodeImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={vsImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={githubImg}alt=""/>
                            </div>
                            <div class="TechstackImage">
                                <img src={netlifyImg}alt=""/>
                            </div>
                        </div>
                        <div class="buttons">
                            <a target="_blank" href="">
                            <img src={github1Img}/>
                            </a>
                            <a target="_blank" href="">
                            <img src={eyeImg}/>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
   
   
   
   
  );
}

export default Project;