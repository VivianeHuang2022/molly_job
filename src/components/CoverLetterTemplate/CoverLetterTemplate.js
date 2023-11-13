import React, { useState,useEffect } from 'react';
import { getCoverLetterPdf } from "../../utils/api";
import styles from './CoverLetterTemplate.module.css'
// import './CoverLetterTemplateNew.css'
import {Document,Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Link } from 'react-router-dom';
// import { PDFViewer, Page} from '@react-pdf/renderer';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function CoverLetterTemplate() {
    const [pdfFile, setPdfFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const fetchPdf = async () => {
        try {
            const response = await getCoverLetterPdf();
            const file = new Blob(
              [response.data], 
              {type: 'application/pdf'}
            );
            const fileURL = URL.createObjectURL(file);
            setPdfFile(fileURL);
        } catch (error) {
            console.error("Error fetching PDF: ", error);
        }
    };
      const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
      };
  
      useEffect(()=>{
        fetchPdf()
      },[])
  return (
    <div className={styles.coverLetterContainer}>
        <div className={styles.coverLetterContent}>
        {pdfFile && (
          // <PDFViewer width='100%' height='100%'>
          //   <Page
          //   file={pdfFile}
          //   scale={1.0}
          //   pageNumber={1}
          //   width='100%'
          //   height='100%'/>
          // </PDFViewer>
            <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            >
            {Array.from(new Array(numPages), (el, index) => (
                <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                renderTextLayer={false}
                // width='100%'
                // height='60%'
                >
                  {console.log(el)}
                </Page>
            ))}
            </Document>
        )}
        </div>
        <div className={styles.coverLetterFooter}><button>CHANGE TEMPLATE</button> OR <Link to='/layout/resume' style={{color:'blue'}}>CREATE RESUME</Link></div>
      </div>
  )
}
