import React from 'react'
import styles from "./ProgramSection2.module.css";
import InternshipPrograms from "../../../utils/InternshipPrograms.json";
import Intern_info from "../../../Pages/intern_info/Intern_info"
import { Link } from "react-router-dom";

const ProgramSection2 = () => {
  return (
    <div>
      <div className={styles.internshipprogrampageheadingouter}><h1 className={styles.internshipprogrampageheading}>Internship Program</h1></div>
      <div className={styles.allinternshipprogramscard}>
        {
          InternshipPrograms.map((Internship) => {
            return <div className={styles.programsCard}>
              <img src={Internship.img} alt="programImg" />
              <div className={styles.programTitle}>{Internship.programTitle}</div>
              <div className={styles.programInfo}>{Internship.title}</div>
              <div className={styles.cardLink}>
                <div className={styles.programDuration}>Duration:{Internship.duration}</div>
                <div className={styles.programKnowMore}>
<<<<<<< HEAD
                <Link to={`/programs/${Internship.link}`}>Apply now</Link>
=======
                  <Link to={Intern_info}>Apply now</Link>
>>>>>>> 2254bc87fa685ccf1d03bad952fdf5e8b4237e5c
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default ProgramSection2
