import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile () {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://lh3.google.com/u/1/ogw/ADGmqu-lCeDDpBOu3M9FBUm8BewXGnYZuOdcvqoOAqXd=s83-c-mo" alt="Samile Leite"/>
            <div>
                <strong>Samile Leite</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}