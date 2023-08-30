import './App.css'
import { Icon } from '@iconify/react';

const AboutUs = () => {
    return (<>
        <h3>Creators</h3>
        <br/><br/>
        <div class="toolbar-share-icon">
		<ul>
        <li><h4>Sourabh Deshmukh <a href="https://wa.me/8378887700"><Icon icon="bi:whatsapp"/></a>
        <a href="tel:8378887700"><Icon icon="material-symbols:phone-iphone" /></a>
        <a href="https://www.instagram.com/__adil___1/"><Icon icon="mdi:instagram" /></a>
        <a href="https://instagram.com/_sourabh_3445?igshid=MmIzYWVlNDQ5Yg=="><Icon icon="mdi:linkedin" /></a></h4>
        </li>
        
		<li><h4>Akanksha Parihar  <a href="https://wa.me/8989543149"><Icon icon="bi:whatsapp"/></a>
        <a href="tel:8989543149"><Icon icon="material-symbols:phone-iphone" /></a>
        <a href="https://instagram.com/akankshasp?igshid=OGQ5ZDc2ODk2ZA=="><Icon icon="mdi:instagram" /></a>
        <a href="https://www.linkedin.com/in/ankit-tiwari-3a0b0090/"><Icon icon="mdi:linkedin" /></a></h4></li>

        
		</ul>
		</div>
    </>);
}

export default AboutUs;