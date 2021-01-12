import React from 'react';

export class CardToc extends React.PureComponent {

  componentDidMount() {
    window.setTimeout(() => this.forceUpdate(), 2000);
  }

  gotoClick = (ele) => () => {
    ele.scrollIntoView();
  };

  render() {
    const items = Array.prototype.map.call(document.getElementsByClassName('card'), item => {
      return item.querySelector('h3');
    });
    return <div className='toc'>
      <ul>
        {
          items.map(item => <li>
            <a href={'http://localhost:3000/home#' + item.innerText} onClick={this.gotoClick(item)}>
              {
                item.innerText
              }
            </a>
          </li>)
        }
      </ul>
    </div>;
  }
}
