import React, { useEffect, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import 'pdfjs-dist/web/pdf_viewer.css';
import pdfurl from './Cover letter 1.pdf'

const PdfViewer = ({ url }) => {
    console.log(url)
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfurl);

      try {
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 1.0 });
        const canvas = canvasRef.current;
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: canvas.getContext('2d'),
          viewport: viewport
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error('Error while loading and rendering PDF: ', error);
      }
    };

    fetchPdf();
  }, [url]);

  return <canvas ref={canvasRef} />;
};

export default PdfViewer;
