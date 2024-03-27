import React from 'react';
import './Footer.css'; 
import { AiOutlineFacebook } from "react-icons/ai"; 
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
    return (
        <div id="Mainfooter">
            <footer className="footer">
        <div className="footer-section">
        <h5>PRODUCT CATEGORIES</h5>
        <ul>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>DSLR Cameras</li>
            <li>Telivision</li>
            <li>Air Conditioners</li>
            <li>Refrigerators</li>
            <li>Kitchen Appliances</li>
            <li>Accessories</li>
            <li>Personal Care & Grooming</li>
        </ul>
        </div>
        <div className="footer-section">
        <h5>SITE INFO</h5>
        <ul>
            <li>About Reliance Digital</li>
            <li>resQ Services</li>
            <li>Site Map</li>
            <li>Gift Cards</li>
            <li>Corporate Enquires</li>
            <li>Contact Us</li>
        </ul>
        </div>
        <div className="footer-section">
        <h5>RESOURCE CENTRE</h5>
        <ul>
            <li>Product Reviews</li>
            <li>Buying Guides</li>
            <li>How Tos</li>
            <li>Featured Stories</li>
            <li>Events & Happenings</li>
            <li>Nearest Store</li>
        </ul>
        </div>
        <div className="footer-section">
        <h5> POLICIES</h5>
        <ul>
            <li>Terms of Use</li>
            <li>FAQs</li>
        </ul>
        </div>
    </footer>
    <div className="footer-social">
        <p><b>FOLLOW US</b></p>
        </div>
        <div id="icons">
        <a href="https://www.facebook.com/reliancedigital/" id="icon1"><AiOutlineFacebook /></a>
        <a href="https://twitter.com/reliancedigital" id="icon1"><AiFillTwitterSquare /></a>
        <a href="https://www.youtube.com/reliancedigital" id="icon1"><AiOutlineYoutube /></a>
        </div>
        
        <div className="disclaimer">
            <p>
                <u>Disclaimer</u>
            </p>
      <p>
        Product prices, offers and availability are subject to change from time to time. 
        All prices are inclusive of taxes. Product colours & images are only for illustration 
        and they may not exactly match with the actual product. Product specs are subject to 
        change & may vary from actual product. While every care is taken to avoid inaccuracies 
        in content, these are provided as is, without warranty of any kind.
      </p>
      <div className="copyright">
        © 2024 Reliance Digital. All Rights Reserved.
      </div>
    </div>
        </div>
    );
};

export default Footer;
