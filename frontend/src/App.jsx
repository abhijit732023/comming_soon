import React from "react";
import dolphinMob from "/mob.png";
import dolphinDesk from "/desktop.png";

function App() {
  const [bgImage, setBgImage] = React.useState(
    window.innerWidth < 768 ? dolphinMob : dolphinDesk
  );

  React.useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = "hidden";

    // Listen for resize events to update background image
    const handleResize = () => {
      setBgImage(window.innerWidth < 768 ? dolphinMob : dolphinDesk);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain", // Use cover for full coverage
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        backgroundColor: "#000323",
      }}
    >
      {/* Optionally, add overlay or text here */}
    </div>
  );
}

export default App;