import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <Fragment>
      <div id={styles.showcase}>
        <div className="container">
          <div className={styles.content}>
            <h1>
              <span className="text-primary">Enjoy</span> Your Stay
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <NavLink className="btn" to="/about">
              About Our Hotel
            </NavLink>
          </div>
        </div>
      </div>
      <section id={styles.home_info} className="bg-dark">
        <div className={styles.info_img}></div>
        <div className={styles.info_content}>
          <h2>
            <span className="text-primary">The History</span> Of Our Hotel
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
          <NavLink className="btn btn-light" to="/about">
            Read More
          </NavLink>
        </div>
      </section>
      {/* Features */}
      <section id={styles.features}>
        <div className='box bg-light'>
          <FontAwesomeIcon icon="fa-solid fa-hotel" className={styles.icon} size="3x" />
          <h3>Great Location</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className='box bg-primary'>
          <FontAwesomeIcon icon="fa-solid fa-utensils" className={styles.icon} size="3x" />
          <h3>Delicious Meals</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className='box bg-light'>
          <FontAwesomeIcon icon="fa-solid fa-dumbbell" className={styles.icon} size="3x" />
          <h3>Fitness Room</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </section>
      {/* Footer */}
      <div className="clr"></div>
      <footer className='footer'>
        <p>Hotel NZ &copy; 2023, All Rights Reserved</p>
      </footer>
    </Fragment>
  );
};

export default Welcome;
