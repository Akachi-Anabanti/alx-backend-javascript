import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const {firstName, lastName} = await createUser();
    const {body} = await uploadPhoto();
    console.log(body, firstName, lastName);
  } catch {
    return new Error('Signup system offline');
  }
}
