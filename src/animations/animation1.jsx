/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Spring } from 'react-spring';

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z';
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z';
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
  },
  shape: { width: 300, height: 300, willChange: 'transform' },
};

const Content = ({ toggle, color, scale, shape, start, end, stop, rotation }) => (
  <div style={{ ...styles.container, background: `linear-gradient(to bottom, ${start} ${stop}, ${end} 100%)` }}>
    <svg
      style={{ ...styles.shape, transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation})` }}
      version="1.1"
      viewBox="0 0 400 400"
    >
      <g style={{ cursor: 'pointer' }} fill={color} fillRule="evenodd" onClick={toggle}>
        <path id="path-1" d={shape} />
      </g>
    </svg>
  </div>
);

class Animation1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: true };
    this.toggleFunction = this.toggleFunction.bind(this);
  }

  toggleFunction() {
    this.setState(state => ({ toggle: !state.toggle }));
  }

  render() {
    const { toggle } = this.state;
    return (
      <Spring
        from={{ color: 'black' }}
        to={{
          color: toggle ? '#247BA0' : '#70C1B3',
          start: toggle ? '#B2DBBF' : '#B2DBBF',
          end: toggle ? '#247BA0' : '#F3FFBD',
          scale: toggle ? 0.6 : 1.5,
          shape: toggle ? TRIANGLE : RECTANGLE,
          stop: toggle ? '0%' : '50%',
          rotation: toggle ? '0deg' : '45deg',
        }}
        toggle={this.toggleFunction} // Additional props will be spread over the child
        children={Content} // Render prop
      />
    );
  }
}

export default Animation1;

