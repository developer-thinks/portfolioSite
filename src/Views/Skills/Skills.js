import React from "react";
import "./Skills.css";
import Skill from "../../Components/Progress/SkillProgress/Progress";
import Language from "../../Components/Progress/LanguageProgress/Language";
import AnimationProgress from "../../Components/Progress/AnimationProgress/AnimationProgress";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

export default function Skills() {
  return (
    <div className="section" id="Skills" style={{ backgroundColor: "#e0e0e0" }}>
      <div className="container">

        <SectionTitle title="Skills" quotes="" quotesAuthor=""></SectionTitle>

        <div className="row">

          {/* LEFT */}
          <div className="col-sm-6 skils-col">
            {/* <Skill name="java" percent="90"></Skill> */}
            <Skill name="C" percent="100"></Skill>
            <Skill name="C++" percent="85"></Skill>
            <Skill name="JavaScript" percent="85"></Skill>
            <Skill name="Python" percent="70"></Skill>
            <hr></hr>
            <Skill name="MYSQL" percent="100"></Skill>
            {/* <Skill name="PostgreSQL" percent="90"></Skill> */}
            {/* <Skill name="H2 Database" percent="80"></Skill> */}
            <Skill name="Firebase" percent="60"></Skill>
            <hr></hr>
          </div>

          {/* RIGHT */}
          <div className="col-sm-6 skils-col">
            {/* <Skill name="Android" percent="85"></Skill>
            <Skill name="Swift" percent="40"></Skill> */}
            {/* <hr></hr> */}
            <Skill name="ReactJs" percent="85"></Skill>
            
            <Skill name="HTML5" percent="100"></Skill>
            <Skill name="CSS3" percent="100"></Skill>
            <Skill name="Bootstrap4" percent="100"></Skill>
            {/* <Skill name="jquery" percent="10"></Skill> */}
            <hr></hr> 
            <Skill name="OOPS" percent="100"></Skill>
            <Skill name="Linux" percent="50"></Skill>
            <hr />
          </div>

        </div>

        <div className="row">

          {/* LEFT */}
          <div className="col-sm-6 skils-col">
            {/* <Skill name="Spring Boot" percent="100"></Skill>
            <Skill name="Spring Security" percent="30"></Skill>
            <Skill name="RESTful API" percent="100"></Skill>
            <Skill name="Maven" percent="100"></Skill> */}
            <Skill name="Git" percent="100"></Skill>
          </div>

          {/* RIGHT */}
          <div className="col-sm-6 skils-col">
            
            {/* <Skill name="Agile (Scrum)" percent="80"></Skill> */}
            {/* <Skill name="Trello" percent="100"></Skill> */}
            {/* <Skill name="Overleaf" percent="100"></Skill> */}
            <Skill name="Github" percent="100"></Skill>
          </div>

        </div>

        <AnimationProgress></AnimationProgress>

        <div className="row">
          <Language name="English" percent="90" level="Fluent"></Language>
          <Language name="Hindi" percent="80" level="Fluent"></Language>
          <Language name="Kannada" percent="100" level="Native"></Language>
        </div>

      </div>
    </div>
  );
}


