import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const { body } = await uploadPhoto();
    const { firstName, lastName } = await createUser();
    console.log(body, firstName, lastName);
  } catch (e) {
    console.log('Signup system offline');
  }
}