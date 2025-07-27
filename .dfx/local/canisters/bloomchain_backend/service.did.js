export const idlFactory = ({ IDL }) => {
  const UserProfile = IDL.Record({
    'principal' : IDL.Principal,
    'username' : IDL.Opt(IDL.Text),
    'joinedAt' : IDL.Int,
    'email' : IDL.Opt(IDL.Text),
  });
  const Result_1 = IDL.Variant({ 'ok' : UserProfile, 'err' : IDL.Text });
  const Message = IDL.Record({
    'id' : IDL.Nat,
    'content' : IDL.Text,
    'author' : IDL.Principal,
    'timestamp' : IDL.Int,
  });
  const Result = IDL.Variant({ 'ok' : Message, 'err' : IDL.Text });
  return IDL.Service({
    'createOrUpdateProfile' : IDL.Func(
        [IDL.Opt(IDL.Text), IDL.Opt(IDL.Text)],
        [Result_1],
        [],
      ),
    'getCanisterInfo' : IDL.Func(
        [],
        [IDL.Record({ 'name' : IDL.Text, 'version' : IDL.Text })],
        ['query'],
      ),
    'getMessageCount' : IDL.Func([], [IDL.Nat], ['query']),
    'getMessages' : IDL.Func([IDL.Opt(IDL.Nat)], [IDL.Vec(Message)], ['query']),
    'getMyProfile' : IDL.Func([], [IDL.Opt(UserProfile)], []),
    'getProfile' : IDL.Func([IDL.Principal], [IDL.Opt(UserProfile)], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'isAuthenticated' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'submitMessage' : IDL.Func([IDL.Text], [Result], []),
    'whoami' : IDL.Func([], [IDL.Principal], []),
  });
};
export const init = ({ IDL }) => { return []; };
