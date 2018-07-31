import React from 'react';
import RightPanel from './RightPanel.jsx'
import LeftPanel from './LeftPanel.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Review(props) {
  return (
    <div id="review-panels">
      <div id="left-panel">
        <LeftPanel info={props.info} />
      </div>
      <div id="right-panel">
        <div>
          <RightPanel info={props.info} />
        </div>
        <div id="feedback-question">Was this review ...?</div>
        <div id="feedback-bar">
          <button type="button" className="feedback-button">
            <FontAwesomeIcon icon="stroopwafel" /> Useful <span className="button-count">{props.info.useful}</span>
          </button>
          <button type="button" className="feedback-button">
            <FontAwesomeIcon icon="grin-squint-tears" /> Funny <span className="button-count">{props.info.funny}</span>
          </button>
          <button type="button" className="feedback-button">
            <FontAwesomeIcon icon="stroopwafel" /> Cool <span className="button-count">{props.info.cool}</span>
          </button>
          <div>
            <button type="button" id="flag-button"><FontAwesomeIcon id="flag" icon="flag" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
