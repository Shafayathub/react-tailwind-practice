import React from 'react';

const Link = (props) => {
  const { name, link } = props.route;
  return (
    <li className="hover:text-indigo-600">
      <a href={link}>{name}</a>
    </li>
  );
};

export default Link;
