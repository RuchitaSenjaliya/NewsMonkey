import React, { Component } from 'react';
import loading from '../components/loading.gif';

export default class Spinner extends Component {
  render() {
    return <div className='text-center'>
        <img className="my-3" src={loading} alt="sapinner" />
    </div>;
  }
}
