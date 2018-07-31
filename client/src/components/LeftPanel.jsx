import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        <div id="hover-icons">
          <img src="https://vectr.com/enjik/welcome.svg?width=18&height=18&select=gCgJVNLmc" alt="share" id="share" />
          <img src="https://vectr.com/enjik/welcome.svg?width=18&height=18&select=dxGp24vVh" alt="embed" id="embed" />
          <img src="https://vectr.com/enjik/welcome.svg?width=18&height=18&select=auzovl51h" alt="compliment" id="compliment" />
          <img src="https://vectr.com/enjik/welcome.svg?width=18&height=18&select=h2qp8eeXrj" alt="send" id="send" />
          <img src="https://vectr.com/enjik/welcome.svg?width=18&height=18&select=dytxXoiCo" alt="follow" id="follow" />
        </div>
        <div id="hover-labels">
          <div className="share-review"> Share Review </div>
          <div className="embed-review"> Embed Review </div>
          <div className="compliment"> Compliment </div>
          <div className="send-message"> Send Message </div>
          <div className="follow-user"> Follow {props.info.user} </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
