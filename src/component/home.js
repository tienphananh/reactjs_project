import './header.css'
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <div class="body-web">
                <div class="body-web-img">
                    <img src="/asset/z5516048378814_c672a717c467636cf9adf3bd6a2c2264.jpg" alt="" />
                </div>
                <div class="body-web-des">
                    <span class="des-1">‘Denim’</span>
                    <span class="des-2">GHỆ ĐẸP</span>
                    <span class="des-3">Stunt on ‘em with the Tatum 2 ‘Denim’. This special edition pairs old-school denim-inspired accents with <br></br> court-ready tech designed to help you with energy return.</span>
                </div>
                <div className="button-shop">
                    <Link to="/productList"><button class="button-des">Shop</button></Link>
                </div>
                </div>
            <div class="footer">
                <div class="footer-des">
                    <div class="footer-des-1">
                        <div class="des-1-1">
                        <span>Resources</span></div>
                        <a href=""><p>Find A Store</p></a>
                        <a href=""><p>Become A Member</p></a>
                        <a href=""><p>Send Us Feedback</p></a>
                        <a href=""><p>Find A Store</p></a>
                        <a href=""><p>Become A Member</p></a>
                        <a href=""><p>Send Us Feedback</p></a>
                    
                    </div>
                    <div class="footer-des-1">
                        <div class="des-1-1">
                        <span>Help</span></div>
                        <a href=""><p>Get Help</p></a>
                        <a href=""><p>Order Status</p></a>
                        <a href=""><p>Delivery</p></a>
                        <a href=""><p>Returns</p></a>
                        <a href=""><p>Payment Options</p></a>
                        <a href=""><p>Contact Us</p></a>
                    </div>
                    
                    <div class="footer-des-1">
                        <div class="des-1-1">
                        <span>About Nike</span></div>
                        <a href=""><p>About Nike</p></a>
                        <a href=""><p>News</p></a>
                        <a href=""><p>Careers</p></a>
                        <a href=""><p>Investors</p></a>
                        <a href=""><p>Sustainability</p></a>
                    
                </div>
                </div>
                <div class="footer-vietnam">
                    <i class="fa-solid fa-earth-americas"></i>
                    <a href=""><span>Vietnam</span></a>
                </div>
            </div>
            <div class="last-footer">
                <div class="last-1">
                    <span>© 2024 Nike, Inc. All rights reserved</span>
                </div>
                <a href=""><p>Guides</p></a>
                <a href=""><p>Terms of Sale</p></a>
                <a href=""><p>Terms of Use</p></a>
                <a href=""><p>Nike Privacy Policy</p></a>
            </div>
        </>
    )
}

export default HomePage