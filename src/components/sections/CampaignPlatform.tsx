'use client';

import React, { useState } from 'react';
import { platformData } from '@/data/platformData';
import Image from 'next/image';

export const CampaignPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(platformData[0].id);

  const getActiveTabData = () => {
    return platformData.find(tab => tab.id === activeTab) || platformData[0];
  };

  return (
    <section className="campaign-platform">
      {/* Background Image Overlay */}
      <div className="platform-bg-overlay">
        <Image 
          src="/images/Newbrugh_BG_2.png"
          alt="Newburgh Background"
          fill
          style={{ objectFit: 'cover', opacity: 0.4, mixBlendMode: 'multiply' }}
          priority
          className="background-image"
        />
      </div>

      <div className="platform-container">
        <h2 className="platform-heading">What Giselle Stands For</h2>
        
        {/* Category Tabs */}
        <div className="platform-tabs-container">
          <div className="platform-categories">
            <div 
              className={`platform-category ${activeTab === 'tab1' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab1')}
            >
              <div className="platform-icon-container">
                {activeTab === 'tab1' ? (
                  <Image 
                    src="/images/Housing_Selected.svg"
                    alt="Accessible Housing"
                    width={24}
                    height={24}
                    className="platform-icon"
                  />
                ) : (
                  <Image 
                    src="/images/Housing_Deselected.svg"
                    alt="Accessible Housing"
                    width={24}
                    height={24}
                    className="platform-icon"
                  />
                )}
              </div>
              <span>Accessible Housing</span>
            </div>
            
            <div 
              className={`platform-category ${activeTab === 'tab2' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab2')}
            >
              <div className="platform-icon-container">
                {activeTab === 'tab2' ? (
                  <Image 
                    src="/images/Infrastructure_Selected.svg"
                    alt="Reliable Infrastructure"
                    width={24}
                    height={24}
                    className="platform-icon"
                  />
                ) : (
                  <Image 
                    src="/images/Infrastructure_Deselected.svg"
                    alt="Reliable Infrastructure"
                    width={24}
                    height={24}
                    className="platform-icon"
                  />
                )}
              </div>
              <span>Reliable Infrastructure</span>
            </div>
            
            <div 
              className={`platform-category ${activeTab === 'tab3' ? 'active' : ''}`}
              onClick={() => setActiveTab('tab3')}
            >
              <div className="platform-icon-container">
                {activeTab === 'tab3' ? (
                  <Image 
                    src="/images/Justice_Selected.svg"
                    alt="Social Justice"
                    width={24}
                    height={24}
                    className="platform-icon"
                  />
                ) : (
                  <Image 
                    src="/images/Justice_Deselected.svg"
                    alt="Social Justice"
                    width={24}
                    height={24}
                    className="platform-icon"
                  />
                )}
              </div>
              <span>Social Justice</span>
            </div>
          </div>
          
          {/* Content Card */}
          <div className="platform-content-card">
            {getActiveTabData().items.map((item, index) => (
              <div key={index} className="platform-item">
                <h3 className="platform-item-title">{item.title}</h3>
                <p className="platform-item-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignPlatform;
