import React from "react";
import PropTypes from "prop-types";

import Card from "../card";

import "./style.css";

export default function Board({ solved, disabled, dimension, cards, flipped, handleClick }) {
  return (
    <div className="board">
      {cards.map(card => (
        <Card
          key={card.id}
          type={card.type}
          id={card.id}
          width={150}
          height={150}
          flipped={flipped.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
          solved={solved.includes(card.id)}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  disabled: PropTypes.bool.isRequired,
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired

};
