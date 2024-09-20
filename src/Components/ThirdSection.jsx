import React, { useState } from 'react';
import './ThirdSection.css'; 


import dbaa from '../images/dbaa.png';
import steno from '../images/steno.png'; 
import nippon from '../images/nippon.png';


const imageSets = [
  { src: dbaa, alt: 'Dyrenes Beskyttelse', heading: 'Dyrenes Beskyttelse' },
  { src: steno, alt: 'Steno Museet', heading: 'Steno Museet' },
  { src: nippon, alt: 'Nippon Project', heading: 'Nippon Project' }
];


const textSets = [
  { text: 'I mit projekt for Dyrenes Beskyttelse var målet at skabe en platform, der kunne formidle deres budskaber på en engagerende og informativ måde. Jeg arbejdede med at designe en hjemmeside, der gjorde det nemt for brugerne at finde information om organisationens arbejde og de forskellige måder, man kan støtte på. Fokus var på at skabe et simpelt og brugervenligt design, der samtidig kunne vække følelser og skabe opmærksomhed omkring dyrevelfærd. Det var en spændende opgave, hvor jeg fik lov til at kombinere min passion for design med et projekt, der har en vigtig mission.' },
  { text: 'I projektet om interaktiv storytelling blev vi bedt om at vælge en del af museet Steno, som kunne trænge til en opfriskning. Vi valgte at fokusere på det menneskelige hjerte for at tilbyde en sjovere og mere engagerende læringsoplevelse. Vores mål var at udvikle en fysisk brugergrænseflade, der kunne tilføje dybdegående information og multimediale elementer til udstillingen, hvilket gav gæsterne en mere interaktiv og informativ oplevelse.' },
  { text: 'I mit projekt for Nippon handlede det om at skabe en god digital platform, der både så flot ud og var nem at bruge. Jeg arbejdede med at designe og udvikle deres hjemmeside, så den afspejlede deres brand og gjorde det nemt for kunderne at finde information. Det var vigtigt at gøre siden overskuelig og brugervenlig, da målgruppen var familier, samtidig med at den præsenterede produkterne på en måde, der fangede opmærksomheden.' }
];

function ThirdSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + imageSets.length) % imageSets.length;
      return newIndex;
    });
  };

  const currentImageSet = imageSets[currentIndex];
  const currentTextSet = textSets[currentIndex]; 

  return (
    <div className="third-section">
      <div className="image-container">
        <img src={currentImageSet.src} alt={currentImageSet.alt} className="image-center" />
        <button className="carousel-button left" onClick={() => changeImage(-1)}>
          &#10094;
        </button>
        <button className="carousel-button right" onClick={() => changeImage(1)}>
          &#10095;
        </button>
      </div>

   
      <h2 className="section-heading">{currentImageSet.heading}</h2>
      <div className="text-box">
        <p>{currentTextSet.text}</p>
      </div>
    </div>
  );
}

export default ThirdSection;
