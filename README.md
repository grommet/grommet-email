# grommet-email
Produce grommet styled HTML for use in email contexts.

[![Build Status](https://api.travis-ci.org/grommet/grommet-email.svg)](https://travis-ci.org/grommet/grommet-email) [![Dependency Status](https://david-dm.org/grommet/grommet-email.svg)](https://david-dm.org/grommet/grommet-email)  [![devDependency Status](https://david-dm.org/grommet/grommet-email/dev-status.svg)](https://david-dm.org/grommet/grommet-email#info=devDependencies) 

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
