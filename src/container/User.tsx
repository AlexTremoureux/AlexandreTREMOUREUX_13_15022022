import React, { useState } from "react";
import { SetUserProfile } from "../app/features/userData";
import { setUserProfileInformations } from "../app/features/userProfileSlice";
import { useUpdateProfileMutation } from "../app/services/userSlice";
import CardAccount from "../components/CardAccount";
import { useAppDispatch, useAppSelector } from "../hooks/store";
import { accounts } from "../utils/constantes";
import { userProfile, UserResponse } from "../utils/interfaceTypes";

const User = () => {
  const dispatch = useAppDispatch();
  const importProfile = SetUserProfile();
  const { isLoading, error } = importProfile;
  const userProfile = useAppSelector((state) => state.userProfile);
  const { firstName, lastName } = userProfile;
  const [changingProfile, setChangingProfile] = useState(false);
  const [updateProfile] = useUpdateProfileMutation()

  const [nameState, setNameState] = useState<userProfile>({
    firstName: firstName,
    lastName: lastName,
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setNameState((prev) => ({ ...prev, [name]: value }));

  if (isLoading) <div>Chargement en cours</div>;
  if (error) <div>Une erreur est survenue</div>;
  return (
    <main className="main bg-dark">
      {changingProfile ? (
        <div className="header">
          <h1>Welcome back</h1>
          <input
            type="text"
            placeholder={firstName}
            name="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder={lastName}
            name="lastName"
            onChange={handleChange}
          />
          <button
            type="submit"
            onClick={async () => {
              try {
                const data:UserResponse = await updateProfile(nameState).unwrap()
                dispatch(setUserProfileInformations(data.body));
                setChangingProfile(false);
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setChangingProfile(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button
            className="edit-button"
            onClick={() => {
              setChangingProfile(true);
            }}
          >
            Edit Name
          </button>
        </div>
      )}

      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => (
        <CardAccount
          key={account.title}
          title={account.title}
          amount={account.amount}
          desc={account.desc}
        />
      ))}
    </main>
  );
};

export default User;