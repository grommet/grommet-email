// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

export const unit = 24;
export const halfUnit = unit / 2;
export const doubleUnit = unit * 2;

const colors = {
  normal: '#666',
  value: '#333',
};

const style = {
  // layout
  lineHeight: unit,
  // color
  backgroundColor: '#fff',
  color: colors.normal,
  // font
  fontFamily: 'Metric, Arial, sans-serif',
  fontFace: `
@font-face {
  font-family: "Metric";
  src: local('Metric'),
    url("https://hpefonts.s3.amazonaws.com/web/MetricHPE-Web-Regular.woff") format('woff');
}`,
};

export default style;

export const buildStyle = (properties) => {
  const result = {};
  properties.forEach((property) => {
    result[property] = style[property];
  });
  return result;
};

export const fontSize = () => 'normal';
export const fontWeight = (tag) => {
  switch (tag) {
    case 'h1':
    case 'h2':
    case 'h3':
      return 100;
    default:
      return 400;
  }
};
