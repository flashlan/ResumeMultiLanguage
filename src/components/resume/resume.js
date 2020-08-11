//import i18n from 'i18next';
//import { initReactI18next } from 'react-i18next';
import React  from 'react';
import { useTranslation } from 'react-i18next';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../../fontawesome';
import { Link, animateScroll as scroll } from "react-scroll";
import * as SRD from "storm-react-diagrams"
require("storm-react-diagrams/dist/style.min.css")

library.add(fab);

const Resume = () => {
    const { t } = useTranslation(['translation', 'apresenta']);
    return (
      <React.Fragment>
	<section id="resume">
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
	  <div className="row skill">
	    <div className="three columns header-col">
	    <h1><span>{t('apresenta:resume.skills')}</span></h1>
	    </div>
	    <div className="nine columns main-col">
	    <p>{t('apresenta:resume.skillstext')}<Link activeClass="activate" to="myroadmap"  spy={true} class="cursors-main pointer" >{t('apresenta:resume.toroadmap')} </Link>{t('apresenta:resume.skillstext2')}
	      </p>
	    </div> {/* main-col end */}
	  </div> {/* End skills */}
	</section>
      </React.Fragment>
    );
}
export default Resume;
