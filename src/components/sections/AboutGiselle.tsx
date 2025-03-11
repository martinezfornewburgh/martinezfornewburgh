'use client';

import React from 'react';
import Image from 'next/image';

export const AboutGiselle: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content-wrapper">
        <div className="about-content">
          <h2 className="about-heading">From Newburgh,<br/>For Newburgh</h2>
          <div className="about-text">
            <p>
              Giselle Martinez is a lifelong City of Newburgh resident, first-generation American, and proud 
              daughter of Mexican immigrant parents. Her early experiences of economic and racial 
              disparities inspired her to get involved with her community and become a fierce advocate for 
              housing and environmental justice, infrastructure restoration, and public safety.
            </p>
            <p>
              In 2021, Martinez made history as the youngest member elected to the Newburgh City Council. 
              For over a decade, she has been a dedicated community leader, actively volunteering with 
              several local non-profits and serving her community. Her extensive experience spans 
              working in federal, state, and local government, along with serving in various capacities for 
              political committees. Currently, she is a housing paralegal at the Hudson Valley Justice Center, a 
              nonprofit law firm. Martinez holds a Bachelor's degree in Political Science from Mount Saint 
              Mary College and a Master's degree in Public Administration from Marist College.
            </p>
          </div>
        </div>
      </div>
      <div className="about-image-wrapper">
        <Image 
          src="/images/Giselle_about_image.png"
          alt="Giselle Martinez"
          fill
          className="about-image"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </section>
  );
};

export default AboutGiselle;
