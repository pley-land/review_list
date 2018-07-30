import React from 'react';

function LeftPanel(props) {
  return (
    <div>
      <div id="user-info">
        <div id="user-image">
          <img className="img-border" src="https://s3-us-west-1.amazonaws.com/review-list/user.png" alt="placeholder" />
        </div>
        <div id="user-description">
          <div className="user-name">
            {props.info.user}
          </div>
          <div className="user-location">
            {props.info.location}
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
  );
}

export default LeftPanel;
