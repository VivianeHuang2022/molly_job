import React from 'react'
import {PhoneOutlined,MailOutlined,LinkedinOutlined } from "@ant-design/icons";
import styles from './CoverLetterTemplate.module.css'

export default function CoverLetterTemplate() {
  return (
    <div className={styles.coverLetterContainer}>
        <div className={styles.coverLetterPage}>
        <div className={styles.coverLetterContent}>
            <header className={styles.coverLetterHeader}>
                <h1>Lawley</h1>
                <p style={{color:'orange'}}>Marketing Student</p>
            </header>

            <section className={styles.coverLetterContact}>
                <p><PhoneOutlined style={{color:"orange"}}/> 0123456789</p>
                <p><MailOutlined style={{color:"orange"}}/> freedie@email.com</p>
                <p><LinkedinOutlined style={{color:"orange"}}/> linkedin.com/in/freddie-torres</p>
            </section>

            <article className={styles.coverLetterBody}>
                <p>Dear Ms. Alia Sanford,</p>
                <p>
                I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...
                {/* Add the rest of the text content here */}
                </p>
                <p>
                I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...
                {/* Add the rest of the text content here */}
                </p><p>
                I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...
                {/* Add the rest of the text content here */}
                </p><p>
                I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...I am writing to express my interest in the summer internship program at Ultimate Co...
                {/* Add the rest of the text content here */}
                </p>
                <p>
                    sincerely
                </p>
                <p>
                    Name LastName
                </p>
            </article>

            {/* <footer className={styles.coverLetterFooter}>
                <button>Change Template</button>
            </footer> */}
            </div>
        </div>
      </div>
  )
}
