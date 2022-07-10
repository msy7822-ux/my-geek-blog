import { NextPage } from 'next';
import Container from '@/components/Container';
import Profile from '@/components/Profile';
import ProfileHeader from '@/components/ProfileHeader';

const ProfilePage: NextPage = () => {
  return (
    <Container>
      <ProfileHeader />
      <Profile />
    </Container>
  );
};

export default ProfilePage;
