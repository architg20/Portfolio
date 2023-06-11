import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiAndroid, DiApple } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
const jobSummary =
  "Fresher Frontend Developer willing to adapt to modern technologies to contribute to the organization's growth.";

const PersonalDetails = [
  {
    label: "Name",
    value: "Archit Giridhar",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "India",
  },
  {
    label: "email",
    value: "architgnayak05@gmail.com",
  },
  {
    label: "contact",
    value: "+91 9916393215",
  },
];

const About = () => {
  return (
    <section id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Frontend Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {PersonalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">Services Wrapper</div>
        <div>
        <div className="about__content__serviceWrapper__innerContent">
          <FaDev size={60} color="var(--yellow-theme-main-color)" />
        </div>
        <div>
          <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
        </div>
        <div>
          <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
        </div>
        <div>
          <DiApple size={60} color="var(--yellow-theme-main-color)" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
