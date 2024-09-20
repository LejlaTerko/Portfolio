import React, { useState, useEffect } from 'react';
import lejlaUX from '../images/lejlaUX.png';
import hjerte from '../images/hjerte.png';
import sorthvidux from '../images/sorthvidux.png';
import notes from '../images/notes.png';
import UXquote from '../images/UXquote.png';
import whitepaper from '../images/whitepaper.jpg';
import lejladesign from '../images/lejladesign.png';
import stars from '../images/stars.png';
import everythingisdesigned from '../images/everythingisdesigned.png';
import youcantuse from '../images/youcantuse.png';
import designbilleder from '../images/designbilleder.png';
import lejlakodning from '../images/lejlakodning.png';
import kodning from '../images/kodning.png';
import programming from '../images/programming.png';
import pinkhjerte from '../images/pinkhjerte.png';
import './SecondSection.css';


const imageSets = [
  {
    center: { src: lejladesign, style: { top: '10px', left: '50%', width: '450px', height: '770px' } },
    leftTop: { src: everythingisdesigned, style: { top: '0px', left: '22%', width: '180px', transform: 'rotate(-5deg)' } },
    notes: { src: designbilleder, style: { top: '250px', left: '260px', width: '240px', transform: 'rotate(10deg)' } },
    sorthvidux: { src: stars, style: { top: '-200px', right: '18%', width: '300px', transform: 'rotate(5deg)' } },
    whitepaper: { src: whitepaper, style: { top: '-150px', left: '30%', width: '550px', transform: 'rotate(12deg)' } },
    UXquote: { src: youcantuse, style: { top: '350px', right: '16%', width: '320px' } },
    backgroundColor: '#f5f5dc', 
  },
  {
    center: { src: lejlaUX, style: { top: '150px', left: '50%', width: '420px', transform: 'translate(-50%, -50%)' } },
    leftTop: { src: hjerte, style: { top: '-100px', left: '15%', width: '150px', transform: 'rotate(30deg)' } },
    notes: { src: notes, style: { top: '200px', left: '240px', width: '230px', transform: 'rotate(-5deg)' } },
    sorthvidux: { src: sorthvidux, style: { top: '-140px', right: '15%', width: '250px', transform: 'rotate(10deg)' } },
    whitepaper: { src: whitepaper, style: { top: '-168px', left: '25%', width: '600px', transform: 'rotate(-9deg)' } },
    UXquote: { src: UXquote, style: { top: '300px', right: '15%', width: '300px' } },
    backgroundColor: '#e0f7fa', 
  },
  {
    center: { src: lejlakodning, style: { top: '120px', left: '52%', width: '550px', height: '770px' } },
    leftTop: { src: '../images/pinkhjerte.png', style: { top: '-80px', left: '18%', width: '200px', transform: 'rotate(-20deg)' } },
    notes: { src: programming, style: { top: '340px', left: '260px', width: '350px', transform: 'rotate(12deg)' } },
    sorthvidux: { src: kodning, style: { top: '-180px', right: '20%', width: '270px', transform: 'rotate(7deg)' } },
    whitepaper: { src: whitepaper, style: { top: '-160px', left: '28%', width: '600px', transform: 'rotate(4deg)' } },
    UXquote: { src: 'path/to/new-image12.png', style: { top: '360px', right: '17%', width: '330px' } },
    backgroundColor: '#ffe4e1', 
  },
];

const textSets = [
  { heading: 'Content og Design', text: 'Jeg arbejder med en bred vifte af opgaver indenfor content og design. Jeg er fortrolig med at bruge værktøjer som CapCut til videoredigering og har stor erfaring med forskellige Photoshop-apps. Jeg elsker at være kreativ, og kunne bruge alle dage bare på at lave forskellige videoer, redigere billeder, og eksperimentere med forskellige ting indenfor design.' },
  { heading: 'UX-design', text: 'Jeg har erfaring inden for UX-design, hvor jeg har arbejdet på at skabe brugervenlige digitale oplevelser i skolen på flere projekter. Jeg bruger værktøjer som Figma til at udvikle wireframes og prototyper, som hjælper med at visualisere designkoncepter.' },
  { heading: 'Programmering', text: 'Jeg har solid erfaring indenfor programmering, med særligt fokus på webudvikling. Jeg har arbejdet med React, HTML, CSS og JacaScript. Jeg synes det er mega sjovt at kode, og elsker at bruge tid på det. Desto mere tid jeg bruger på det, jo bedre er det.' },
];

function SecondSection() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  
  useEffect(() => {
    document.body.style.backgroundColor = imageSets[currentSetIndex].backgroundColor;
    
    
    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, [currentSetIndex]);

  const changeImageSet = (direction) => {
    setCurrentSetIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + imageSets.length) % imageSets.length;
      return newIndex;
    });
  };

  const currentImages = imageSets[currentSetIndex];
  const currentText = textSets[currentSetIndex];

  return (
    <div className="second-section">
      <div className="image-container">
       
        <img src={currentImages.center.src} alt="Center" className="image-center" style={currentImages.center.style} />
        <img src={currentImages.leftTop.src} alt="Left Top" className="image-left-top" style={currentImages.leftTop.style} />
        <img src={currentImages.notes.src} alt="Notes" className="notes" style={currentImages.notes.style} />
        <img src={currentImages.sorthvidux.src} alt="Sorthvidux" className="sorthvidux" style={currentImages.sorthvidux.style} />
        <img src={currentImages.whitepaper.src} alt="Whitepaper" className="image-whitepaper" style={currentImages.whitepaper.style} />
        <img src={currentImages.UXquote.src} alt="UXquote" className="UXquote" style={currentImages.UXquote.style} />

       
        <button className="carousel-button left" onClick={() => changeImageSet(-1)}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={() => changeImageSet(1)}>
          &#10095;
        </button>
      </div>

     
      <div className="text-box-carousel">
        <h2>{currentText.heading}</h2>
        <p>{currentText.text}</p>
      </div>
    </div>
  );
}

export default SecondSection;
