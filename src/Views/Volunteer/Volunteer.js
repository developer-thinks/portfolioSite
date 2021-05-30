import React from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Card from "../../Components/Card/Card";

export default function Volunteer() {
  return (
    <div className="section" id="Volunteer">
      <div className="container">

        <SectionTitle title="volunteering" quotes={volunteerQuote} quotesAuthor={volunteerQuoteAuthor}></SectionTitle>

        <Card 
              title="Phase Shift" 
              subTitle="Volunteered at “Phase Shift” Program in College." 
              date="Sep.2019" 
              location="Bangalore" 
              details={digitalDetails} 
              detailsType="p" myVideoId="">    
        </Card>

        <Card 
              title="Workshops" 
              subTitle="conducted various workshops and volunteered them during 3rd year of college." 
              date="Oct.2019– Nov.2019" 
              location="Arraba" 
              details={leadershipDetails} 
              detailsType="p"
               myVideoId="">
         </Card>


        {/* <div style={{ textAlign: "center" }}>
          <h5>Deer & Beer make me happy</h5>
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="DY7D23A8MUT92" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_IL/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div> */}

      </div>
    </div>
  );

}


const volunteerQuote = "\"Remember that the happiest people are not those getting more, but those giving more.\""
const volunteerQuoteAuthor = "H. Jackson Brown Jr."

const digitalDetails = ["Accompanying small businesses in the periphery and setting up digital tools such as a landing page through Wix, a Facebook business page, Google my business profile."]

const leadershipDetails = [" workshops for high school youth to give them the spirit of volunteering and a volunteer days in schools and institutions for Children with disabilities."]
