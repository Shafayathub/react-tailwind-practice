import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
  const { category, price, benefits } = props.option;
  return (
    <div className="bg-white mt-3 p-4 rounded-lg">
      <h3 className="font-bold text-xl bg-indigo-300 rounded p-3">
        {category}
      </h3>
      <p>
        <span className="font-bold text-2xl">${price}</span>
        <span className="text-gray-500 font-bold">/mo</span>
      </p>
      <div>
        <h3 className="text-left text-lg font-semibold">Benefits:</h3>
        {benefits.map((benefit) => (
          <Benefit benefit={benefit}></Benefit>
        ))}
      </div>
      <button className="w-full flex justify-center items-center mt-4 p-2 text-xl font-bold bg-green-500 rounded-lg hover:bg-green-600 text-white">
        Subscribe <CheckIcon className="w-6 h-6"></CheckIcon>
      </button>
    </div>
  );
};

export default PricingOption;
