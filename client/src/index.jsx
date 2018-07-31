import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review.jsx';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faFlag, faGrinSquintTears } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faFlag, faGrinSquintTears);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    this.formatDate = this.formatDate.bind(this);
  }

  componentDidMount() {
    const that = this;
    console.log(that.props.restaurantId.toString());
    axios.get(`/${that.props.restaurantId.toString()}/reviews`)
      .then((response) => {
        console.log(response);
        const newReviews = response.data.map(review => (
          {
            id: review.id,
            rating: review.rating,
            cool: review.cool,
            funny: review.funny,
            useful: review.useful,
            review_date: that.formatDate(review.review_date),
            review_text: review.review_text,
            user_image: review.profile_picture,
            user: review.username,
            location: review.location
          }
        ));
        that.setState({ reviews: newReviews });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  formatDate(rawDate) {
    let formatted = '';
    formatted = parseInt(rawDate.slice(5, 7)).toString() + '/' + parseInt(rawDate.slice(8, 10)).toString() + '/' + rawDate.slice(0, 4);
    return formatted;
  }

  render() {
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
        <div id="all-reviews">
          {this.state.reviews.map(review => <Review key={review.id} info={review} />)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App restaurantId={4} />, document.getElementById('app'));
