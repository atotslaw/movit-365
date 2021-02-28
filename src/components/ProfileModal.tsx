import { useContext } from 'react';
import styles from '../styles/components/ProfileModal.module.css';
import profile from '../../profiledata.json';

export function ProfileModal() {

  function closeProfileModal() {
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>
          <input type="input" className={styles.inputName}>{profile.name}</input>
        </header>
        <strong>Avatar</strong>
        <p>faça upload da imagem do seu avatar</p>
        <img src={profile.avatarImg} alt="avatar image" />
        <button type="button"
          onClick={closeProfileModal}>
          <img src="/icons/close.svg" alt="fehar modal" />
        </button>
      </div>
    </div>
  );
}