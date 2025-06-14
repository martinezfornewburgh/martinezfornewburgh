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
        <h2 className="platform-heading">What's Next?</h2>
        
        {/* Category Tabs */}
        <div className="platform-tabs-container">
          <div className="platform-categories">
  {platformData.map((tab) => (
    <div
      key={tab.id}
      className={`platform-category ${activeTab === tab.id ? 'active' : ''}`}
      onClick={() => setActiveTab(tab.id)}
    >
      <div className="platform-icon-container" style={{ fontSize: 24 }}>
        {tab.items[0]?.icon || ""}
      </div>
      <span>{tab.title}</span>
    </div>
  ))}
</div>
          
          {/* Content Card */}
          <div className="platform-content-card no-bottom-padding">
            {getActiveTabData().items.map((item, index) => (
              <div key={index} className="platform-item">
                <p className="platform-item-description"><strong>{item.title}</strong> {item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignPlatform;
