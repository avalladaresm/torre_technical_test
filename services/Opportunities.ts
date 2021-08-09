import useSWR from "swr";
import axios from "axios";

const GetOpportunities = async (q?: string) => {
  try {
    const opportunities = await axios.post(
      `https://search.torre.co/opportunities/_search/?q=${q}&size=20`,
      {},
      { headers: { "Content-Type": "application/json" } }
    );

    return opportunities.data;
  } catch (error) {
    throw error;
  }
};

export const useOpportunities = (q?: string) => {
  const { data, error } = useSWR(q ?? "react", GetOpportunities);

  return {
    opportunities: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const GetOpportunity = async (id: string) => {
  try {
    const opportunity = await axios.get(
      ` https://torre.co/api/opportunities/${id}`
    );
    return opportunity.data;
  } catch (error) {
    throw error;
  }
};

export const useOpportunitiy = (id: string) => {
  const { data, error } = useSWR(id, GetOpportunity);

  return {
    opportunity: data,
    isLoading: !error && !data,
    isError: error,
  };
};
