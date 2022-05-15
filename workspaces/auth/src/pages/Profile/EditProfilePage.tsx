import { MdArrowLeft } from 'react-icons/md';
import { useHistory } from 'react-router-dom';
import { Input } from '@components';
import { UpdateProfilePayload, updateProfileSchema } from '@models';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProfile } from '@hooks';
import { useEffect } from 'react';

const EditProfilePage = () => {
  const history = useHistory();
  const { state, submitUpdateProfile, fetchProfile } = useProfile();
  const { register, handleSubmit } = useForm<UpdateProfilePayload>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: state?.profile || {},
  });

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <main className="flex-1 sm:w-[845.91px] w-full mx-auto flex flex-col items-start">
      <button
        onClick={history.goBack}
        className="text-blue-400 flex space-x-4 items-center py-8"
      >
        <MdArrowLeft size={32} />
        <span>Back</span>
      </button>
      <div className="sm:border rounded-xl w-full p-4 sm:p-8">
        <div className="text-2xl mb-2">Change Info</div>
        <div className="text-sm">
          Changes will be reflected to every services
        </div>
        <form
          onSubmit={handleSubmit(submitUpdateProfile)}
          className="flex flex-col items-stretch sm:w-1/2 space-y-4 mt-4"
        >
          <label className="flex space-x-8 items-center">
            <img src="/devchallenges.png" alt="" />
            <input type="file" className="hidden" />
            <div>Change Photo</div>
          </label>
          <Input
            label="Name"
            placeholder="Enter yout name..."
            {...register('name')}
          />
          <Input
            label="Bio"
            content={
              <textarea
                cols={30}
                rows={4}
                className="p-3 rounded-xl border resize-none text-gray-500 dark:bg-[#252329] dark:text-white"
                placeholder="Enter your bio..."
                {...register('bio')}
              ></textarea>
            }
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="Enter yout phone..."
            {...register('phone')}
          />
          <Input
            label="Email"
            placeholder="Enter yout email..."
            {...register('email')}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter yout password..."
          />
          <button
            type="submit"
            className="bg-blue-400 text-white px-4 py-2 w-1/4 rounded-xl"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default EditProfilePage;
