import React from 'react';
import { Menu, Item, Separator, Submenu, MenuProvider, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';


const MENU_ID = 'blahblah';


const MenuTest = () => {

  const { show } = useContextMenu({
    id: MENU_ID
  });

  function handleContextMenu(event) {
    event.preventDefault();
    show(event, {
      props: {
        key: 'value'
      }
    });
  }

  const handleItemClick = ({ event, props }) => console.log(event, props);

  return <div>
    <p data-id='1' onContextMenu={handleContextMenu}>lorem ipsum blabladhasi blaghs blah</p>
    <Menu id={MENU_ID}>
      <Item onClick={handleItemClick}>Item 1</Item>
      <Item onClick={handleItemClick}>Item 2</Item>
      <Separator />
      <Item disabled>Disabled</Item>
      <Separator />
      <Submenu label='Foobar'>
        <Item onClick={handleItemClick}>Sub Item 1</Item>
        <Item onClick={handleItemClick}>Sub Item 2</Item>
      </Submenu>
    </Menu>
  </div>;
};

export default MenuTest;
