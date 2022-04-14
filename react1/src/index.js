import React from 'react';
import ReactDOM from 'react-dom';
import BMI from './BMI';
import Bank from './Bank';
import Biner from './Biner';
import Decimal from './Decimal';
import Harga from './Harga';
import Hexadecimal from './Hexadecimal';
import Octal from './Octal';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <BMI />
      <br></br>
      <hr />
      <br></br>
      <Bank />
      <hr />
      <Harga />
      <hr />
      <br></br>
      <Biner />
      <hr />
      <br></br>
      <Octal />
      <hr />
      <Decimal />
      <hr />
      <Hexadecimal />
      <hr />
      
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);