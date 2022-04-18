import React from 'react';

import classes from './Skills.module.css'

import website from '../../img/website_icon.png'
import processing from '../../img/processing_icon.png'


const Skills = (props) => {
    return ( 
        <div className={classes.skillsBody}>
        <h2 className={classes.skillsHeader}>Work Experience</h2>
        <div className={classes.skillsPart}>
            <div>
                <img className={classes.socialNetworkIconesImg} src={website} alt="" />
                <h2>Designed sites</h2>
            </div>
            <div onClick={props.clickOnOngoingSites}>
                <img className={classes.socialNetworkIconesImg} src={processing} alt="" />
                <h2>Ongoing sites</h2>
            </div>
            
        </div>
    </div>
     );
}
 
export default Skills;