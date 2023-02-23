import styles from "./skillslist.module.css";
import { skillsData } from "../../data";
import { useState } from "react";

export default function SkillsList() {
  const [filter, setFilter] = useState("FrontEnd");

  function handleFilter(event) {
    event.preventDefault();
    setFilter(event.target.value);
  }

  return (
    <div className={styles.listContainer}>
      <select onChange={handleFilter} value={filter}>
        <option value="FrontEnd">FrontEnd Skills</option>
        <option value="BackEnd">BackEnd Skills</option>
        <option value="WorkFlow">WorkFlow Skills</option>
      </select>

      <ul>
        {skillsData
          .filter((skill) => skill.category === filter)
          .map((skill) => {
            return (
              <li key={skill.title}>
                {skill.icon}
                {skill.title}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
