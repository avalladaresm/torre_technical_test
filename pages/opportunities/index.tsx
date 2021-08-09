import Head from "next/head";
import React from "react";
import { Input } from "../../components/Input";
import { useOpportunities } from "../../services/Opportunities";

const Opportunities = () => {
  const { opportunities, isLoading, isError } = useOpportunities();
  return (
    <div className="bg-gray-900 h-full">
      <Head>
        <title>Opportunities | Torre Technical Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center py-10">
        <p className="text-gray-50 font-semibold text-4xl">Opportunities</p>
      </div>
      <div className="flex justify-center px-32">
        <Input label="Search opportunities" buttonText="Search" />
      </div>
      <div className="flex flex-wrap justify-center p-10">
        {opportunities?.results.map((o: any) => (
          <div key={o.id} className="p-2 m-2 w-5/12 rounded-md bg-gray-500">
            <p className="font-semibold text-lg">{o.objective}</p>
            <p>Remote: {o.remote ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
