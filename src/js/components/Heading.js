// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';
import { unit, halfUnit, fontWeight } from '../utils/Style';

const Heading = (props) => {
  const { tag: Tag, children } = props;
  const style = {
    fontWeight: fontWeight(Tag),
    margin: `${unit}px ${halfUnit}px`,
  };
  return (
    <Tag style={style}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
};

export default Heading;
