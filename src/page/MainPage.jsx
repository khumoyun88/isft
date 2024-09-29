import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import Main from "../components/Main";
import Achievements from "../components/Achivements";
import AccordionComponent from "../components/Accordion";

const MainPage = () => {
  return (
    <div>
      <Main />
      <Achievements />
      <div>
        <h1>Bizning talabalar</h1>
        <img src="/1.jpeg" alt="" />
      </div>
      <h1>Ko'p so'raladigan savollar</h1>
      <AccordionComponent />
      <RegisterForm />
    </div>
  );
};

export default MainPage;
