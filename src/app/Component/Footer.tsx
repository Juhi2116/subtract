import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto w-full bg-black/40 p-10">
      <div className="flex sm:flex-wrap justify-around">
        <div className="w-1/2 lg:my-10 hidden md:inline-block px-8">
          {" "}
          <h1 className="text-xl lg:text-5xl md:text-3xl  text-left ">
            The Fastest Email Experience Ever Made
          </h1>
        </div>
        <div className="flex mt-10  sm:flex-wrap justify-around">
            <div className="flex flex-col p-2 lg:p-10">
            <h2 className="font-bold mb-5">  Company</h2>
              <div>Blog</div>
              <div>Carrers</div>
              <div>Love</div>
            </div>
            <div className="flex flex-col p-2 lg:p-10">
            <h2 className="font-bold mb-5"> Product</h2>
              <div> Pricing</div>
              <div>  Download</div>
              <div> AI</div>
              <div> Sales</div>
              <div>  Enterprise</div>
              <div>  Outlook</div>
              </div>

              <div className="flex flex-col p-2 lg:p-10 ">
            <h2 className="font-bold mb-5">Support</h2>
            <div> Help Center</div>
            <div> Contact Us</div>
            <div> Tutorials</div>
           
            </div>
            <div className="flex flex-col p-2 lg:p-10">
            <h2 className="font-bold mb-5">Legal</h2>
           <div> Privacy</div>
            <div>Policy</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


{/*// Footer.js

import React from 'react';
import styles from './Footer.module.css'; // Import your CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.headline}>The Fastest Email Experience Ever Made</div>
      <div className={styles.navigation}>
        <div className={styles.column}>
          <h4>Company</h4>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Lore</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Product</h4>
          <ul>
            <li>Pricing</li>
            <li>Download</li>
            <li>API</li>
            <li>Sales</li>
            <li>Enterprise</li>
            <li>Outlook</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Tutorials</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Legal</h4>
          <ul>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>© SUBSTRACT.AI</div>
      <div className={styles.socialIcons}>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-linkedin"></i>
        <i className="fab fa-tiktok"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </footer>
  );
};

export default Footer;
*/}