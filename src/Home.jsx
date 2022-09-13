import React from "react";
import web from "../src/image/11.jpg";
import {NavLink} from 'react-router-dom';
import Common from "./Common";
const Home = () => {
  return (
   <>
  <Common name='Grow your business with' imgsrc={web} visit='/service' btnname='Get started'/>
   </>
  );
}

export default Home;
