import React from "react";
import styles from "./About.module.css";
import Reveal from "../Reveal/Reveal";
function About() {
  return (
    <section id="about" className={styles.about}>
      <Reveal>
      <div className="container">
        <div className={styles.title}>
          <h2>
            About <span>Me</span>
          </h2>
          <hr />
        </div>
        <div className="grid">
          <div className={styles["about-img"]}>
            <img src="./images/pic.jpg" alt="Shivam Yadav" />
          </div>
          <div className={styles["about-content"]}>
            <h3 className={styles.border}>Hi There</h3>
            <p> I'm <span className={styles.name}>Shivam</span>. A
              Passionate web developer skilled in crafting captivating online
              experiences. With a blend of creativity and technical expertise, I
              turn ideas into efficient, visually pleasing websites. Let's bring
              your vision to life!
            </p>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

export default About;
