import React from 'react';
import { motion } from 'framer-motion';
import '../../components/gridData/GridChildCSS.css';
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import ContactPageForm from '../../components/form/ContactPageForm';
import officeImage from "../../../public/assets/images/office/mercury-address-image.jpeg"

const ContactUs: React.FC = () => {
  return (
    <>
      <section className='m-auto w-full max-parent-grid-container-width pb-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={75}
              customHeaderCss="font-medium"
              childName="ContactUs"
            />
        </GridContainer>
      </section>

      <section className='m-auto w-full max-parent-grid-container-width pb-20'>
        <GridContainer gridCols="grid-cols-2 max1279px:!grid-cols-1">
            <ContactPageForm />
            <div>
                {/* contact details start */}
                <div className="grid-item reach-out-details">
                  <div className="email-container">
                    <div className="inline-flex">
                      <div className="icon-container">
                        <img
                          className="email-icon pr-2"
                          src="https://haymkarran.design/assets/icons/email-icon.svg"
                          alt=""
                        ></img>
                      </div>
                      <div className="email-title">Email Us</div>
                    </div>
                    <div className="email-address">info@mercury-pay.com</div>
                  </div>
                  <br />
                  <div className="location-container">
                    <div className="inline-flex">
                      <div className="icon-container">
                        <img
                          className="location-icon pr-1"
                          src="https://haymkarran.design/assets/icons/location-icon.svg"
                          alt=""
                        ></img>
                      </div>
                      <div className="location-title">Our Location:</div>
                    </div>
                    <div className="email-address">
                      Mercury Payments Services LLC. Dubai Hills Business Park 3, Level
                      2, Unit # 203, Dubai
                    </div>
                  </div>
                  <br />
                  <div className="map-container w-full">
                    <a
                      href="https://maps.app.goo.gl/FV6Uqhn4aJfDqPyr5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="mercury-map-image !w-full h-full object-cover"
                        src={officeImage.src}
                        alt=""
                      ></img>
                    </a>
                  </div>
                </div>
                {/* contact details end */}
            </div>
        </GridContainer>
      </section>

      {/* <motion.section className="grid-container-two-column margin-small paddingZero contact-form-page-bottom-margin">
        <div className="grid-item contact-form-on-contact-us-page height-max-content">
          <ContactPageForm />
        </div> */}

        
      {/* </motion.section> */}
    </>
  );
};

export default ContactUs;
