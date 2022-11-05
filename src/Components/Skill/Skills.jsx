import React from "react";
import  styles from "./Skills.module.css";
import html from "./image/html.png"
import CSS from "./image/CSS.png"
import js from "./image/js.jpg"
import nodeJs from "./image/nodeJs.png"
import react1 from "./image/react1.png"
import git from "./image/git.png"
import chakra1 from "./image/chakra1.png"
import github from "./image/github.png"
import npm from "./image/npm.png"
import code from "./image/code.png"
import ver from "./image/ver.png"
import netlify from "./image/netlify.png"
import vscode from "./image/vscode.png"
import express from "./image/express.png"
import mongo1 from "./image/mongo1.png"
import redux1 from "./image/redux1.png"


function Skills() {
  return (
    <div className={styles.Skill_component__space} id="Skills">

      <div className={styles.heading}>
        <h1 className={styles.heading}>Technical Skills</h1>
      </div>

      <div className={styles.container}>
        <div class={styles.Techskills}>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>HTML</div>
            <span><img src={html} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>CSS</div>
            <span><img src={CSS} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>JavaScript</div>
            <span><img src={js} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Node JS</div>
            <span><img src={nodeJs} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>React JS</div>
            <span><img src={react1} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Express</div>
            <span><img src={express} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Mongo Db</div>
            <span><img src={mongo1} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Redux</div>
            <span><img src={redux1} alt="" /></span>
          </div>
        </div>
      </div>
      <div className={styles.heading}>
        <h1 className={styles.heading}>Tools Used</h1>
      </div>

      <div className={styles.container}>
      
        <div class={styles.Tools}>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Git</div>
            <span><img src={git} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>GitHub</div>
            <span><img src={github} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Chakra UI</div>
            <span><img src={chakra1} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Npm</div>
            <span><img src={npm} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Vercel</div>
            <span><img src={ver} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Codesandbox</div>
            <span><img src={code} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>Netlify</div>
            <span><img src={netlify} alt="" /></span>
          </div>
          <div class={styles.indivitual}>
            <div class={styles.tooltip}>VS Code</div>
            <span><img src={vscode} alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;