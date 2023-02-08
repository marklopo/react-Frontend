import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from "react";

const images = [
  {
    original: "https://",
    thumbnail: "https://",
  },
  {
    original: "https://",
    thumbnail: "https://",
  },
];

class Slider extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default Slider;
