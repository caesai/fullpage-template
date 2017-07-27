import React from 'react';

export default class MainSection extends React.Component {
  componentDidMount(){
    console.log('hey');
  }
  render(){
    return(
        <div className="section active section1">
          <p>Социально значимый объект, построенный для всеобщего оздоровления населения и культивирования здорового образа жизни.
          Губернаторская программа "100 бань Подмосковья".</p>
        </div>
    )
  }
}
