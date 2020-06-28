import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import React, { Component, Suspense }  from 'react';
import { useTranslation } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../../fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";

import * as SRD from "storm-react-diagrams"
require("storm-react-diagrams/dist/style.min.css")

library.add(fab);



//export default class Resume extends Component {
 // render() {
const Resume = () => {
    const { t, i18n } = useTranslation(['translation', 'apresenta']);
    return (
      <React.Fragment>
	<section id="resume">
	  {/* Education
	----------------------------------------------- */}
	  <div className="row education">
	    <div className="three columns header-col">
	    <h1><span>{t('apresenta:resume.education')}</span></h1>
	   
	    </div>
	    <div className="nine columns main-col">
	      <div className="row item">
	        <div className="twelve columns">
	        <h3>{t('apresenta:resume.colegtitle')}</h3>
	        <p className="info">{t('apresenta:resume.colegsubtitle')} <span>•</span> <em className="date">{t('apresenta:resume.colegdate')}</em></p>
	          <p>
	          {t('apresenta:resume.colegtext')}
	          </p>
	        </div>
	      </div> {/* item end */}
	      <div className="row item">
	        <div className="twelve columns">
	        <h3>{t('apresenta:resume.faculdtitle')}</h3>
	        <p className="info">{t('apresenta:resume.faculdsubtitle')} <span>•</span> <em className="date">{t('apresenta:resume.faculddate')}</em></p>
	          <p>
	          {t('apresenta:resume.faculdtext')}
	          </p>
	        </div>
	      </div> {/* item end */}
	    </div> {/* main-col end */}
	  </div> {/* End Education */}
	  {/* Work
	----------------------------------------------- */}
	  <div className="row work">
	    <div className="three columns header-col">
	    <h1><span>{t('apresenta:resume.work')}</span></h1>
	    </div>
	    <div className="nine columns main-col">
	      <div className="row item">
	        <div className="twelve columns">
	        <h3>{t('apresenta:resume.work1title')}</h3>
	        <p className="info">{t('apresenta:resume.work1subtitle')} <span>•</span> <em className="date">{t('apresenta:resume.work1date')}</em></p>
	          <p>
	          {t('apresenta:resume.work1text')}
	          </p>
	        </div>
	      </div> {/* item end */}
	      <div className="row item">
	        <div className="twelve columns">
	        <h3>{t('apresenta:resume.work2title')}</h3>
	        <p className="info">{t('apresenta:resume.work2subtitle')} <span>•</span> <em className="date">{t('apresenta:resume.work2date')}</em></p>
	          <p>
	          {t('apresenta:resume.work2text')}
	          </p>
	        </div>
	      </div> {/* item end */}
	    </div> {/* main-col end */}
	  </div> {/* End Work */}
	  {/* Skills
	----------------------------------------------- */}
	  <div className="row skill">
	    <div className="three columns header-col">
	    <h1><span>{t('apresenta:resume.skills')}</span></h1>
	    </div>
	    <div className="nine columns main-col">
	    <p>{t('apresenta:resume.skillstext')}<Link activeClass="activate" to="myroadmap"  spy={true} class="cursors-main pointer" >{t('apresenta:resume.toroadmap')} </Link>{t('apresenta:resume.skillstext2')}
	      </p>
       {/*  <div className="softskills">
		      <ul className="backendicons">
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/html/default.asp"><i className="fab fa-html5 fa-border zoom" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/css/default.asp"><i className="fab fa-css3-alt fa-border zoom" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/"><i className="fab fa-react fa-border zoom" /></a></li>
		        
		       
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.python.org/"><i className="fab fa-python fa-border zoom" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://www.java.com/"><i className="fab fa-java fa-border zoom" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://www.tnmoc.org/"><i className="fab fa-cuttlefish fa-border zoom" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.php.net/"><i className="fab fa-php fa-border zoom" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/"><i className="fas fa-database fa-border zoom" /></a></li>
		        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linuxfoundation.org/"><i className="fab fa-linux fa-border zoom" /></a></li>
		      

		      </ul>
		  </div> */}
           
	    </div> {/* main-col end */}
	    
	    
	    
	    
	  </div> {/* End skills */}
	</section>
      </React.Fragment>
    );
  //}
}
export default Resume;
