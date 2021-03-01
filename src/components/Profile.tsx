import { useContext } from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css'
export function Profile(){
    const { level } = useContext(ChallengesContext);

    return(
       <div className={styles.profileContainer}>
           <img src="user.svg" alt="profile-photo" />
           <div>
               <strong>Angry Hacker Cat</strong>
               <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
           </div>
       </div> 
    );
}