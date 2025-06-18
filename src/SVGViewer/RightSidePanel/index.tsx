import React from 'react';
import type { BlockData } from '../../Data/blockData';
import type { AnswerSegment } from '../../Data/blockData';
// import { contactData } from '../../Data/contactData';

interface RightSidePanelProps {
  selectedBlock: BlockData | null;
  currentQAIndex: number;
  activeTab: 'main' | 'contact';
  onTabChange: (tab: 'main' | 'contact') => void;
  onPrevQA: () => void;
  onNextQA: () => void;
}

const RightSidePanel: React.FC<RightSidePanelProps> = ({
  selectedBlock,
  currentQAIndex,
  activeTab,
  onTabChange,
  onPrevQA,
  onNextQA,
}) => {
  const renderAnswer = (answer: AnswerSegment[]) => {
    return answer.map((segment, index) => {
      switch (segment.type) {
        case 'text':
        case 'bold':
          return <span key={index} style={{ fontWeight: segment.type === 'bold' ? 'bold' : 'normal' }}>{segment.content}</span>;
        case 'break':
          return <br key={index} />;
        default:
          return null;
      }
    });
  };

  return (
    <div className={`details-panel ${selectedBlock ? 'expanded' : ''}`}>
      {selectedBlock ? (
        <div>
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === 'main' ? 'active' : ''}`}
              onClick={() => onTabChange('main')}
            >
              About
            </button>
            <button 
              className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => onTabChange('contact')}
            >
              Contact
            </button>
          </div>
          
          {activeTab === 'main' ? (
            <div className="tab-content">
              <h2 className="block-title">{selectedBlock.data.name}</h2>
              <p className="block-description">{selectedBlock.data.description}</p>
              <div className="qa-section">
                <h3 className="qa-title">Q&A</h3>
                {selectedBlock.data.qa.length > 0 && (
                  <>
                    <div className="qa-navigation">
                      <button 
                        className="qa-nav-button"
                        onClick={onPrevQA}
                        disabled={currentQAIndex === 0}
                      >
                        Previous
                      </button>
                      <span className="qa-counter">
                        {currentQAIndex + 1} / {selectedBlock.data.qa.length}
                      </span>
                      <button 
                        className="qa-nav-button"
                        onClick={onNextQA}
                        disabled={currentQAIndex === selectedBlock.data.qa.length - 1}
                      >
                        Next
                      </button>
                    </div>
                    <div className="qa-item">
                      <div className="question">
                        <strong>Question:</strong>
                        <p>{selectedBlock.data.qa[currentQAIndex].question}</p>
                      </div>
                      <div className="answer">
                        <strong>Answer:</strong>
                        <p>{renderAnswer(selectedBlock.data.qa[currentQAIndex].answer)}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="tab-content">
              <h2 className="block-title">Contact Information</h2>
              <div className="contact-section">
                <div className="team-section">
                  <h3>Our Team</h3>
                  <img 
                    src={selectedBlock.contact.team_lead_img} 
                    alt="Team" 
                    className="team-image"
                  />
                  <p className="contact-info">
                    {selectedBlock.contact.lead_name}
                  </p>
                </div>
                <div className="contact-info-section">
                  <h3>Contact Us</h3>
                  <p className="contact-info">
                    {selectedBlock.contact.contact_us}
                  </p>
                </div>
                <div className="contact-info-section">
                  <h3>Team Page</h3>
                  <p className="contact-info">
                    {selectedBlock.contact.team_page}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="placeholder">Click on a block to view its details</p>
      )}
    </div>
  );
};

export default RightSidePanel;
