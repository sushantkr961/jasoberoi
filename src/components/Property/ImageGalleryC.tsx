// components/ImageGallery.tsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const ImageGalleryC = ({ images }: any) => {
  const galleryItems = images.map((imagePath: any) => ({
    original: imagePath,
    thumbnail: imagePath,
  }));

  return <ImageGallery items={galleryItems} />;
};

export default ImageGalleryC;
