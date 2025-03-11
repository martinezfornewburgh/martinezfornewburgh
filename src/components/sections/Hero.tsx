'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openFullscreenVideo = () => {
    setIsVideoOpen(true);
    // Wait for the video element to be available in the DOM
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).msRequestFullscreen) {
          (videoRef.current as any).msRequestFullscreen();
        }
      }
    }, 100);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  // Handle fullscreen change event
  const handleFullscreenChange = () => {
    const isFullscreen = !!(
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).msFullscreenElement
    );
    
    if (!isFullscreen && isVideoOpen) {
      setIsVideoOpen(false);
    }
  };

  // Add fullscreen change event listeners
  if (typeof window !== 'undefined') {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);
  }

  return (
    <section className="hero-section">
      {/* Main Hero Container - Purple Background */}
      <div className="hero-background">
        {/* Logo - Absolutely Positioned */}
        <div className="logo-container">
          <Image 
            src="/images/GiselleMartinez-Logo.svg"
            alt="Giselle Martinez for City Council"
            width={280}
            height={120}
            className="logo-image"
            priority
          />
        </div>
        
        {/* Header/Navigation */}
        <div className="site-header">
          {/* Navigation */}
          <nav className="main-navigation">
            <a href="https://secure.actblue.com/donate/martinezfornewburgh?refcode=ab_qr_code&utm_source=qr_code" className="donate-button" target="_blank" rel="noopener noreferrer">Donate</a>
          </nav>
        </div>

        {/* Newburgh Background Image */}
        <div className="hero-backdrop">
          <div className="hero-backdrop-image-container">
            <Image 
              src="/images/NWBH-Hero-BG.png"
              alt=""
              fill
              className="backdrop-image"
              style={{ opacity: 0.4, mixBlendMode: 'multiply', objectFit: 'cover', objectPosition: 'right center' }}
              priority
            />
          </div>
          <div className="hero-backdrop-overlay"></div>
        </div>
        
        {/* Main Content Container */}
        <div className="hero-content">
          <div className="content-wrapper">
            {/* Left Side - Giselle Image */}
            <div className="candidate-image-container">
              <div className="image-wrapper">
                <Image 
                  src="/images/GiselleMartinez-Hero.png"
                  alt="Giselle Martinez"
                  fill
                  className="candidate-image"
                  priority
                />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="hero-text">
              <h1 className="hero-heading">
                Vote<br />June 24th
              </h1>
              <p className="hero-subheading">
                Re-elect Giselle so she can continue helping the working families of Newburgh
              </p>
              <a href="https://voterlookup.elections.ny.gov/" className="voting-info-link" target="_blank" rel="noopener noreferrer">
                Voting Information 
                <svg className="voting-info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* White Section Below Hero with Two-Column Layout */}
      <div className="hero-white-section">
        <div className="container mx-auto">
          <div className="content-columns">
            {/* Left Column - Text Content */}
            <div className="content-column-text">
               {/* Floating Elements Container - now only holds the campaign slogan */}
              <div className="floating-elements-container">
                {/* Campaign Slogan - Positioned to float above the boundary */}
                <div className="campaign-slogan">
                  <p className="slogan-text">
                    ¡Juntos podemos!<br />
                    <span className="english-slogan">Together we can!</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Video Player */}
            <div className="content-column-video">
              <div className="video-player">
                <div className="video-thumbnail-container">
                  <Image
                    src="/images/Newbrugh_BG_2.png"
                    alt="Campaign Video Thumbnail"
                    fill
                    className="video-thumbnail"
                    objectFit="cover"
                    priority
                  />
                </div>
                <button 
                  className="video-play-button"
                  aria-label="Play campaign video"
                  onClick={openFullscreenVideo}
                >
                  <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 6.5c-.2-.2-.5-.3-.7-.1-.2.1-.3.3-.3.6v10c0 .3.1.5.3.6.2.1.5.1.7-.1l7-5c.2-.1.3-.4.3-.6s-.1-.5-.3-.6l-7-4.8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Player */}
      {isVideoOpen && (
        <div className="fullscreen-video-container">
          <button 
            className="video-close-button"
            aria-label="Close video"
            onClick={closeVideo}
          >
            <svg className="close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <video
            ref={videoRef}
            src="/images/MARTINEZ CAMPAIGN VIDEO v2.mp4"
            className="campaign-video"
            controls
            playsInline
            onEnded={closeVideo}
          />
        </div>
      )}
    </section>
  );
}
