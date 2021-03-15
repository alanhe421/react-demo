import React, { useState } from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => {
  const [state, setState] = useState({ tips: [] });
  const sayHello = (tip) => {
    setState({
      tips: [tip]
    });
  };
  return (<div>
    <span>Show: </span>
    {JSON.stringify(state)}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    <div>
      <button onClick={() => sayHello('hello')}>click me</button>
    </div>
  </div>);
};
export default Footer;
