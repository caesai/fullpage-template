import React from 'react';

export default class LeftMenu extends React.Component {
  render() {
    return (
      <div id="leftMenu" className="leftMenu">
        <ul id="myMenu">
          <li data-menuanchor="01" class="active"><a href="#firstPage">First section</a></li>
          <li data-menuanchor="02"><a href="#secondPage">Second section</a></li>
          <li data-menuanchor="03"><a href="#thirdPage">Third section</a></li>
          <li data-menuanchor="04"><a href="#fourthPage">Fourth section</a></li>
          <li data-menuanchor="05"><a href="#fourthPage">Fourth section</a></li>
          <li data-menuanchor="06"><a href="#fourthPage">Fourth section</a></li>
        </ul>
      </div>
    )
  }
}
