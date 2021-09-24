import React, { useState } from 'react'
import styles from './AddSkills.module.css'
import './AddSkills.css'
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";

const AddSkills = () => {
    const skills = [{ id: 1, title: "Marketing" },
    { id: 2, title: "Project Management" },
    { id: 3, title: "Analytical skills" },
    { id: 4, title: "Team Management" },
    { id: 5, title: "Strategy" },
    { id: 6, title: "Customer Service" },
    { id: 7, title: "Leadership" },
    { id: 8, title: "Sales" },
    { id: 9, title: "Engineering" },
    { id: 10, title: "Communication Skills" }]

    const handleClick = (id, e) => {
        if (e.target.classList.contains("skillselected")) {
            e.target.classList.remove("skillselected")
        } else {
            e.target.classList.add("skillselected")
        }
    }

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Add Skills</h1>
                <input type="text" name="Skill" id={styles.skills} placeholder="Skill (eg : UX designer)" />
                <div className={styles.addMore}>You can add 9 more skills</div>
                <div className={styles.suggestedskills}>
                    <h3 className={styles.suggestedskillsheading}>Some suggested skills:</h3>
                    <div className={styles.skillsboxouter}>
                        {skills.map(skill =>
                            <div className="skillsbox" key={skill.id} onClick={(e) => handleClick(skill.id, e)}>
                                {skill.title}
                            </div>
                        )}
                    </div>
                    <div className={styles.buttons}>
                        <button>Cancel</button>
                        <button>Save</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddSkills
