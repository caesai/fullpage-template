import React from 'react';
import $ from 'jquery';
import 'fullpage.js';
import '../scss/base.scss';

import TopMenu from '../components/TopMenu';
import LeftMenu from '../components/TopMenu';
import Footer from '../components/Footer';

import MainSection from './MainSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';
import SixthSection from './SixthSection';
import SeventhSection from './SeventhSection';
import ContactSection from './ContactSection';


export default class Sections extends React.Component {
  componentDidMount(){
    $('#result').fullpage({
      navigation: true,
	    navigationPosition: 'left',
      anchors: ['01', '02', '03', '04', '05', '06', '07', '08'],
      navigationTooltips: ['01', '02', '03', '04', '05', '06', '07', '08'],
      menu: '#leftMenu',
      afterLoad: function(anchorLink, index){
        if ((index == '01')||(index == '05')||(index == '08')) {
          document.querySelector('.topMenu').classList.remove('white');
        } else {
          document.querySelector('.topMenu').classList.add('white');
        }
      }
    });
  }
  render(){
    return(
      <div>
        <TopMenu />
        <div id="result">
          <MainSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
          <FifthSection />
          <SixthSection />
          <SeventhSection />
          <ContactSection />
        </div>
        <Footer />
      </div>
    )
  }
}
