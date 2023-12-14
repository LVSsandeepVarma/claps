/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image } from '@react-three/drei';

function RotatingImg() {
  const imageRef = useRef();
  const [rotation, setRotation] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "../computer.jpg",
    "../computer.jpg",
    "../computer.jpg",
  ]
  function AnimateImage() {
    useFrame(() => {
      setRotation(rotation + 0.01);
      imageRef.current.rotation.y = rotation;
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    
    });
  }

  return (
    <Canvas
      
    >
      <Image
        ref={imageRef}
        url={images[currentImageIndex]}
        scale={2}
        rotation={[0, Math.PI * 2, 0]}
        
      />
      <meshNormalMaterial />
      <AnimateImage />
    </Canvas>
  );
}

export default RotatingImg;
