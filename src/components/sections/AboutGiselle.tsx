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
              In 2021, Giselle became the youngest Councilmember elected in the City of Newburgh. She's fought hard to improve our quality of life and is fighting to create a safe and an affordable Newburgh for all.
            </p>
            <p>
              <ul>
  <li>
  • Born and raised in Newburgh
</li>
<li>
  • Experienced public servant, having worked in federal, state, and local government for almost a decade
</li>
<li>
  • Went to Newburgh schools and earned a Masters in Public Administration at Marist University
</li>
<li>
  • Working class advocate, both on city council and as a housing paralegal for the Hudson Valley Justice Center
</li>
<li>
  • Endorsed by the Newburgh City Democratic Committee &amp; New York Working Families Party
</li>
</ul>
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
