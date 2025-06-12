import { useState } from 'react';
import "./about.css"
import coleads from '../assets/coleads.JPG';
import working from '../assets/working.JPG';
import workshop from '../assets/workshop.png';

const PolaroidSlider = () => {
    const images = [coleads, working, workshop];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="about-image-carousel">
            <button className="carousel-arrow left-arrow" onClick={prevImage}>&lt;</button>
            <div className="polaroid-frame">
                <img src={images[currentImageIndex]} alt="Incubator Hacks Event" className="polaroid-image" />
                <div className="polaroid-text text-white">Incubator Hacks 2024</div>
            </div>
            <button className="carousel-arrow right-arrow" onClick={nextImage}>&gt;</button>
        </div>
    )
}

export default PolaroidSlider