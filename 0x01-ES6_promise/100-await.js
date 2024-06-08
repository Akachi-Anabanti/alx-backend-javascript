import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoResp = await uploadPhoto();
    const userResp = await createUser();
    return {
      photo: photoResp,
      user: userResp,
    };
  } catch (e) {
    return {
      photo: null,
      user: null,
    };
  }
}
