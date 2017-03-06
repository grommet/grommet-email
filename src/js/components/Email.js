// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

import React, { PropTypes } from 'react';
import { buildStyle, fontFace } from '../utils/Style';

const Email = (props) => {
  const style = buildStyle(['fontFamily', 'color', 'fontSize', 'lineHeight']);
  return (
    <html lang="en-US">
      <head>
        <style type="text/css">
          {fontFace}
        </style>
      </head>
      <body style={style}>
        {props.children}
      </body>
    </html>
  );
};

Email.propTypes = {
  children: PropTypes.any,
};

export default Email;
