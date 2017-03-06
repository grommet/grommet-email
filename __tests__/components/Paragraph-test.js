// (C) Copyright 2017 Hewlett Packard Enterprise Development LP

import React from 'react';
import renderer from 'react-test-renderer';

import Paragraph from '../../src/js/components/Paragraph';

describe('Paragraph', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Paragraph>Testing</Paragraph>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
