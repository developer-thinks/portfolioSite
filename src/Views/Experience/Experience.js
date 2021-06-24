import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Card from "../../Components/Card/Card";

export default function Experience() {
  return (

    <div className="section" id="Experiences" style={{ backgroundColor: "#e0e0e0" }}>
      <div className="container">

        <SectionTitle title="EDUCATION" quotes={expQuote} quotesAuthor={expQuoteAuthor}></SectionTitle>

        {/* <h2 style={{ color: "#ff6600", marginBottom: "30px", marginTop: "30px" }}>Career</h2>

        <Card title="Hackathon" subTitle="Participated in Hasoub Campus Startup Cup." date="Oct.2020 – Dec.2020" location="Online" details={hackDetails} detailsType="li" myVideoId="qqhczg75bdI"></Card>

        <Card title="Outstanding program" subTitle="“Smart Up” program of outstanding student - Afeka College." date="Oct.2016 – Jun.2018" location="Tel-Aviv" details={smarUpDetails} detailsType="li" myVideoId="xCZ-_0Aayvk"></Card>

        <Card title="Teaching Assistant" subTitle="Teaching Assistant at Afeka College of Engineering." date="Oct.2016 – Jun.2018" location="Tel-Aviv" details={teachingAssistantDetails} detailsType="li" myVideoId=""></Card>

        <Card title="Coordinator" subTitle="Coordinator of the Arab students at Afeka College." date="Aug.2016 – October.2019" location="Tel-Aviv" details={coordinatorDetails} detailsType="li" myVideoId=""></Card>

        <hr></hr>
        <h2 style={{ color: "#ff6600", marginBottom: "30px", marginTop: "30px" }}>Education</h2> */}

        <Card 
                title="BMS College" 
                subTitle="B.Tech in Electrical and Electronics Engineering." 
                date="Aug.2017 – Jun.2021" 
                location="Bangalore, India" 
                details={samDetailsGrad} 
                detailsType="p"
                myVideoId="">
        </Card>
        <hr/>
         <Card 
                title="Tungal Science College" 
                subTitle="PU in Science with Mathematics and Statistics." 
                date="Jun.2015 – May.2017" 
                location="Jamkhandi, Karnataka" 
                details={samDetailsPu} 
                detailsType="p"
                myVideoId="">
          </Card>
          <Card 
                title="SSDP kokatnoor" 
                subTitle=" Higher-primary Schooling" 
                date="Jun.2012 – march.2015" 
                location="kokatnoor, Athani" 
                details={samDetailsHigh} 
                detailsType="p"
                myVideoId="">
          </Card>
      </div>
    </div >
  );
}


const expQuote = "\"Education is the most powerful weapon which you can use to change the world\""
const expQuoteAuthor = "Nelson Mandela."

const hackDetails = [
  "We won second place."
  , "Built an App for Meditation and Relaxing."
]

const smarUpDetails = [
  "Designed and constructed a driving simulator adapted for users with CP to make physical therapy more effective and enjoyable."
  , "Conducted research about “Baras Paradox” demonstration on high voltage electricity grid."
  , " Went through management, leadership, entrepreneurship, and scientific writing workshops and Lectures in various engineer fields such as electricity and machinery."
]

// const schoolDetails = [
//   "Majored in Biology and Chemistry, five-unit level."
//   , "Mathematics and English – five-unit level."
// ]

const samDetailsGrad = [
  "BMS college of Engineering Bangalore",
  " CGPA: 8.2"
]

const samDetailsPu = [
  "Karnataka State Board for Higher Secondary Education.",
   "Percentage: 92% ",
   "CET : 3984.",
]

const samDetailsHigh =[
  "Central Board of Secondary Education",
  "CGPA: 9.6"
]

