import React from "react";
import { Link } from "react-router-dom";
import wave from "@/assets/svgs/weif.svg";
import NavBar from "@/components/NavBar";
import "./index.css";

function Home() {
  return (
    <div className="Layout">
      <NavBar />
      <div className="Body">
        <div className="Title">TO-DO APP</div>
        <div className="Subtitle">TO THE EXTREME</div>
        <div className="Learn-Button">
          <Link className="Learn-More">learn more</Link>
        </div>
      </div>
      <img src={wave} className="Wave" alt="wave" />
    </div>
  );
}

export default Home;
