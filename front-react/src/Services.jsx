import github from './img/github_icon.png'
import wordpress from './img/wordpress_icon.png'
import photoshop from './img/_adobe_icon.png'

const Services = () => {
    return ( 
        <div className="servicesBody">
            <h2 className="servicesHeader">Services</h2>
            <div className="servicesPart">
                <div>
                    <img className='socialNetworkIconesImg' src={github} alt="" />
                    <h2>Web Development</h2>
                </div>
                <div>
                    <img className='socialNetworkIconesImg' src={wordpress} alt="" />
                    <h2>Wordpress sites</h2>
                </div>
                <div>
                    <img className='socialNetworkIconesImg' src={photoshop} alt="" />
                    <h2>Image Editing</h2>
                </div>
                
            </div>
        </div>
     );
}
 
export default Services;