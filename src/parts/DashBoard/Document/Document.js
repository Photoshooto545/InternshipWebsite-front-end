import React from 'react'
import styles from './Document.module.css'
import {Link} from 'react-router-dom'
const Document = () => {
    return (
        <div id="document" className={styles.docContainer}>
            <h1 className={styles.heading1}>Documents</h1>
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.content}>
                        <h1 className={styles.heading2}>My Documents</h1>
                    </div>
                    <div className={styles.edit}><Link to="/"><button className={styles.btn}><input type="file" id="file"/>Add Document
                    </button></Link></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Document;
