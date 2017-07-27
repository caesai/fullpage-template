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
          <li>Главная</li>
          <li>Первый мужской разряд</li>
          <li>Галерея</li>
          <li>Спа-центр</li>
          <li>Сувениры</li>
          <li>Информация</li>
          <li>Контакты</li>
        </ul>
      </div>
    )
  }
}
