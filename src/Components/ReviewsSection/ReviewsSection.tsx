import React, { useEffect, useState } from 'react';
import './ReviewsSection.css';
import reviews from '../../assets/Reviews/reviews';
import SectionLineBreak from '../SectionLineBreak/SectionLineBreak';

const ReviewsSection = () => {
  const [reviewToShow, setReviewToShow] = useState(reviews[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * reviews.length);
      const randomReview = reviews[randomIndex];
      setReviewToShow(randomReview);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reviews-section-container">
      <SectionLineBreak heading="What our clients think" />
      <div className="reviews-container">
        <div className="review-container">{reviewToShow}</div>
      </div>
    </div>
  );
};

export default ReviewsSection;
