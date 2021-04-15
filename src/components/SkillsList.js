/** @format */

import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "English", level: 1 },
    { name: "HTML5", level: 2 },
    { name: "CSS", level: 2 },
    { name: "JS", level: 2 },
    { name: "React", level: 3 },
  ]);
  return (
    <div>
      {skills.map((skill) => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;
