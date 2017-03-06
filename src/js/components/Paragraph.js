// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';
import Style, { unit, halfUnit } from '../utils/Style';

const Paragraph = (props) => {
  const { children } = props;
  const style = {
    color: Style.color,
    margin: `${unit}px ${halfUnit}px`,
  };
  return (
    <p style={style}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.any,
};

export default Paragraph;
