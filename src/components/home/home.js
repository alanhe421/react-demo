import React from 'react';
import * as moment from 'moment';

const home = () => <h1>home-111{moment().toDate().toLocaleDateString(navigator.language, {
  timeStyle: 'short',
  dateStyle: 'long',
  timeZone: moment.defaultZone.name
})}
111113&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;33
</h1>;
export default home;
