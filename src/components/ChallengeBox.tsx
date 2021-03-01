import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';
import { Countdown } from './Countdown';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallege } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallege();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();


    }

    return (
        <div className={styles.ChallengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.ChallengeActive}>

                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.ChallengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                </button>

                        <button
                            type="button"
                            className={styles.ChallengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                </button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.ChallengeNotActive}>
                        <strong>Finalize um ciclo para receber  um desafio</strong>
                        <img src="icons/level-up.svg" alt="level-icon" />
                        Avance de nível completando desafios
                    </div>

                )}
        </div>
    )
}