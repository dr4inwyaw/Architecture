import logoimg from '../img/logo.png';
import placeimg from '../img/place.png';


function Nav(){
    return(
        <nav>
            <div class="container">
            <div class="nav_content">
                <div class="links">
                <img src={logoimg} alt="логотип"/>
                <ul class="menu">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#about">О компании</a></li>
                    <li><a href="#our_services">Наши услуги</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
                </div>
                <div class="contact">
                <a href="#">8 (812) 123-13-12</a>
                <a href="#">8 (812) 123-45-67</a>
                <a href="#" class="geo"><img src={placeimg} alt="иконка геолокации"/>ул. Ленина</a>
                </div>
            </div>
            </div>
        </nav>
    )
}



export default Nav