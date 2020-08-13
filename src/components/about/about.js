import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
	const { t } = useTranslation(['translation', 'apresenta']);
	return (
		<React.Fragment>
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic zoom" src="images/everton2.jpg" alt="" />
					</div>
					<div className="nine columns main-col minizoom">
						<h2>{t('apresenta:about.title')}</h2>
						<p>{t('apresenta:about.aboutme')}
						</p>
						<div className="row">
							<div className="columns contact-details">
								<h2>{t('apresenta:about.contactdet')}</h2>
								<p className="address">
									<span>Everton Luiz Kozloski</span><br />
									<span>13 BR 153<br />
                                    Mallet, PR 84570-000 BR
                                    </span><br />
									<span>+55(42)98833-3305</span><br />
									<span>datapoint.net.br</span>
								</p>
							</div>
							<div className="columns download">
								<p>
									<a href="https://1drv.ms/b/s!AihFY1_LB30I1Xn7n65Ul3DkqM93?e=qSwisq" className="button"><i className="fa fa-download" />{t('apresenta:about.btnDownload')}</a>
								</p>
							</div>
						</div> {/* end row */}
					</div> {/* end .main-col */}

				</div>
			</section>
			{/*
<div classname="row banner">
  <div classname="banner-text">
    <h1 classname="responsive-headline">I am {'{'}resumeData.name{'}'}.</h1>
    <h3>I am a {'{'}resumeData.role{'}'}.{'{'}resumeData.roleDescription{'}'}
    </h3>
    <hr/>
  </div></div> */}
		</React.Fragment>
	);
}
export default About;
