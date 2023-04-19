import axios from 'axios';
import React, { useState } from 'react';

const Quizd = () => {
  const [responseData, setResponseData] = useState('');

  const handleButtonClick = () => {
    const url = 'https://green-bush-5824.fly.dev/';
    axios.get(url)
      .then(response => {
        const message = response.data.message;
        setResponseData(message);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClearClick = () => {
    setResponseData('');
  };

  return (
    <div className="flex justify-center items-center h-screen">
        <div className="ml-4">
            <button className='text-2xl font-bold bg-blue-100 rounded z-5' onClick={handleButtonClick}>요청하기</button>
            <button className='text-2xl font-bold ml-16 bg-green-100 rounded z-5' onClick={handleClearClick}>지우기</button>
            <p className='pt-10 text-3xl font-bold z-10'>{responseData}</p>
        </div>
    </div>
  );
};

export default Quizd;