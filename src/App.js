import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import MenuSection from "./Components/MenuSection/MenuSection";
import menuData from "./data/menuData";
import MenuTabs from "./Components/MenuTabs/MenuTabs";

function App() {
  return (
    <div 
      className="app-root"
      style={{
        background: `
          url('/images/left.png') left center no-repeat,
          url('/images/right.png') right center no-repeat,
          url('/images/Rectangle 116.png') center center no-repeat,
          #191716
        `,
        backgroundSize: 'auto 100vh, auto 100vh, 100% 100%, auto',
        minHeight: '100vh'
      }}
    >
      <Header />
      <Hero />
      <MenuTabs/>
      <MenuSection appetizers={menuData.Appetizers} salads={menuData.Salads} />
      <Footer />
    </div>
  );
}

export default App;
