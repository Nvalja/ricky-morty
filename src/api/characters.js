import { request } from './api';

export const getCharacters = async(page, status, species, gender) => {
  const result = await request(
    `/character/?${page}&status=${status}&species=${species}&gender=${gender}`,
  );

  return result;
};
