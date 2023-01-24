import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Fragment>
      <section id={styles.contact_form} className="py-1">
        <div className="container">
          <h1 className="l-heading">
            <span className="text-primary">Contact</span> Us
          </h1>
          <p>Please fill out the form below to contact us</p>

          <form name="contact" method="POST" className="contact">
            <input type="hidden" name="contact" value="contact" />
            <div className={styles.form_group}>
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.form_group}>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.form_group}>
              <label for="message">Message</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </section>

      <section id={styles.contact_info} className="bg-dark">
        <div className="container">
          <div className="box m-box">
            <FontAwesomeIcon
              icon="fa-solid fa-hotel"
              className={styles.icon}
              size="3x"
            />
            <h3>Location</h3>
            <p>1 Queen Strees</p>
          </div>
          <div className="box m-box">
            <FontAwesomeIcon
              icon="fa-solid fa-phone"
              className={styles.icon}
              size="3x"
            />
            <h3>Phone Number</h3>
            <p>123-456-7890</p>
          </div>
          <div className="box m-box">
            <FontAwesomeIcon
              icon="fa-solid fa-envelope"
              className={styles.icon}
              size="3x"
            />
            <h3>Email</h3>
            <p>Hotel@ht.ac.nz</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Hotel NZ &copy; 2023, All Rights Reserved</p>
      </footer>
    </Fragment>
  );
};

export default Contact;
