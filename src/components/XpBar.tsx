import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/XpBar.module.css";
export function XpBar() {

    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel; 
    return (
        <header className={styles.xpBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}