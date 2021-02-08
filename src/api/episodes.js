import { request } from './api';

export const getEpisodes = async(page) => {
  const result = await request(
    `/episode/?${page}`,
  );

  return result;
};
