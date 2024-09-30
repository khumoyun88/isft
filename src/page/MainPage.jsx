import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Main from "../components/Main";
import Achievements from "../components/Achivements";
import AccordionComponent from "../components/Accordion";
import SimpleCarousel from "../components/Carusel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import VideoComponent from "../components/video";


const MainPage = () => {
  return (
    <div>
      <Main />
      <Achievements />
      {/* <div>
        <h1>Bizning talabalar</h1>
        <img src="/1.jpeg" alt="" />
        <img src="/2.jpeg" alt="" />
      </div> */}
      <SimpleCarousel />
      <h1 class="text-[30px] pb-2 pl-2 pt-10">Ko'p so'raladigan savollar</h1>
      <AccordionComponent />
      <VideoComponent />
      <RegisterForm />
    </div>
  );
};

export default MainPage;
