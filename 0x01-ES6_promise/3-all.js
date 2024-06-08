import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()]).then((res) => {
    const [{ firstName, lastName }, { body }] = res;
    console.log(body, firstName, lastName);
  }).catch(() => new Error('Signup system offline'));
}
