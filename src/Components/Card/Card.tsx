import React from 'react';
import './Card.css';

interface CardProps {
  title: string | undefined;
  text: number | string | undefined;
}

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <b className="card-title">{props.title}: </b>
      {props.text}
    </div>
  );
};

export default Card;
