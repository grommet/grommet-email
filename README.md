# grommet-email
Produce grommet styled HTML for use in email contexts.

[![Build Status](https://api.travis-ci.org/grommet/grommet-email.svg)](https://travis-ci.org/grommet/grommet-email)

## Install

```
npm install --save grommet-email
```

## Use

```
import Email from 'grommet-email/components/Email';
import Heading from 'grommet-email/components/Heading';
import Paragraph from 'grommet-email/components/Paragraph';

const MyRenderer = () => (
  <Email>
    <Heading tag="h1">My Heading</Heading>
    <Paragraph>My paragraph.</Paragraph>
  </Email>
);
```
