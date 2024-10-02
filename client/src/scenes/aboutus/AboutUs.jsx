import React from 'react';
import AboutUsBanner from '../../assets/aboutus-banner.png';
import AboutUsModels from '../../assets/aboutus-models.png';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <div style={{ position: 'relative', height: '100vh', marginTop: 0 }}>
        <img
          src={AboutUsBanner}
          alt="About Us Banner"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
        <h2 
          style={{ 
            position: 'absolute', 
            top: '40%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            color: 'white', 
            fontSize: '6rem',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          ABOUT US
        </h2>
      </div>
      <div style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap:"wrap" }}>
        <img 
          src={AboutUsModels}
          alt="Our Team"
          style={{maxWidth:"80%", height: 'auto', marginLeft: '10%' }}
        />
        <div>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'red', marginBottom: '1rem' }}>OUR STORY</h3>
              </div>
              <div>
            <p style={{ fontSize: '1.2rem', color: 'white', margin: '0 auto', width: '80%' }}>
              We are a creative team of young people who want to change the world. <br /> Be a part of our journey. We appreciate every order and everyone of you is part of the family.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;