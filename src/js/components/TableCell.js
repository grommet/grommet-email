// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';
import { colors, halfUnit } from '../utils/Style';

const ALIGNS = {
  start: 'left',
  center: 'center',
  end: 'right',
};

const TableCell = (props) => {
  const { align, children, header } = props;
  let Tag;
  const style = {
    padding: `${halfUnit}px`,
    textAlign: ALIGNS[align],
  };
  if (header) {
    Tag = 'th';
    style.color = colors.normal;
    style.fontWeight = 100;
    style.fontSize = '1.2em';
  } else {
    Tag = 'td';
    style.color = colors.value;
  }
  return (
    <Tag style={style}>
      {children}
    </Tag>
  );
};

TableCell.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.any,
  header: PropTypes.bool,
};

TableCell.defaultProps = {
  align: 'center',
  header: false,
};

export default TableCell;
