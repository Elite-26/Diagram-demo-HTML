// Main application state
let selectedBlock = null;
let currentQAIndex = 0;
let currentDataIndex = 0;
let activeTab = 'main';
let highlightedLines = [];
let hoveredBlock = null;
let showModal = false;
let selectedLine = null;
let hoveredLine = null;

// DOM elements
const svgContainer = document.getElementById('svgContainer');
const svgViewerContent = document.getElementById('svgViewerContent');
const detailsPanel = document.getElementById('detailsPanel');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalSummary = document.getElementById('modalSummary');
const modalDesTitle = document.getElementById('modalDesTitle');
const modalDescription = document.getElementById('modalDescription');
const modalNavigation = document.getElementById('modalNavigation');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');
const modalCounter = document.getElementById('modalCounter');

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
  // loadSVG();
  setupEventListeners();
});

// Load SVG content
// async function loadSVG() {
//   try {
//     const response = await fetch('SVG222.svg');
//     const svgText = await response.text();

//     // Modify SVG to add viewBox if not present
//     const modifiedSvg = svgText.replace(
//       /<svg([^>]*)>/,
//       (match, attributes) => {
//         if (!attributes.includes('viewBox') && !attributes.includes('preserveAspectRatio')) {
//           return `<svg${attributes} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">`;
//         }
//         return match;
//       }
//     );

//     svgContainer.innerHTML = modifiedSvg;
//     applySVGStyles();
//   } catch (error) {
//     console.error('Error loading SVG:', error);
//   }
// }
// async function loadSVG() {
//   try {
//     const response = await fetch('assets/SVG222.svg');
//     const svgText = await response.text();

//     // Add viewBox and preserveAspectRatio if missing
//     const modifiedSvg = svgText.replace(
//       /<svg([^>]*)>/,
//       (match, attributes) => {
//         const hasViewBox = /viewBox\s*=/.test(attributes);
//         const hasPreserve = /preserveAspectRatio\s*=/.test(attributes);

//         let result = `<svg${attributes}`;
//         if (!hasViewBox) result += ' viewBox="0 0 100 100"';
//         if (!hasPreserve) result += ' preserveAspectRatio="xMidYMid meet"';
//         return result + '>';
//       }
//     );

//     const svgContainer = document.getElementById('svgContainer');
//     if (!svgContainer) {
//       console.error('svgContainer element not found in HTML');
//       return;
//     }

//     svgContainer.innerHTML = modifiedSvg;
//     applySVGStyles(); // Optional: add interactivity here

//   } catch (error) {
//     console.error('Error loading SVG:', error);
//   }
// }

// Setup event listeners
function setupEventListeners() {
  // SVG click events
  svgContainer.addEventListener('click', handleSVGClick);
  svgContainer.addEventListener('mousemove', handleSVGHover);
  svgContainer.addEventListener('mouseleave', handleSVGLeave);

  // Modal events
  modalClose.addEventListener('click', handleCloseModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      handleCloseModal();
    }
  });
  modalContent.addEventListener('click', (e) => e.stopPropagation());

  // Modal navigation
  modalPrev.addEventListener('click', handlePrevModal);
  modalNext.addEventListener('click', handleNextModal);
}

// Find block from element
function findBlockFromElement(element) {
  const parentG = element.closest('g[id^="g"]');
  if (parentG) {
    const gId = parentG.id;
    return blockData.find(block => block.id === gId) || null;
  }
  return null;
}

// Find line from element
function findLineFromElement(element) {
  const parentG = element.closest('g[id^="g"]');
  if (parentG) {
    const gId = parentG.id;
    return connectData.find(line => line.id === gId) || null;
  }
  return null;
}

// Handle SVG click
function handleSVGClick(event) {
  const target = event.target;
  const clickedElement = target.closest('g, path');

  if (clickedElement) {
    const block = findBlockFromElement(clickedElement);
    const line = findLineFromElement(clickedElement);

    if (line) {
      selectedLine = line;
      showModal = true;
      selectedBlock = null;
      currentDataIndex = 0;
      updateModal();
      showModalOverlay();
    } else if (block) {
      selectedBlock = block;
      currentQAIndex = 0;
      showModal = false;
      selectedLine = null;
      updateDetailsPanel();
      hideModalOverlay();
    } else {
      selectedBlock = null;
      showModal = false;
      updateDetailsPanel();
      hideModalOverlay();
    }
  }
}

// Handle SVG hover
function handleSVGHover(event) {
  const target = event.target;
  const hoveredElement = target.closest('g, path');

  if (hoveredElement) {
    const block = findBlockFromElement(hoveredElement);
    const line = findLineFromElement(hoveredElement);

    if (line) {
      hoveredLine = line;
      hoveredBlock = null;
    } else if (block) {
      hoveredBlock = block;
      hoveredLine = null;
    } else {
      hoveredBlock = null;
      hoveredLine = null;
    }
  }
  updateHighlightedLines();
}

// Handle SVG leave
function handleSVGLeave() {
  hoveredBlock = null;
  hoveredLine = null;
  updateHighlightedLines();
}

// Update highlighted lines
function updateHighlightedLines() {
  if (selectedBlock) {
    highlightedLines = selectedBlock.lines;
  } else if (hoveredBlock) {
    highlightedLines = hoveredBlock.lines;
  } else if (hoveredLine) {
    highlightedLines = [hoveredLine.id];
  } else {
    highlightedLines = [];
  }
  applySVGStyles();
}

// Apply SVG styles
function applySVGStyles() {
  let styleContent = '';

  // Highlight lines
  highlightedLines.forEach(lineId => {
    styleContent += `
            #${lineId} {
                stroke-width: 3px !important;
                stroke: #ff0000 !important;
                filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.5));
            }
        `;
  });

  // Add cursor styles for blocks
  blockData.forEach(block => {
    styleContent += `
            #${block.id} {
                cursor: pointer;
            }
        `;
  });

  // Add cursor styles for connections
  connectData.forEach(line => {
    styleContent += `
            #${line.id} {
                cursor: pointer;
            }
        `;
  });

  // Remove existing style tag and add new one
  const existingStyle = document.querySelector('#svg-dynamic-styles');
  if (existingStyle) {
    existingStyle.remove();
  }

  if (styleContent) {
    const styleTag = document.createElement('style');
    styleTag.id = 'svg-dynamic-styles';
    styleTag.textContent = styleContent;
    document.head.appendChild(styleTag);
  }
}

// Update details panel
function updateDetailsPanel() {
  if (selectedBlock) {
    svgViewerContent.classList.add('with-panel');
    detailsPanel.classList.add('expanded');
    renderDetailsPanel();
  } else {
    svgViewerContent.classList.remove('with-panel');
    detailsPanel.classList.remove('expanded');
    detailsPanel.innerHTML = '<div class="placeholder">Click on a block to view its details</div>';
  }
}

// Render details panel content
function renderDetailsPanel() {
  const content = `
        <div>
            <div class="tabs">
                <button class="tab-button ${activeTab === 'main' ? 'active' : ''}" onclick="switchTab('main')">
                    About
                </button>
                <button class="tab-button ${activeTab === 'contact' ? 'active' : ''}" onclick="switchTab('contact')">
                    Contact
                </button>
            </div>

            ${activeTab === 'main' ? renderMainTab() : renderContactTab()}
        </div>
    `;

  detailsPanel.innerHTML = content;
}

// Render main tab content
function renderMainTab() {
  const qa = selectedBlock.data.qa[currentQAIndex];
  const qaContent = qa ? `
        <div class="qa-navigation">
            <button class="qa-nav-button" onclick="handlePrevQA()" ${currentQAIndex === 0 ? 'disabled' : ''}>
                Previous
            </button>
            <span class="qa-counter">
                ${currentQAIndex + 1} / ${selectedBlock.data.qa.length}
            </span>
            <button class="qa-nav-button" onclick="handleNextQA()" ${currentQAIndex === selectedBlock.data.qa.length - 1 ? 'disabled' : ''}>
                Next
            </button>
        </div>
        <div class="qa-item">
            <div class="question">
                <strong>Question:</strong>
                <p>${qa.question}</p>
            </div>
            <div class="answer">
                <strong>Answer:</strong>
                <p>${renderAnswer(qa.answer)}</p>
            </div>
        </div>
    ` : '';

  return `
        <div class="tab-content">
            <h2 class="block-title">${selectedBlock.data.name}</h2>
            <p class="block-description">${selectedBlock.data.description}</p>
            <div class="qa-section">
                <h3 class="qa-title">Q&A</h3>
                ${qaContent}
            </div>
        </div>
    `;
}

// Render contact tab content
function renderContactTab() {
  return `
        <div class="tab-content">
            <h2 class="block-title">Contact Information</h2>
            <div class="contact-section">
                <div class="team-section">
                    <h3>Our Team</h3>
                    <img src="${selectedBlock.contact.team_lead_img}" alt="Team" class="team-image">
                    <p class="contact-info">${selectedBlock.contact.lead_name}</p>
                </div>
                <div class="contact-info-section">
                    <h3>Contact Us</h3>
                    <p class="contact-info">${selectedBlock.contact.contact_us}</p>
                </div>
                <div class="contact-info-section">
                    <h3>Team Page</h3>
                    <p class="contact-info">${selectedBlock.contact.team_page}</p>
                </div>
            </div>
        </div>
    `;
}

// Render answer segments
function renderAnswer(answer) {
  return answer.map(segment => {
    switch (segment.type) {
      case 'text':
        return segment.content;
      case 'bold':
        return `<strong>${segment.content}</strong>`;
      case 'break':
        return '<br>';
      default:
        return '';
    }
  }).join('');
}

// Switch tab
function switchTab(tab) {
  activeTab = tab;
  renderDetailsPanel();
}

// Handle previous QA
function handlePrevQA() {
  if (selectedBlock && currentQAIndex > 0) {
    currentQAIndex--;
    renderDetailsPanel();
  }
}

// Handle next QA
function handleNextQA() {
  if (selectedBlock && currentQAIndex < selectedBlock.data.qa.length - 1) {
    currentQAIndex++;
    renderDetailsPanel();
  }
}

// Show modal overlay
function showModalOverlay() {
  modalOverlay.classList.add('show');
}

// Hide modal overlay
function hideModalOverlay() {
  modalOverlay.classList.remove('show');
}

// Update modal content
function updateModal() {
  if (!selectedLine || !selectedLine.data || selectedLine.data.length === 0) {
    hideModalOverlay();
    return;
  }

  const currentData = selectedLine.data[currentDataIndex];

  modalTitle.textContent = currentData.name;
  modalSummary.textContent = currentData.summary;
  modalDesTitle.textContent = currentData.desTitle;
  modalDescription.textContent = currentData.description;

  // Update navigation
  if (selectedLine.data.length > 1) {
    modalNavigation.style.display = 'flex';
    modalCounter.textContent = `${currentDataIndex + 1} / ${selectedLine.data.length}`;
    modalPrev.disabled = currentDataIndex === 0;
    modalNext.disabled = currentDataIndex === selectedLine.data.length - 1;
  } else {
    modalNavigation.style.display = 'none';
  }
}

// Handle close modal
function handleCloseModal() {
  showModal = false;
  selectedLine = null;
  currentDataIndex = 0;
  hideModalOverlay();
}

// Handle previous modal
function handlePrevModal() {
  if (selectedLine && currentDataIndex > 0) {
    currentDataIndex--;
    updateModal();
  }
}

// Handle next modal
function handleNextModal() {
  if (selectedLine && currentDataIndex < selectedLine.data.length - 1) {
    currentDataIndex++;
    updateModal();
  }
}