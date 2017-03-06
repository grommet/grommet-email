// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import Email from '../../src/js/components/Email';

describe('Email', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Email>Testing</Email>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
