//import i18n from 'i18next';
//import { initReactI18next } from 'react-i18next';
import React, { useState }  from 'react';
import { useTranslation } from 'react-i18next';
import { Axios, db } from '../../firebase/firebaseConfig'
//export default class Contactus extends Component {
//  render() {
const Contactus = () => {
    const { t } = useTranslation(['translation', 'apresenta']);
    const [formData, setFormData] = useState({})
    
    const updateInput = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
        'https://us-central1-evertonkozloskisite.cloudfunctions.net/submit ',
      formData
    )
      .then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
    return (
      <React.Fragment>
       {
	<section id="contact">
	  <div className="row section-head">
	    <div className="two columns header-col">
	      <h1><span>Get In Touch.</span></h1>
	    </div>
	    
	    <div className="ten columns">
	    <p className="lead">{t('apresenta:contact.ctext')}
	      </p>
	    </div>
	    
	  </div>
	  <div className="row">
	  
	  
	    <div className="eight columns">
	    
	    
	    <>
	    <form action  onSubmit={handleSubmit}id="Contactus" name="Contactus">
	    <fieldset>
            <div>
                <label htmlFor="contactName">{t('apresenta:contact.cname')} <span className="required">*</span></label>
                <input type="text" name="name" placeholder={t('apresenta:contact.cname')} onChange={updateInput}  value={formData.name || ''} />
            </div>
            <div>
                <label htmlFor="contactEmail">{t('apresenta:contact.cemail')} <span className="required">*</span></label>
                <input  type="email"  name="email"  placeholder={t('apresenta:contact.cemail')}  onChange={updateInput}  value={formData.email || ''} />
            </div>
        
            <div>
                <label htmlFor="contactMessage">{t('apresenta:contact.cmessage')} <span className="required">*</span></label>
                <textarea  type="text"  name="message" placeholder={t('apresenta:contact.cmessage')}  onChange={updateInput}   value={formData.message || ''}></textarea>
            </div>
            <div>
                <button className="submit" type="submit">{t('apresenta:contact.csubmit')}</button>
                <span id="image-loader">
                <img alt="" src="images/loader.gif" />
                </span>
            </div>
        </fieldset>
        </form>
        </>
	    
	      {/* form *
	      <form action method="post" id="Contactus" name="Contactus">
	        <fieldset>
	          <div>
	            <label htmlFor="contactName">{t('apresenta:contact.cname')} <span className="required">*</span></label>
	            <input type="text" defaultValue size={35} id="contactName" name="contactName" />
	          </div>
	          <div>
	          
	            <input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
	          </div>
	          <div>
	          <label htmlFor="contactSubject">{t('apresenta:contact.csubject')} </label>
	            <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
	          </div>
	          <div>
	          <label htmlFor="contactMessage">{t('apresenta:contact.cmessage')} <span className="required">*</span></label>
	            <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
	          </div>
	          <div>
	          <button className="submit">{t('apresenta:contact.csubmit')}</button>
	            <span id="image-loader">
	              <img alt="" src="images/loader.gif" />
	            </span>
	          </div>
	        </fieldset>
	      </form>  Form End */}
	      
	      {/* contact-warning */}
	      <div id="message-warning"> Error boy</div>
	      {/* contact-success */}
	      <div id="message-success">
	        <i className="fa fa-check" />Your message was sent, thank you!<br />
	      </div>
	    </div>
	    
	    
	    <aside className="four columns footer-widgets">
	      <div className="widget widget_contact">
	      <h4>{t('apresenta:contact.caddress')}</h4>
	        <p className="address">
	          Everton Luiz kozloski<br />
	          13 Miguel Grenteski <br />
	          Mallet, PR 84570-000 BR<br />
	          <span>+55 (42) 9 8833 3305</span>
	        </p>
	      </div>
	      {/*}
	      <div className="widget widget_tweets">
	        <h4 className="widget-title">Latest Tweets</h4>
	        <ul id="twitter">
	          <li>
	            <span>
	              This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
	              Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
	              <a href="#">http://t.co/CGIrdxIlI3</a>
	            </span>
	            <b><a href="#">2 Days Ago</a></b>
	          </li>
	          <li>
	            <span>
	              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
	              eaque ipsa quae ab illo inventore veritatis et quasi
	              <a href="#">http://t.co/CGIrdxIlI3</a>
	            </span>
	            <b><a href="#">3 Days Ago</a></b>
	          </li>
	        </ul>
	      </div>*/}
	    </aside>
	  </div>
	</section>
       }
      
      </React.Fragment>
    );
  //}
}
export default Contactus;
