import React from 'react';
import MainSection from './MainSection';
import SecondSection from './SecondSection';
import $ from 'jquery';
import 'fullpage.js';
import '../scss/base.scss';

export default class Sections extends React.Component {
  componentDidMount(){
    $('#result').fullpage();
  }
  render(){
    return(
      <div id="result">
        <MainSection />
        <SecondSection />
      </div>
    )
  }
}
