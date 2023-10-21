import React from 'react';
import  { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/h1_hero1.jpg.webp';
import image2 from '../assets/h1_hero2.jpg.webp';
const images = [
    {
      id:0,
      image: image1,
    },
    {     id:1,
      image: image2,
    },
  ];

export const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    {images.map((img) => {
      return (
        <Carousel.Item key={img.id}>
          <img
            className="d-block w-100"
            src={img.image}
            alt="slider-img"
          />
          <Carousel.Caption>
            <h3>Minimal Menz Style</h3>
            <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })}
  </Carousel>
  )
}
