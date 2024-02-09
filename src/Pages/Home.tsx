import React from 'react';
import {
  Footer,
  Header,
  OurServices,
  ReviewsSection,
  Intro,
} from '../Components';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <Intro />
      <OurServices />
      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Home;
