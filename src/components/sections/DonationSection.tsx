'use client';

import React from 'react';
import Image from 'next/image';

export const DonationSection: React.FC = () => {
  return (
    <section className="donation-section">
      {/* Endorsement Section */}
      <div className="endorsement-container">
        <h2 className="endorsement-heading">Endorsed By</h2>
        <div className="endorsement-logos">
          <div className="endorsement-logo">
            <Image 
              src="/images/accomplishments/MHDSA.png"
              alt="Mid-Hudson DSA Endorsement"
              width={120}
              height={80}
              className="endorsement-logo-img mhdsa-logo"
            />
          </div>
          <div className="endorsement-logo">
            <Image 
              src="/images/accomplishments/ForTheMany_Logo.svg"
              alt="For The Many Endorsement"
              width={120}
              height={80}
              className="endorsement-logo-img for-the-many-logo"
            />
          </div>
          <div className="endorsement-logo">
            <Image 
              src="/images/WFP_Endorsement.png"
              alt="Working Families Party Endorsement"
              width={120}
              height={80}
              className="endorsement-logo-img wfp-logo"
            />
          </div>
        </div>
      </div>

      {/* Banner Image with Logo and CTA */}
      <div className="donation-banner">
        <Image 
          src="/images/Newbrugh_BG_2.png"
          alt="Newburgh Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
          className="donation-banner-image"
        />
        <div className="donation-overlay">
          <div className="donation-content">
            <div className="donation-logo-container">
              <Image 
                src="/images/GiselleMartinez-Logo.svg"
                alt="Giselle Martinez Logo"
                width={600}
                height={262}
                className="donation-logo"
              />
            </div>
            
            <div className="donation-cta-container">
              <a href="https://secure.actblue.com/donate/martinezfornewburgh?refcode=ab_qr_code&utm_source=qr_code" className="donation-button" target="_blank" rel="noopener noreferrer">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
