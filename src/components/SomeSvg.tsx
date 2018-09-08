import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import logoSrc from '../logo.svg';

interface Props extends RouteComponentProps {}

const SomeSvg: React.SFC<Props> = () => (
  <>
    <h4>Some svg</h4>
    <img src={logoSrc} alt="Hi from SVG" />
  </>
);

export default SomeSvg;
