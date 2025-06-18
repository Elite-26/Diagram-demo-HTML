import { useEffect, useState } from 'react';
import SVGViewer from './SVGViewer';

export default function App() {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch('/SVG222.svg')
      .then(response => response.text())
      .then(svgText => {
        const modifiedSvg = svgText.replace(
          /<svg([^>]*)>/,
          (match, attributes) => {
            if (!attributes.includes('viewBox') && !attributes.includes('preserveAspectRatio')) {
              return `<svg${attributes} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">`;
            }
            return match;
          }
        );
        setSvgContent(modifiedSvg);
      })
      .catch(error => {
        console.error('Error loading SVG:', error);
      });
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      width: '100%',
    }}>
      <SVGViewer svgContent={svgContent} />
    </div>
  );
}
