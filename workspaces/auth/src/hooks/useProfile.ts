import { Profile, UpdateProfilePayload } from '@models';
import { ProfileService } from '@network';
import { profileState } from '@state';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';

export const useProfile = () => {
  const [profile, setProfile] = useRecoilState(profileState);
  const history = useHistory();

  const fetchProfile = useCallback(async () => {
    try {
      const { data } = await ProfileService.getUserProfile();
      if (data.ok) {
        setProfile(data.data);
      }
    } catch {}
  }, [setProfile]);

  const submitUpdateProfile = async (payload: UpdateProfilePayload) => {
    if (!profile) return;

    try {
      const { data } = await ProfileService.updateProfile(profile.id, payload);
      if (data.ok) {
        history.push({ pathname: '/profile' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const state = {
    profile: profile as Profile,
  };

  return { state, fetchProfile, submitUpdateProfile };
};
