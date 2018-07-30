import React from 'react';

function RightPanel(props) {
  return (
    <div>
      <div id="top-line">
        <div id="star-icon-bar">
          <img src={`https://s3-us-west-1.amazonaws.com/review-list/${props.rating}-star.svg`} alt="star-rating" />
        </div>
        <div id="review-date">
          7/29/2018
        </div>
      </div>
      <div id="review-text">
        Kinfolk vegan godard tacos. Squid vaporware umami, iPhone meh unicorn yr
        VHS cliche celiac tilde vegan brooklyn keytar fixie. La croix retro affogato cronut
        keytar coloring book microdosing cornhole whatever edison bulb. Intelligentsia
        brunch gochujang, XOXO DIY truffaut ethical.. Disrupt fanny pack etsy banh mi
        single-origin coffee tbh copper mug craft beer.
      </div>
    </div>
  );
}
export default RightPanel;
