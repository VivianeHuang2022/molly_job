import React from 'react'
import {PhoneOutlined,MailOutlined,LinkedinOutlined } from "@ant-design/icons";
import './CoverLetterTemplate.css'

export default function CoverLetterTemplate() {
  return (
    <div className="cover-letter-container">
        <div className="cover-letter-page">
        <div className="cover-letter-content">
            <header className="cover-letter-header">
                <h1>Lawley</h1>
                <p style={{color:'orange'}}>Marketing Student</p>
            </header>

            <section className="cover-letter-contact">
                <p><PhoneOutlined style={{color:"orange"}}/> 0123456789</p>
                <p><MailOutlined style={{color:"orange"}}/> freedie@email.com</p>
                <p><LinkedinOutlined style={{color:"orange"}}/> linkedin.com/in/freddie-torres</p>
            </section>

            <article className="cover-letter-body">
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

            <footer className="cover-letter-footer">
                <button>Change Template</button>
            </footer>
            </div>
        </div>
      </div>
  )
}
