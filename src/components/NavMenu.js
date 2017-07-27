import React from 'react';

export default class NavMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div ref='navMenu' className={(this.props.isActive ? 'active' : '') + ' navMenu'}>
        <div className="closeMenu">
          <a className="closeBtn" href="#" onClick={(e) => {
            e.preventDefault();
            this.refs.navMenu.classList.toggle('active');
          }}>
          <i className="fa fa-times-circle-o" aria-hidden="true"></i>
            Закрыть
          </a>
        </div>

        <ul>
          <li><a href="#01">Главная</a></li>
          <li><a href="#02">Первый мужской разряд</a></li>
          <li><a href="#03">Галерея</a></li>
          <li><a href="#04">Спа-центр</a></li>
          <li><a href="#05">Сувениры</a></li>
          <li><a href="#06">Информация</a></li>
          <li><a href="#08">Контакты</a></li>
        </ul>
      </div>
    )
  }
}
