import { Fragment } from "react";
import hotel from "../img/photo-2.jpg";
import person1 from "../img/person-1.jpg";
import person2 from "../img/person-2.jpg";

import styles from "./About.module.css";

const About = () => {
  return (
    <Fragment>
      <section id={styles.info} className="bg-light py-1">
        <div className="container">
          <div className={styles.info_left}>
            <h1 className="l-heading">
              <span className="text-primary">About</span> Hotel NZ
            </h1>
            <p>
              egestas quis ipsum suspendisse ultrices gravida dictum fusce ut
              placerat orci nulla pellentesque dignissim enim sit amet venenatis
              urna cursus eget nunc scelerisque viverra mauris in aliquam sem
              fringilla ut!
            </p>
            <p>
              duis at consectetur lorem donec massa sapien faucibus et molestie
              ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper.
            </p>
          </div>
          <div className={styles.info_right}>
            <img src={hotel} alt="hotel" />
          </div>
        </div>
      </section>
      <div className="clr"></div>

      <section id={styles.testimonials} className="py-3">
        <div className="container">
          <h2 className="l-heading">What Our Guests Say</h2>
          <div className={`${styles.testimonial} bg-primary`}>
            <img src={person1} alt="guest1" />
            <p>
              elit sed vulputate mi sit amet mauris commodo quis imperdiet massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
              proin libero nunc consequat interdum varius sit amet mattis
              vulputate enim nulla aliquet porttitor lacus luctus accumsan
              tortor posuere ac ut.
            </p>
          </div>

          <div className={`${styles.testimonial} bg-primary`}>
            <img src={person2} alt="guest2" />
            <p>
              elit sed vulputate mi sit amet mauris commodo quis imperdiet massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
              proin libero nunc consequat interdum varius sit amet mattis
              vulputate enim nulla aliquet porttitor lacus luctus accumsan
              tortor posuere ac ut.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Hotel NZ &copy; 2023, All Rights Reserved</p>
      </footer>
    </Fragment>
  );
};

export default About;
