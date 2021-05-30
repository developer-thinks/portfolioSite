import React from "react";
import "./Main.css";
import ParticlesBg from "particles-bg";
import Particles from 'react-particles-js';
import MainCard from "../../Components/MainCard/MainCard";

export default function Main() {
  return (
    <div id="Main" className="Main">

      <MainCard></MainCard>

      <ParticlesBg className="ParticlesBg" num={20} color="#3341FF" type="polygon" bg={false} />
      {/* <Particles 
          params = {{
            particles:{
              number:{
                value:70,
                density:{
                  enable:!0, 
                  value_area:800
                }
              },
              color:{
                value:"#ffffff"
              },
              shape:{
                type:"polygon",
                stroke:{
                    width:0,color:"#000000"
                },
                polygon:{
                    nb_sides:5
                }
              }
            }
          }}
      
      /> */}

    </div>
  );
}

