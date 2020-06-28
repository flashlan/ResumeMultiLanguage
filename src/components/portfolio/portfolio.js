import React, { Component } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
    const { t, i18n, ready } = useTranslation(['translation', 'apresenta']);
    return (
      <React.Fragment>
      
	<section id="portfolio">
	  <div className="row">
	    <div className="twelve columns collapsed">
	    <h1>{t('apresenta:works.check')}</h1>
	      {/* portfolio-wrapper */}
	      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-01" title>
	            <img alt="" src="images/portfolio/siteflashflix.jpeg" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                  <h5>FLASHFLIX</h5>
	                  <p>{t('apresenta:works.preview1subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div> {/* item end */}
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-02" title>
	            <img alt="" src="images/portfolio/siteflash.png" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                  <h5>FLASH LANHOUSE</h5>
	                  <p>{t('apresenta:works.preview2subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div> {/* item end */}
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-03" title>
	            <img alt="" src="images/portfolio/sitemalletnegocios.jpeg" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                  <h5>MALLETNEGOCIOS.COM</h5>
	                  <p>{t('apresenta:works.preview3subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div> {/* item end */}
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-04" title>
	            <img alt="" src="images/portfolio/siteflash.jpeg" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                  <h5>SEARCH E UTILS FRONTPAGE</h5>
	                  <p>{t('apresenta:works.preview4subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div> {/* item end */}
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-05" title>
	              <img alt="" src="images/portfolio/helenacakes.jpg" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                  <h5>HELENA CAKES</h5>
	                  <p>{t('apresenta:works.preview5subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div> {/* item end */}
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-06" title>
	              <img alt="" src="images/portfolio/golenia.jpg" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                  <h5>GOLENIA INPLEMENTOS</h5>
	                  <p>{t('apresenta:works.preview6subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div> {/* item end */}
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-07" title>
	              <img alt="" src="images/portfolio/blender.jpg" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                <h5>{t('apresenta:works.preview7title')}</h5>
	                  <p>{t('apresenta:works.preview7subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div> {/* item end */}
	        <div className="columns portfolio-item">
	          <div className="item-wrap">
	            <a href="#modal-08" title>
	              <img alt="" src="images/portfolio/desenho.jpg" />
	              <div className="overlay">
	                <div className="portfolio-item-meta">
	                <h5>{t('apresenta:works.preview8title')}</h5>
	                  <p>{t('apresenta:works.preview8subtitle')}</p>
	                </div>
	              </div>
	              <div className="link-icon"><i className="icon-plus" /></div>
	            </a>
	          </div>
	        </div>  {/* item end */}
	      </div> {/* portfolio-wrapper end */}
	    </div> {/* twelve columns end */}
	    {/* Modal Popup
		      --------------------------------------------------------------- */}
	    <div id="modal-01" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/siteflashflixB.jpg" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup1title')}</h4>
	      <p>{t('apresenta:works.popup1subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup1tags')}</span>
	      </div>
	      <div className="link-box">
	      <a target="_blank" href="https://evertonkozloski.com/wordpress/">{t('apresenta:works.popupviewsite')}</a>
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-01 End */}
	    <div id="modal-02" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/siteflashlanhouse.jpeg" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup2title')}</h4>
	      <p>{t('apresenta:works.popup2subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup2tags')}</span>
	      </div>
	      <div className="link-box">
	      <a target="_blank" href="https://evertonkozloski.com/sites/flashlanhouse/">{t('apresenta:works.popupviewsite')}</a>
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-02 End */}
	    <div id="modal-03" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/sitemalletnegociosB.jpeg" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup3title')}</h4>
	      <p>{t('apresenta:works.popup3subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup3tags')}</span>
	      </div>
	      <div className="link-box">
	      <a target="_blank" href="https://evertonkozloski.com/sites/malletnegocios/">{t('apresenta:works.popupviewsite')}</a>
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-03 End */}
	    <div id="modal-04" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/sitebusca.png" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup4title')}</h4>
	      <p>{t('apresenta:works.popup4subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup4tags')}</span>
	      </div>
	      <div className="link-box">
	      <a target="_blank" href="https://evertonkozloski.com/sites/busca/">{t('apresenta:works.popupviewsite')}</a>
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-04 End */}
	    <div id="modal-05" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/helenacakes.jpg" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup5title')}</h4>
	      <p>{t('apresenta:works.popup5subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup5tags')}</span>
	      </div>
	      <div className="link-box">
	      <a target="_blank" href="https://www.behance.net/gallery/96267073/Helena-cakes-for-FB-Stories">{t('apresenta:works.popupdetails')}</a>
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-05 End */}
	    <div id="modal-06" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/golenia.jpg" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup6title')}</h4>
	      <p>{t('apresenta:works.popup6subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup6tags')}</span>
	      </div>
	      <div className="link-box">
	      <a target="_blank" href="https://www.facebook.com/flashlanmallet/photos/a.414159585349054/1339136936184643">{t('apresenta:works.popupdetails')}</a>
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-06 End */}
	    <div id="modal-07" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/blender.JPG" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup7title')}</h4>
	      <p>{t('apresenta:works.popup7subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup7tags')}</span>
	      </div>
	      <div className="link-box">
	     
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-07 End */}
	    <div id="modal-08" className="popup-modal mfp-hide">
	      <img className="scale-with-grid" src="images/portfolio/modals/DESENHO.jpg" alt="" />
	      <div className="description-box">
	      <h4>{t('apresenta:works.popup8title')}</h4>
	      <p>{t('apresenta:works.popup8subtitle')}</p>
	      <span className="categories"><i className="fa fa-tag" />{t('apresenta:works.popup8tags')}</span>
	      </div>
	      <div className="link-box">
	    
	      <a className="popup-modal-dismiss">{t('apresenta:works.popupclose')}</a>
	      </div>
	    </div>{/* modal-01 End */}
	  </div> {/* row End */}
	</section>
       
     
      </React.Fragment>
    );
  //}
}
export default Portfolio;
