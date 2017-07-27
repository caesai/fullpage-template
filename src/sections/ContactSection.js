import React from 'react';

export default class ContactSection extends React.Component {
  render() {
    return(
      <div className="section contactSection">
        <div className="title">
          <p>Подольск, улица Генерала Смирнова, дом 1</p>
          <p>Часы работы: 8:00 - 23:00</p>
          <p>8 (800) 707-76-15</p>
          <p>info@domain.com</p>
          <p><button className="callback-btn">ОБРАТНАЯ СВЯЗЬ</button></p>
          <div id="g_map"></div>
        </div>
      </div>
    )
  }
}
