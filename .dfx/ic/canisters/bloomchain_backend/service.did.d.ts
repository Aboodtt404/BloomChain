import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Message {
  'id' : bigint,
  'content' : string,
  'author' : Principal,
  'timestamp' : bigint,
}
export type Result = { 'ok' : Message } |
  { 'err' : string };
export type Result_1 = { 'ok' : UserProfile } |
  { 'err' : string };
export interface UserProfile {
  'principal' : Principal,
  'username' : [] | [string],
  'joinedAt' : bigint,
  'email' : [] | [string],
}
export interface _SERVICE {
  'createOrUpdateProfile' : ActorMethod<
    [[] | [string], [] | [string]],
    Result_1
  >,
  'getCanisterInfo' : ActorMethod<[], { 'name' : string, 'version' : string }>,
  'getMessageCount' : ActorMethod<[], bigint>,
  'getMessages' : ActorMethod<[[] | [bigint]], Array<Message>>,
  'getMyProfile' : ActorMethod<[], [] | [UserProfile]>,
  'getProfile' : ActorMethod<[Principal], [] | [UserProfile]>,
  'greet' : ActorMethod<[string], string>,
  'isAuthenticated' : ActorMethod<[Principal], boolean>,
  'submitMessage' : ActorMethod<[string], Result>,
  'whoami' : ActorMethod<[], Principal>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
