import contant from '../img/service1.png';
import contant2 from '../img/service2.png';
import contant3 from '../img/service3.png';
import contant4 from '../img/service4.png';


function Our() {
    return ( 
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
    )
}

export default Our