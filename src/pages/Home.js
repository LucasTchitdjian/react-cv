import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div className='home'>
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Lucas TCHITDJIAN</h1>
          <h2>Developpeur front-end</h2>
          <div className="pdf">
            <a href="./media/CV.pdf" target="_blank">Télecharger CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;