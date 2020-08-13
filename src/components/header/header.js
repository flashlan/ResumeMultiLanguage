import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t, i18n } = useTranslation(['translation', 'apresenta']);
	const changeLanguage = code => {
		i18n.changeLanguage(code);
	};
	return (
		<React.Fragment>
			<header id="home">
				<nav id="nav-wrap">
					<a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
					<a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
					<ul id="nav" className="nav-wrap">
						{/* <li className="current">*/}
						<li className="inactivate"><Link activeClass="activate" to="home" spy={true} class="cursors-main pointer" >{t('apresenta:top.home')}</Link></li>
						<li className="inactivate"><Link activeClass="activate" to="about" spy={true} class="cursors-main pointer" >{t('apresenta:top.about')}</Link></li>
						<li className="inactivate"><Link activeClass="activate" to="resume" spy={true} class="cursors-main pointer" >{t('apresenta:top.resume')}</Link></li>
						<li className="inactivate"><Link activeClass="activate" to="portfolio" spy={true} class="cursors-main pointer" >{t('apresenta:top.works')}</Link></li>
						<li className="inactivate"><Link activeClass="activate" to="myroadmap" spy={true} class="cursors-main pointer">{t('apresenta:top.myroadmap')}</Link></li>
						<li className="inactivate"><Link activeClass="activate" to="contact" spy={true} class="cursors-main pointer">{t('apresenta:top.contact')}</Link></li>
						<ReactFlagsSelect
							defaultCountry="US" countries={["US", "BR", "EE"]}
							customLabels={{ "US": "Eng", "BR": "Bra", "EE": "Est" }} onSelect={changeLanguage} showSelectedLabel={false}
							showOptionLabel={true} selectedSize={24} optionsSize={18} />
					</ul> {/* end #nav */}
				</nav> {/* end #nav-wrap */}
				<div className="row banner">
					<img className="myimg" src="images/everton2.jpg" alt="" />
					<div className="banner-text">
						<h2 className="responsive-headline">{t('apresenta:nome')}</h2>
						<h3>{t('apresenta:content.text1')}<span>{t('apresenta:content.text2')}</span>{t('apresenta:content.text3')} <span>{t('apresenta:content.text4')}</span> {t('apresenta:content.text5')} <span>{t('apresenta:content.text6')}</span> {t('apresenta:content.text7')} <a className="smoothscroll" href="#about">{t('apresenta:content.text8')} </a>
							{t('apresenta:content.text9')} <a className="inactivate"><Link activeClass="activate" to="about" spy={true} class="cursors-main pointer" >{t('apresenta:content.text10')}</Link></a>.</h3>
						<hr />
						<ul className="social">
							<li><a target="_blank" rel="noopener noreferrer" href="https://github.com/flashlan"><i className="fab fa-github zoom" /></a></li>
							<li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/evertonkozloski"><i className="fab fa-facebook zoom" /></a></li>
							<li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ev_kozloski"><i className="fab fa-twitter zoom" /></a></li>
							<li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/everton-kozloski-53706028"><i className="fab fa-linkedin zoom" /></a></li>
							<li><a target="_blank" rel="noopener noreferrer" href="skype:flash-lan?userinfo"><i className="fa fa-skype zoom" /></a></li>
						</ul>
					</div>
				</div>
				<p className="scrolldown">
					<Link className="smoothscroll" to="about" class="cursors-main pointer"><i className="icon-down-circle" /></Link>
				</p>
				<p className="scrolldown">
					<Link className="smothscroll" to="about"><i className="icon-down-circle" /></Link>
				</p>
				<div classname="home">content</div>
			</header>
		</React.Fragment>
	);
}
export default Header;
