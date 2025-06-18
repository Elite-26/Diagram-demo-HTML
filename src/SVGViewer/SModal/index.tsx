import React from 'react';
import './SModal.css';

interface SModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Array<{
    name: string;
    summary: string;
    desTitle: string;
    description: string;
  }>;
  currentDataIndex: number;
  onPrevModal: () => void;
  onNextModal: () => void;
}

const SModal: React.FC<SModalProps> = ({ isOpen, onClose, data, currentDataIndex, onPrevModal, onNextModal }) => {
  if (!isOpen) return null;
  // if (!isOpen || !data || data.length === 0) return null;

  const currentData = data[currentDataIndex];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>{currentData.name}</h2>
        <div className="modal-summary">{currentData.summary}</div>
        <div className="modal-description">
          <h3>{currentData.desTitle}</h3>
          <p>{currentData.description}</p>
        </div>

        {data.length > 1 && (
          <div className="qa-navigation">
            <button
              className="qa-nav-button"
              onClick={onPrevModal}
              disabled={currentDataIndex === 0}
            >
              Previous
            </button>
            <span className="qa-counter">
              {currentDataIndex + 1} / {data.length}
            </span>
            <button
              className="qa-nav-button"
              onClick={onNextModal}
              disabled={currentDataIndex === data.length - 1}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SModal;
