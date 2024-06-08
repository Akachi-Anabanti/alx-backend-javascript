import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const res = await Promise.all([createUser(), uploadPhoto()]);
    const [{ firstName, lastName }, { body }] = res;
    console.log(body, firstName, lastName);
  } catch {
    return new Error('Signup system offline');
  }
}
