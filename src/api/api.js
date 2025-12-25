import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function search(query, page, perPage) {
  const res = await axios.get(`${BASE_URL}/meta/anilist/${encodeURIComponent(query)}?page=${page}&perPage=${perPage}`);
  return res.data;
}

export async function getTitle(titleId) {
  const res = await axios.get(`${BASE_URL}/meta/anilist/info/${titleId}`);
  return res.data;
}

export async function getEpisode(episodeId) {
  const res = await axios.get(`${BASE_URL}/meta/anilist/watch/${episodeId}`)
  return res.data;
}