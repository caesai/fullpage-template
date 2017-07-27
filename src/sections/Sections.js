import React from 'react';
import $ from 'jquery';
import 'fullpage.js';
import '../scss/base.scss';

import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';

import MainSection from './MainSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';


export default class Sections extends React.Component {
  componentDidMount(){
    $('#result').fullpage();
  }
  render(){
    return(
      <div>
        <TopMenu />
        <div id="result">
          <MainSection />
          <SecondSection />
          <ThirdSection />
        </div>
        <Footer />
      </div>
    )
  }
}
