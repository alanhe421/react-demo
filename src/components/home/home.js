import React from 'react';
import * as moment from 'moment';
import 'moment-timezone';

moment.tz.setDefault('Africa/Abidjan');

const home = () => <h1>home-111{moment().format('MM/DD/YYYY HH:mm:ss')}</h1>;
export default home;
