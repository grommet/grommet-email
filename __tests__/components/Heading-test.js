// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import Heading from '../../src/js/components/Heading';

describe('Heading', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Heading tag="h1">Testing</Heading>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
