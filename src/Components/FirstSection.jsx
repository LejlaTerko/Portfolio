import React from 'react';
import selfie2 from '../images/selfie2.png';
import selfie1 from '../images/selfie1.png';
import kiss from '../images/kiss.png';
import paper from '../images/paper.png';
import baggrund from '../images/baggrund.jpg';
import './FirstSection.css';

function FirstSection() {
  return (
    <div className="first-section">
      <div className="image-container">
        <img src={paper} alt="Paper" className="image-paper" />
        <img src={selfie2} alt="Selfie 2" className="image-first" />
        <img src={selfie1} alt="Selfie 1" className="image-second" />
        <img src={kiss} alt="Kiss" className="image-kiss" />
      </div>
    
        <div className="text-box-overskrift">
          <h1>Lejla Terkos Portfolio</h1>
        </div>
    <div className="text-overlay">
   
    <p>Hej! Jeg hedder Lejla, er 22 år og studerer multimediedesign på Erhvervsakademiet i Aarhus. Kreativitet er en stor del af, hvem jeg er, og jeg elsker at kaste mig ud i nye udfordringer hvor jeg kan vise hvad jeg kan. 
      Jeg er udadvendt og trives i samarbejde med andre, men jeg er ikke bange for at arbejde selvstændigt. </p>
  </div>

 
</div>
  
  );
}

export default FirstSection;

