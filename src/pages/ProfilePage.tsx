
import React from 'react';
import Navigation from '@/components/Navigation';
import UserProfile from '@/components/UserProfile';
import Footer from '@/components/Footer';
import { currentUser } from '@/utils/movieData';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-cinebuzz-background">
      <Navigation />
      <UserProfile user={currentUser} />
      <Footer />
    </div>
  );
};

export default ProfilePage;
