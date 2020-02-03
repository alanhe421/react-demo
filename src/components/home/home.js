import React from 'react';
import * as moment from 'moment';

const home = () => <h1>home-111{moment().toDate().toLocaleDateString(navigator.language, {
  timeStyle: 'short',
  dateStyle: 'long',
  timeZone: moment.defaultZone.name
})}</h1>;
export default home;
