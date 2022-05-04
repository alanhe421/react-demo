import React, {useState} from 'react';
import {Item, Menu, useContextMenu} from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';


const MENU_ID = 'blahblah';


const MenuTest = () => {

  const {show} = useContextMenu({
    id: MENU_ID
  });

  const [hoveredId, setHoveredId] = useState(null);

  function handleContextMenu(event) {
    event.preventDefault();
    console.log(event);
    setHoveredId(event.target.dataset.id);
    show(event, {
      props: {
        key: event.target.dataset.id
      }
    });
  }

  const handleItemClick = ({event, props}) => {
    console.log(props);
  };

  return <div>
    <p data-id='1' onContextMenu={handleContextMenu}>node1</p>
    <p data-id='2' onContextMenu={handleContextMenu}>node2</p>
    <Menu id={MENU_ID}>
      <div>
        selectedId:{hoveredId}
      </div>
      <Item onClick={handleItemClick}>上传</Item>
      <Item onClick={handleItemClick}>下载</Item>
    </Menu>
  </div>;
};

export default MenuTest;
