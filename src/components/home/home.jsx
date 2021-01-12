import React from 'react';
import Children from './children';
import Button from './button';
import { CardToc } from './card-toc';

class home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: Math.random() * 100
    };
  }


  componentDidMount() {

  }

  render() {
    console.log('render home', this.state && this.state.name);
    return <h1>home-111
      111113&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <CardToc />
      <div>
        <button onClick={() => {
          this.setState(() => ({
            name: Math.random() * 100
          }));
        }}>random name
        </button>
      </div>
      <Button />
      <div className={'draggable'}>
        I am draggable
        <Children children={1} />
      </div>
      <div className={'card'}>
        <h3>
          segment1
        </h3>
        <a href={'#segment1'}>
          #
        </a>
      </div>
      <div className={'card'}>
        <h3>
          segment2
        </h3>
        <a href={'#segment2'}>
          #
        </a>
      </div>
      <div className={'card'}>
        <h3>
          segment3
        </h3>
        <a href={'#segment3'}>
          #
        </a>
      </div>
      <div className={'card'}>
        <h3>
          segment4
        </h3>
        <a href={'#segment4'}>
          #
        </a>
      </div>
    </h1>;
  }
}

export default home;
