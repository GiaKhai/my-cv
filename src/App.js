/** @format */

import React from "react";
import InfoCard from "./components/InfoCard";
import CVComponent from "./components/CVComponents";
import SkillsList from "./components/SkillsList";
import info from "./data/info";
import education from "./data/education";
import experience from "./data/experience";
import "./style.css";

export default function App() {
  const experienceComponent = experience.map((item) => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map((item) => (
    <CVComponent item={item} />
  ));

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>Skills</h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>Work Experience </h1>
            {experienceComponent}
          </section>
          <section className="education">
            <h1>Education </h1>
            {educationComponent}
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Nguyen Dinh Gia Khai</p>
      </footer>
    </div>
  );
}
