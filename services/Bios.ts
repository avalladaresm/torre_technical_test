import useSWR from "swr";
import axios from "axios";

const GetBioInformation = async (username: string) => {
  try {
    const bio = await axios.get(`https://torre.bio/api/bios/${username}`);
    return bio.data;
  } catch (error) {
    throw error;
  }
};

export const useBioInformation = (username: string) => {
  const { data, error } = useSWR(username, GetBioInformation);

  return {
    bio: data,
    isLoading: !error && !data,
    isError: error,
  };
};
