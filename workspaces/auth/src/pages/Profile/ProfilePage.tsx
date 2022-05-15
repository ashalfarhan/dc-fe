import { ReactNode, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '@hooks';

const ProfilePage = () => {
  const { state, fetchProfile } = useProfile();
  const { profile } = state;

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <main className="flex-1 pb-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl">Personal info</h1>
        <p className="text-lg font-light">
          Basic info, like your name and photo
        </p>
      </div>
      <div className="max-w-[845.91px] mx-auto border rounded-2xl border-collapse">
        <div className="flex items-center justify-between p-8 border rounded-t-2xl">
          <div>
            <h1 className="text-2xl">Profile</h1>
            <p>Some info may be visible to other people</p>
          </div>
          <Link
            to={{ pathname: '/profile/edit' }}
            className="border-2 rounded-xl text-gray-400 px-8 py-2"
          >
            Edit
          </Link>
        </div>
        <div className="flex items-center py-4 px-8 border">
          <div className="w-[280px] text-gray-400">PHOTO</div>
          <img
            src={profile?.avatarUrl || '/devchallenges.png'}
            width={80}
            height={80}
            alt=""
          />
        </div>
        <InfoRow label="NAME" value={profile?.name} />
        <InfoRow label="BIO" value={profile?.bio} />
        <InfoRow label="PHONE" value={profile?.phone} />
        <InfoRow label="EMAIL" value={profile?.email} />
        <div className="flex items-center p-8 border rounded-b-2xl">
          <div className="w-[280px] text-gray-400">PASSWORD</div>
          <div>***********</div>
        </div>
      </div>
    </main>
  );
};

const InfoRow = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="flex items-center p-8 border">
    <div className="w-[280px] text-gray-400">{label}</div>
    <div>{value}</div>
  </div>
);

export default ProfilePage;
