import React from 'react';
import NavMenu from './NavMenu';

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }
  render(){
    return(
      <div ref="topMenu" className="topMenu">
        <NavMenu isActive={this.state.isActive} />
        <div className="menu" onClick={ () => {
            this.setState({
              isActive: !this.state.isActive
            })
          }
        }>
            <div className="menu_toogler">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>Меню</p>
        </div>
        <div className="top_logo">
            <a href="#"></a>
        </div>
        <div className="top_contacts">
            <div className="top_contacts_inner">
                <a href="#"><i className="fa fa-vk"></i></a>
                <a href="#"><i className="fa fa-facebook-square"></i></a>
                <a href="#"><i className="fa fa-odnoklassniki"></i></a>
                <a href="#"><i className="fa fa fa-instagram"></i></a>
                <a href="tel:88007077615">8 (800) 707-76-15</a>
            </div>

        </div>
      </div>
    )
  }
}
