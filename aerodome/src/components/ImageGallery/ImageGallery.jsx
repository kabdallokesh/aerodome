const InfiniteImageSlider = () => {
    const images = [
      "https://via.placeholder.com/480x290?text=Image+1",
      "https://via.placeholder.com/480x290?text=Image+2",
      "https://via.placeholder.com/480x290?text=Image+3",
      "https://via.placeholder.com/480x290?text=Image+4",
      "https://via.placeholder.com/480x290?text=Image+5",
    ];
  
    const containerStyle = {
      display: "flex",
      gap: "16px",
      animation: "scroll 15s linear infinite",
    };
  
    const keyframesStyle = `
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
      @media (max-width: 768px) {
        .slider-image {
          width: 320px;
          height: 180px;
        }
        .slider-container {
          gap: 8px;
        }
      }
    `;
  
    return (
      <div
        className="slider-container"
        style={{
          overflow: "hidden",
          background: "black",
          padding: "16px",
        }}
      >
        {/* Add keyframes and responsive styles */}
        <style>{keyframesStyle}</style>
        <div style={containerStyle}>
          {/* Duplicate images for seamless looping */}
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              style={{
                flexShrink: 0,
                borderRadius: "29px",
                overflow: "hidden",
                boxShadow: "3px 5px 8px 8px rgba(255, 255, 255, 0.12)",
              }}
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="slider-image"
                style={{
                  width: "480px", // Default for desktop
                  height: "270px", // Default for desktop
                  objectFit: "cover",
                  borderRadius: "29px",
                  boxShadow: "3px 5px 8px 8px rgba(255, 255, 255, 0.12)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default InfiniteImageSlider;
  