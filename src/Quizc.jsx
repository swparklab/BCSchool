import React from 'react';
import Card from './Card';

const Quizc = () => {
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'Fuchsia'];

  return (
    <div className='flex justify-center items-center h-screen'>
      {colors.map((color, index) => (
        <Card key={index} color={color} />
      ))}
    </div>
  );
};

export default Quizc;