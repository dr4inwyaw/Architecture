import './App.css';
import Nav from './components/Nav.jsx'
import React from 'react';
import ocom from './img/image1.png'
import contant from './img/service1.png';
import contant2 from './img/service2.png';
import contant3 from './img/service3.png';
import contant4 from './img/service4.png';

function App() {
  return (
     <div className="App">
      <Nav/>
      <header>
        <div class="container">
          <div class="header_content">
            <div class="left">
              <div class="left_inside">
                <h1>Архитектурный дизайн</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dictum et aliquet sit luctus mauris elementum interdum. Interdum id in id viverra metus, dignissim arcu nisl porttitor.</p>
                <a href="#" class="btn">Заказать дизайн</a>
              </div>
            </div>
          </div>
        </div>
    	</header>
      <main>
        <section class="about" id="about">
          <div class="container">
            <div class="about_content">
              <div class="left">
                <img src={ocom} alt=""/>
              </div>
              <div class="right">
                <h2>О компании</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices dictum et aliquet sit luctus mauris elementum interdum. Interdum id in id viverra metus, dignissim arcu nisl porttitor. Non, condimentum morbi porttitor nec mauris vitae consequat mi. Viverra non pellentesque id blandit gravida tristique. Non blandit rhoncus libero in diam cras sapien elementum tristique. At id viverra nullam tincidunt urna dis venenatis.</p>
                <p>At hendrerit pretium turpis leo sem quam in nibh egestas. Nulla vitae, mollis enim tincidunt vitae. Lorem sed morbi sem donec nulla. Risus nullam lacus, velit, amet volutpat. Blandit at risus proin adipiscing platea praesent. Quisque turpis purus est egestas nunc, facilisi. Ut in.</p>
              </div>
            </div>
          </div>
        </section>
      <section>
        <div class="our_services" id="our_services">
          <div class="container">
            <div class="our_servieces_content">
              <div class="left">
                <h2>Наши услуги</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod faucibus arcu fames eu nunc lectus semper convallis. Elementum pretium, risus nec in magna in. Interdum diam sit adipiscing arcu, ut condimentum tincidunt. Bibendum eu consequat risus justo fringilla pretium blandit bibendum. In orci, et risus ultrices urna lacus lectus condimentum. Maecenas sagittis, morbi porta nisl. Sed pellentesque donec ultrices nisi.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod faucibus arcu fames eu nunc lectus semper convallis.</p>
                <a href="" class="btn">Подробнее</a>
              </div>
              <div class="item">
                <img src={contant} alt=""/>
                <h3>Дизайн интерьера</h3>
              </div>
              <div class="item">
                <img src={contant2} alt=""/>
                <h3>Дизайн экстерьера</h3>
              </div>
              <div class="item">
                <img src={contant3} alt=""/>
                <h3>Организация пространства</h3>
              </div>
              <div class="item">
                <img src={contant4} alt=""/>
                <h3>Ландшафт</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
  	</main>
    <footer id="contact">
      <div class="container">
        <div class="top">
          <p class="tel">8 (812) 123-13-12</p>
          <p class="tel">8 (812) 123-45-67</p>
          <p class="place">191123, г. Санкт-Петербург, ул. Ленина, д. 48</p>
          <a href="#">Заказать дизайн</a>
        </div>
        <hr/>
        <div class="bottom">
          <div class="item ">
            <h3>Основные ссылки</h3>
            <a href="">Наши специалисты</a>
            <a href="">Онлайн консультация</a>
            <a href="">Экспресс-дизайн</a>
          </div>
          <div class="item">
            <h3>Проекты</h3>
            <a href="">Умный дом</a>
            <a href="">Сад спирей</a>
            <a href="">Дом-корабль</a>
            <a href="">Фонтан с дельфином</a>
          </div>
          <div class="item">
            <h3>Партнеры</h3>
            <a href="">Онлайн заказ стройматериалов</a>
            <a href="">ООО “Перестройка”</a>
            <a href="">3D-печать макетов</a>
          </div>
          <div class="item banner">
            <h3>Режим работы</h3>
            <p class="days"><span>Понедельник - Пятница</span> <span>11.00 - 21.00</span></p>
            <p class="days"><span>Суббота</span> <span>11.00  - 19.00</span></p>
            <hr/>
            <p>Воскресенье и дни Государственных праздников - выходной день</p>
          </div>
        </div>
      </div>
	  </footer>





    </div>
  );
}

export default App;