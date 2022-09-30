import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      category: 'Free',
      price: 0,
      benefits: [
        'Awesome features',
        'Unlimited Deals',
        'Crazy offers',
        'Fantastic Deals',
      ],
    },
    {
      id: 2,
      category: 'Regular',
      price: 9.99,
      benefits: [
        'Everything on free',
        'Unlimited Deals',
        'Crazy offers',
        'Fantastic Deals',
      ],
    },
    {
      id: 3,
      category: 'Premium',
      price: 19.99,
      benefits: [
        'Everything on regular',
        'Unlimited Deals',
        'Crazy offers',
        'Fantastic Deals',
      ],
    },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-8">
      <h1 className="text-3xl md:text-6xl">Best deal of the town</h1>
      <div className="grid md:grid-cols-3 gap-3">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
