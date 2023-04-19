import React from 'react';

const Card = (props) => {
  const style = {
    backgroundColor: props.color,
  };

  return <div className="ml-4 rounded-lg p-4 bg-{props.color}-400" style={style}></div>;
};

export default Card;