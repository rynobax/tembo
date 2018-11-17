import * as React from 'react';
import Main from './Main';

import * as renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Main />).toJSON();
  expect(rendered).toBeTruthy();
});
