import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review.jsx';

function App() {
  return (
    <div>
      <div id="header">
        Recommended Reviews
        <span id="header-restaurant">
          for
        </span>
      </div>
      <div id="static-bar">
        <img src="https://vectr.com/enjik/welcome.svg?width=629&height=115.17&select=b1eIi7YTQF&quality=1" alt="static-review-search" />
      </div>
      <Review />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
