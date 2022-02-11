import profileImage from './img/proImg.png';
import twitter from './img/twitter_icon.png'
import linkedin from './img/linkedin_icon.png'
import instagram from './img/instagram_icon.png'
import whatsapp from './img/whatsapp_icon.png'
import telegram from './img/telegram_icon.png'
import github from './img/github_icon.png'
import gmail from './img/gmail_icon.png'

const Banner = () => {
    return (
    <div className="text-white rounded bgBanner">
        <div className="">
            <div className='socialNetworkIcones'>
                <button><img src={twitter} alt="" /></button>
                <button><img src={instagram} alt="" /></button>
                <button><img src={whatsapp} alt="" /></button>
                <button><img src={telegram} alt="" /></button>
                <button><img src={github} alt="" /></button>
                <button><img src={linkedin} alt="" /></button>
                <button><img src={gmail} alt="" /></button>

            </div>
            <h1 className="display-4">I am Sadegh Golandam</h1>
            <p className="lead">i'm Sadeq,professional web developer with long time experience in this field. </p>
            <button className="btn btn-danger bg-dark rounded">My Portfolio</button>
         </div>
        <div className="bannerRightItem">
            <a href="">
           <img src={profileImage} alt="profile-image" />
            </a>
       </div>
        
    </div>);
}
 
export default Banner;