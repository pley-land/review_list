import React from 'react';
import RightPanel from './RightPanel.jsx'

function Review() {
  return (
    <div id="review-panels">
      <div id="left-panel">
        <div id="user-info">
          <div id="user-image">
            <img className="img-border" src="https://s3-us-west-1.amazonaws.com/review-list/user.png" alt="placeholder" />
          </div>
          <div id="user-description">
            <div className="user-name">
              Enji K.
            </div>
            <div className="user-location">
              San Francisco, CA
            </div>
            <div className="friends-count">
              <img className="icon" src="https://vectr.com/enjik/welcome.svg?width=60&height=60&select=d6Uoaj0XB5" alt="friends-icon" height="18px" weight="18px" />
              <strong>{Math.ceil(Math.random() * 600)}</strong> friends
            </div>
            <div className="reviews-count">
              <img className="icon" src="https://vectr.com/enjik/welcome.svg?width=50&height=50&select=oSQ0j6b6mpage0" alt="star-icon" height="18px" weight="18px" />
              <strong>{Math.ceil(Math.random() * 40)}</strong> reviews
            </div>
            <div className="photos-count">
              <img className="icon" src="https://vectr.com/enjik/welcome.svg?width=50&height=50&select=b20RcNa1sk" alt="camera-icon" height="18px" weight="18px" />
              <strong>{Math.floor(Math.random() * 20)}</strong> photos
            </div>
          </div>
        </div>
        <div id="hover-info">
          Placeholder Hover Info
        </div>
      </div>
      <div id="right-panel">
        <div>
          <RightPanel rating={3} />
        </div>
      </div>
    </div>
  );
}

export default Review;
