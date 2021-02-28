import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { ProfileModal } from './ProfileModal';
import styles from '../styles/components/Profile.module.css';
import profile from '../../profiledata.json';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src={profile.avatarImg}
        alt="avatar image" />
      <div>
        <strong>{profile.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}</p>
      </div>
      <div>
        <button className={styles.profileButton}
          onClick={ProfileModal}
        >
          Editar perfil</button>
      </div>
    </div >
  );
}