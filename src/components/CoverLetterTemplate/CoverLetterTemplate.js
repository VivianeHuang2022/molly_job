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
                <p>Dear Admissions Committee,</p>
                <p>
                I am writing to express my enthusiastic interest in pursuing [Name of the Program] at Technische Universität Dresden. With a robust foundation in [Your Field/Subject of Undergraduate Study] from [Your University's Name], coupled with my dedication to furthering my expertise in [Specific Topic/Area related to TU Dresden's program], I am eager to immerse myself in the dynamic and innovative environment that TU Dresden is renowned for.
                {/* Add the rest of the text content here */}
                </p>
                <p>
                What particularly attracts me to TU Dresden is its commitment to research excellence and its reputation as one of the leading universities in [the specific field or research area]. The possibility to work with distinguished faculty members such as [Professors' Names, if any in particular], and to engage with the cutting-edge research being conducted at [specific research institute or laboratory at TU Dresden] aligns perfectly with my professional aspirations and academic interests.
                {/* Add the rest of the text content here */}
                </p><p>
                Throughout my academic and professional journey, I have continuously sought out challenges that enhance my skills and knowledge. [Include a brief example of an academic or professional challenge you faced and how you overcame it, tying it to the skills or knowledge relevant to the program at TU Dresden.] My goal is to contribute to [specific research area or project at TU Dresden], leveraging my previous experience with [mention any particular technique, theory, or project you have worked on that is relevant].
                {/* Add the rest of the text content here */}
                </p><p>
                Furthermore, studying in Germany, especially at TU Dresden, is an opportunity for significant personal growth. It is not only about gaining a degree but also about immersing myself in a culture renowned for its engineering excellence and academic rigor. I am particularly excited about the prospect of collaborating with peers from diverse cultural and professional backgrounds, which is a cornerstone of the learning environment at TU Dresden.
                {/* Add the rest of the text content here */}
                </p>
                <p>
                I am convinced that the [Name of the Program] is the next logical step for my academic journey and a pivotal milestone towards achieving my career objectives. I look forward to contributing my unique perspectives to the TU Dresden community while gaining insights and experiences that can only be found at a university of such international standing.
                {/* Add the rest of the text content here */}
                </p>
                <p>
                Thank you for considering my application. I am eager to hopefully join the ranks of TU Dresden's accomplished alumni and to contribute to the vibrant academic community.
                {/* Add the rest of the text content here */}
                </p>
                <p>
                Warm regards,
                </p>
                <p>
                [Your Name]
                </p>
            </article>

            <footer className={styles.coverLetterFooter}>
                <button>Change Template</button>
                <button>Regenerate</button>
            </footer>
            </div>
        </div>
      </div>
  )
}
