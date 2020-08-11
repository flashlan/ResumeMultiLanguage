import React  from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
const Footer = () => {
    return (
      <React.Fragment>
	    <footer>
	      <div class="row">
	         <div class="twelve columns">
	            <ul class="social-links">
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/flashlan"><i className="fa fa-github" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/evertonkozloski"><i className="fa fa-facebook" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ev_kozloski"><i className="fa fa-twitter" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/everton-kozloski-53706028"><i className="fa fa-linkedin" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="skype:flash-lan?userinfo"><i className="fa fa-skype" /></a></li>
	            </ul>
	          </div>
	         <div id="go-top"><Link to="home" class="smoothscroll" title="Back to Top" ><i class="icon-up-open"></i></Link></div>	
	      </div>
	   </footer>
	   <script>
	   var scroll = new SmoothScroll('a[href*="#"]'{});
       </script>
      </React.Fragment>
    ); 
}
export default Footer;
