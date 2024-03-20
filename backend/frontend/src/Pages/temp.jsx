import React from 'react';

const CardFlipper = () => {
  const handleCardClick = (event) => {
    event.currentTarget.classList.toggle('is-flipped');
  };

  return (
    <>
      <style jsx>{`
        .scene {
          display: inline-block;
          width: 200px;
          height: 260px;
          margin: 40px 0;
          perspective: 600px;
        }

        .card {
          position: relative;
          width: 100%;
          height: 100%;
          cursor: pointer;
          transform-style: preserve-3d;
          transform-origin: center right;
          transition: transform 1s;
        }

        .card.is-flipped {
          transform: translateX(-100%) rotateY(-180deg);
        }

        .card__face {
          position: absolute;
          width: 100%;
          height: 100%;
          line-height: 260px;
          text-align: center;
          font-weight: bold;
          font-size: 40px;
          backface-visibility: hidden;
        }

        .card__face--front {
          background: crimson;
        }

        .card__face--back {
          background: slateblue;
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="scene scene--card">
        <div className="card" onClick={handleCardClick}>
          <div className="card__face card__face--front">front</div>
          <div className="card__face card__face--back">back</div>
        </div>
      </div>
      
      <p className="text-center">Click card to flip.</p>
    </>
  );
};

export default CardFlipper;
