import React, { useState, useEffect } from 'react';
import { blockData } from '../Data/blockData';
import { connectData, type ConnectData } from '../Data/connectData';
import type { BlockData } from '../Data/blockData';
import RightSidePanel from './RightSidePanel';
import SModal from './SModal';
import './SVGViewer.css';

interface SVGViewerProps {
  svgContent?: string;
}

type TabType = 'main' | 'contact';

const SVGViewer: React.FC<SVGViewerProps> = ({ svgContent }) => {
  const [selectedBlock, setSelectedBlock] = useState<BlockData | null>(null);
  const [currentQAIndex, setCurrentQAIndex] = useState(0);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<TabType>('main');
  const [highlightedLines, setHighlightedLines] = useState<string[]>([]);
  const [hoveredBlock, setHoveredBlock] = useState<BlockData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedLine, setSelectedLine] = useState<any>(null);
  const [hoveredLine, setHoveredLine] = useState<any>(null);

  // Update highlighted lines when selected block or hovered block changes
  useEffect(() => {
    if (selectedBlock) {
      setHighlightedLines(selectedBlock.lines);
    } else if (hoveredBlock) {
      setHighlightedLines(hoveredBlock.lines);
    } else if (hoveredLine) {
      setHighlightedLines([hoveredLine.id]);
    } else {
      setHighlightedLines([]);
    }
  }, [selectedBlock, hoveredBlock, hoveredLine]);

  const findBlockFromElement = (element: Element): BlockData | null => {
    const parentG = element.closest('g[id^="g"]');
    if (parentG) {
      const gId = parentG.id;
      return blockData.find(block => block.id === gId) || null;
    }
    return null;
  };

  const findLineFromElement = (element: Element) => {
    const parentG = element.closest('g[id^="g"]');
    if (parentG) {
      const gId = parentG.id;
      return connectData.find(line => line.id === gId) || null;
    }
    return null;
  };

  const handleSVGClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    const clickedElement = target.closest('g, path');
    
    if (clickedElement) {
      const block = findBlockFromElement(clickedElement);
      const line = findLineFromElement(clickedElement);
      
      if (line) {
        setSelectedLine(line);
        setShowModal(true);
        setSelectedBlock(null);
      } else if (block) {
        setSelectedBlock(block);
        setCurrentQAIndex(0);
        setShowModal(false);
        setSelectedLine(null);
      } else {
        setSelectedBlock(null);
        setShowModal(false);
      }
    }
  };

  const handleSVGHover = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as Element;
    const hoveredElement = target.closest('g, path');
    
    if (hoveredElement) {
      const block = findBlockFromElement(hoveredElement);
      const line = findLineFromElement(hoveredElement);
      
      if (line) {
        setHoveredLine(line);
        setHoveredBlock(null);
      } else if (block) {
        setHoveredBlock(block);
        setHoveredLine(null);
      } else {
        setHoveredBlock(null);
        setHoveredLine(null);
      }
    }
  };

  const handleSVGLeave = () => {
    setHoveredBlock(null);
    setHoveredLine(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLine(null);
    setCurrentDataIndex(0)
  };

  // Add styles for highlighted lines
  const svgStyle = `
    ${highlightedLines.map(lineId => `
      #${lineId} {
        stroke-width: 3px !important;
        stroke: #ff0000 !important;
        filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.5));
      }
    `).join('')}

    ${blockData.map(block => `
      #${block.id} {
        cursor: pointer;
      }
    `).join('')}

    ${connectData.map(line => `
      #${line.id} {
        cursor: pointer;
      }
    `).join('')}
  `;

  const handlePrevQA = () => {
    if (selectedBlock && currentQAIndex > 0) {
      setCurrentQAIndex(currentQAIndex - 1);
    }
  };

  const handleNextQA = () => {
    if (selectedBlock && currentQAIndex < selectedBlock.data.qa.length - 1) {
      setCurrentQAIndex(currentQAIndex + 1);
    }
  };

  const handlePrevModal = () => {
    if (selectedLine && currentDataIndex > 0) {
      setCurrentDataIndex(currentDataIndex - 1);
    }
  };

  const handleNextModal = () => {
    if (selectedLine && currentDataIndex < selectedLine.data.length - 1) {
      setCurrentDataIndex(currentDataIndex + 1);
    }
  };

  return (
    <div className="svg-viewer-container">
      <div className={`svg-viewer-content ${selectedBlock ? 'with-panel' : ''}`}>
        {svgContent && (
          <>
            <style>{svgStyle}</style>
            <div 
              className="svg-container"
              onClick={handleSVGClick}
              onMouseMove={handleSVGHover}
              onMouseLeave={handleSVGLeave}
              dangerouslySetInnerHTML={{ __html: svgContent }} 
            />
          </>
        )}
      </div>
      
      <RightSidePanel
        selectedBlock={selectedBlock}
        currentQAIndex={currentQAIndex}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onPrevQA={handlePrevQA}
        onNextQA={handleNextQA}
      />

      {showModal && selectedLine && (
        <SModal
          isOpen={showModal}
          onClose={handleCloseModal}
          data={selectedLine.data}
          currentDataIndex={currentDataIndex}
          onPrevModal={handlePrevModal}
          onNextModal={handleNextModal}
        />
      )}
    </div>
  );
};

export default SVGViewer; 