export type authState = {
  token: string | null;
  userDetails: {};
  setUser: setUserFnType;
};

export type setUserFnType = React.Dispatch<
  React.SetStateAction<{
    userDetails: {};
    token: string;
  }>
>;
