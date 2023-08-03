import ocom from '../img/image1.png'

function About(){
    return (
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
    )
}

export default About
