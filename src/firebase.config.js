import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDXaxT23mSemsbhXT4DQ11eS5auykM_e94',
  authDomain: 'my-rewind-e723d.firebaseapp.com',
  projectId: 'my-rewind-e723d',
  storageBucket: 'my-rewind-e723d.appspot.com',
  messagingSenderId: '154351289513',
  appId: '1:154351289513:web:678663dac1a7a6ad1d55b8',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
