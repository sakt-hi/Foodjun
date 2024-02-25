import React from 'react';

const Shimmer = ({ type, numRows, itemsPerRow }) => {
  const renderCards = () => {
    switch (type) {
      case 'image':
        return Array.from({ length: numRows }, (_, index) => (
          <div key={index} className="shimmer-row">
            {[...Array(itemsPerRow)].map((_, cardIndex) => (
              <div key={cardIndex} className="shimmer-card shimmer-image-card">
                <div className="shimmer-image"></div>
                <div className="shimmer-text"></div>
                <div className="shimmer-text small"></div>
              </div>
            ))}
          </div>
        ));
    case 'res-list':
        return Array.from({ length: numRows }, (_, index) => (
            <div key={index} className="shimmer-row">
            {[...Array(itemsPerRow)].map((_, cardIndex) => (
                <div key={cardIndex} className="shimmer-card shimmer-image-card">
                <div className="shimmer-image"></div>
                <div className="shimmer-text"></div>
                <div className="shimmer-text small"></div>
                </div>
            ))}
            </div>
        ));
    case 'card-filter':
        return Array.from({ length: numRows }, (_, index) => (
            <div key={index} className="shimmer-row">
            {[...Array(itemsPerRow)].map((_, cardIndex) => (
                <div key={cardIndex} className="shimmer-card shimmer-image-card">
                <div className="shimmer-image"></div>
                <div className="shimmer-text"></div>
                <div className="shimmer-text small"></div>
                </div>
            ))}
            </div>
        ));
      case 'circle':
        return Array.from({ length: numRows }, (_, index) => (
          <div key={index} className="shimmer-row">
            {[...Array(itemsPerRow)].map((_, cardIndex) => (
              <div key={cardIndex} className="shimmer-card-circle">
                <div className="shimmer-circle"></div>
              </div>
            ))}
          </div>
        ));
    case 'suggestion-cards':
        return Array.from({ length: numRows }, (_, index) => (
            <div key={index} className="shimmer-row">
            {[...Array(itemsPerRow)].map((_, cardIndex) => (
                <div key={cardIndex} className="shimmer-tab-card">
                <div className="shimmer-tabs"></div>
                </div>
            ))}
            </div>
        ));
    case 'suggestion-btn':
        return Array.from({ length: numRows }, (_, index) => (
            <div key={index} className="shimmer-row">
            {[...Array(itemsPerRow)].map((_, cardIndex) => (
                <div key={cardIndex} className="shimmer-tab-card">
                <div className="shimmer-tabs"></div>
                </div>
            ))}
            </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="shimmer-container">
      {(type !== 'card-filter' && type !== 'suggestion-btn') && (
        <div className={`shimmer-title`}>
            <h3></h3>
        </div>
      )}
      {(type.includes('card-filter') || type.includes('res-list')) && <div className="filter-pane">
        <h3></h3>
        <h3></h3>
        <h3></h3>
      </div>}
      <div className="shimmer-cards">
        {renderCards()}
      </div>
    </div>
  );
};

export default Shimmer;
