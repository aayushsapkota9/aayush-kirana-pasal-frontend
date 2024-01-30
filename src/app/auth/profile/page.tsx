'use client';

import { useLogout } from '@/src/hooks/auth/useLogout';
import { ChangeEvent, useState } from 'react';
useLogout;
export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [newAvatarUrl, setNewAvatarUrl] = useState('');

  const getNewAvatarUrl = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setEditMode(true);
      setNewAvatarUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <p className="font-bold text-2xl">Welcome back</p>

      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={getNewAvatarUrl}
        className="mt-2 border border-solid border-black py-2 px-4 rounded cursor-pointer"
      />

      {/* {editMode && (
        <UploadAvatar
          refetchUser={refetchUser}
          cancelEdit={() => setEditMode(false)}
          userId={currentUser?.id || ''}
          avatarUrl={newAvatarUrl}
        />
      )} */}
    </div>
  );
}
