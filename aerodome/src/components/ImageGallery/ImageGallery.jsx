import "./ImageGallery.css";
import img1 from "../../assets/image3.png";
import img2 from "../../assets/image3.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image3.png";
import img5 from "../../assets/image3.png";
import img6 from "../../assets/image3.png";
import img7 from "../../assets/image3.png";
const images = [img1, img2, img3, img4, img5, img6, img7];

const InfiniteImageGallery = () => {
  return (
    <section>
      <div className="slider">
        <ul className="brands">
          {images.map((logo, index) => (
            <li key={index} className="brand-logo rounded-lg overflow-hidden">
              <img src={logo} alt="logo" />
            </li>
          ))}
          {images.map((logo, index) => (
            <li key={index} className="brand-logo  rounded-lg overflow-hidden">
              <img src={logo} alt="logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InfiniteImageGallery;
