import Button from "../Button/Button";
import Heading from "../TextComponents/Heading";
import NormalText from "../TextComponents/NormalText";
import SubHeading from "../TextComponents/SubHeading";
import ExpandingCard from "./ExpandingCards";
import backer1 from "../../assets/Backers/Media Kit_DS Full whitte 1.png";
import backer2 from "../../assets/Backers/NSRCEL Main logo.png";
import backer3 from "../../assets/Backers/SSN iFound Logo transparent blue.png";
import backer4 from "../../assets/Backers/Veltech.jpeg";
function AboutUs() {
  const cardsData = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Explore The World",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Wild Forest",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      title: "Sunny Beach",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      title: "City on Winter",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      title: "Mountains - Clouds",
    },
  ];

  return (
    <div className="">
      <div className="flex rounded-3xl bg-gray-300/5 p-10">
        <div className="w-1/2 bg-transparent">
          <SubHeading
            txt={"ABOUT US"}
            textCase={true}
            textColor={"blue"}
            textStyle={"bg-transparent"}
          />
          <Heading txt={"How it Started"} textStyle={"bg-transparent"} />
          <ExpandingCard data={cardsData} />
        </div>
        <div className="w-1/2 bg-transparent">
          <NormalText
            txt={
              "AeroDome, founded in 2023 by three IIT Madras alumni, emerged from their core involvement with Avishkar Hyperloop—a student team that secured $1.25M funding from the Railway Ministry and corporates and ranked among the global top three in hyperloop development. "
            }
            txtStyle={"bg-transparent"}
          />
          <NormalText
            txt={
              "Based in Chennai, we are an NSRCEL, IIM Bangalore-incubated startup, supported by top incubators like Deshpande Startups and VELTECH TBI, with guidance from industry experts and mentors."
            }
            txtStyle={"mt-3 bg-transparent"}
          />
          <div className="bg-white/90 flex rounded-lg p-3 mt-5 items-center justify-center mb-8">
            <img
              src={backer1}
              alt="nsrcel logo"
              className="w-1/5 h-14 mx-auto bg-transparent"
            />
            <img src={backer2} className="w-1/5 h-14  mx-auto bg-transparent" />
            <img src={backer3} className="w-1/5 h-20  mx-auto bg-transparent" />
            <img src={backer4} className="w-1/5 h-14  mx-auto bg-transparent" />
          </div>
          <Button txt={"Contact Us"} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
