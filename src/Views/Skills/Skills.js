import React from "react";
import "./Skills.css";
import Skill from "../../Components/Progress/SkillProgress/Progress";
import Language from "../../Components/Progress/LanguageProgress/Language";
import AnimationProgress from "../../Components/Progress/AnimationProgress/AnimationProgress";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

import DevIcon, {iconList, RandomIcon} from "devicon-react-svg";

export default function Skills() {
  return (
    <div className="section" id="Skills" style={{ backgroundColor: "#e0e0e0" }}>
      <div className="container">

        <SectionTitle title="Skills" quotes="" quotesAuthor=""></SectionTitle>

        <div className="row">
          <div className="skills">
            <div className="col-sm-3 skills-col">
            <div class="tech">
            {/* <h2>Languages</h2> */}
            <i class="devicon-cplusplus-plain colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <br />
            <i class="devicon-python-plain colored"></i>
            <i class="devicon-java-plain-wordmark colored"></i>
            <p> My favorite languages  </p>
            </div>
          </div>

          <div className="col-sm-3 skills-col">
            <div class="tech">
            {/* <h2>Front-End</h2> */}
                <i class="devicon-html5-plain-wordmark colored"></i>
                <i class="devicon-css3-plain-wordmark colored"></i>
                <br />
                <i class="devicon-react-original colored"></i>
                <i class="devicon-bootstrap-plain colored"></i>
            <p> Frontend technologies  </p>
            </div>
          </div>

          <div className="col-sm-3 skills-col">
            <div class="tech">
            {/* <h2>Back-End</h2> */}
                <i class="devicon-nodejs-plain colored"></i>
                <i class="devicon-express-original colored"></i>
                <br />
                <i class="devicon-mongodb-plain-wordmark colored"></i>
                <i class="devicon-mysql-plain-wordmark colored"></i>
            <p>Backend technologies  </p>
            </div>
          </div>

          <div className="col-sm-3 skills-col">
            <div class="tech">
            {/* <h2>Tools</h2> */}
                <i class="devicon-git-plain colored"></i>
                <i class="devicon-visualstudio-plain colored"></i>
                <br />
                <i class="devicon-github-plain colored"></i>
                <i class="devicon-linux-plain colored"></i>
            <p> version control, code editing  </p>
            </div>
          </div>
          </div>
        </div>



        {/* <div className="row">
          <div className="col-sm-6 skils-col">
            <Skill name="C" percent="100"></Skill>
            <Skill name="C++" percent="85"></Skill>
            <Skill name="JavaScript" percent="85"></Skill>
            <Skill name="Python" percent="70"></Skill>
            <hr></hr>
            <Skill name="MYSQL" percent="100"></Skill>
            <Skill name="Firebase" percent="60"></Skill>
            <hr></hr>
          </div>

          <div className="col-sm-6 skils-col">
            <Skill name="ReactJs" percent="85"></Skill>
            <Skill name="HTML5" percent="100"></Skill>
            <Skill name="CSS3" percent="100"></Skill>
            <Skill name="Bootstrap4" percent="100"></Skill>
            <hr></hr> 
            <Skill name="OOPS" percent="100"></Skill>
            <Skill name="Linux" percent="50"></Skill>
            <hr />
          </div>
        </div> */}

        {/* <div className="row">
          <div className="col-sm-6 skils-col">
            <Skill name="Git" percent="100"></Skill>
          </div>
          <div className="col-sm-6 skils-col">
            <Skill name="Github" percent="100"></Skill>
          </div>
        </div> */}

        

        <AnimationProgress></AnimationProgress>

        {/* <div className="row">
          <Language name="English" percent="90" level="Fluent"></Language>
          <Language name="Hindi" percent="80" level="Fluent"></Language>
          <Language name="Kannada" percent="100" level="Native"></Language>
        </div> */}

      </div>
    </div>
  );
}


