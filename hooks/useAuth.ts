import { useState, useEffect } from 'react';
import { User, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Sign in successful:', result.user.uid);
    } catch (error: any) {
      console.error('Error signing in with Google', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await firebaseSignOut(auth);
      setUser(null);
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      console.log('User signed out successfully');
    } catch (error: any) {
      console.error('Error signing out', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearAuthState = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    console.log('Auth state cleared');
  };

  return { user, loading, error, signIn, signOut, clearAuthState };
}
