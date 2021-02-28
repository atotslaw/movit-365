import { createContext, ReactNode, useState, useEffect } from 'react';
import { ProfileModal } from '../components/ProfileModal';

interface Profile {
  name: string;
  imgAvatar: string;
}

interface ProfileContextData {
  closeProfileModal: () => void;
}

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);


  function closeProfileModal() {
    setIsProfileModalOpen(false);
  }
  return (
    <ProfileContext.Provider value={{ closeProfileModal }}>
      {children}
      {isProfileModalOpen && <ProfileModal />}
    </ProfileContext.Provider>
  );
}