import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChalanges.module.css';

export function CompletedChalanges(){
    const {challengesCompleted} = useContext(ChallengesContext);
    return(
        <div className={styles.CompletedChalangesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}