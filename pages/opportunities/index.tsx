import { ChevronLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useState } from "react";
import OpportunityModal from "../../components/custom/OpportunityModal";
import { Result } from "../../components/Result";
import { TextSkeleton } from "../../components/TextSkeleton";
import { useOpportunities } from "../../services/Opportunities";

const Opportunities = () => {
  const [_isOpen, _setIsOpen] = useState(false);
  const [_selectedOpportunity, _setSelectedOpportunity] = useState<any>();
  const { opportunities, isLoading, isError } = useOpportunities();
  const _cards = Array(20).fill({});
  const router = useRouter();

  return (
    <div className="bg-gray-900 min-h-screen h-full">
      <Head>
        <title>Opportunities | Torre Technical Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-row justify-center p-10">
        <div
          onClick={() => router.push("/")}
          className="group flex flex-initial mr-auto items-center text-gray-200 text-md"
        >
          <ChevronLeftIcon className="w-5 group-hover:text-white group-hover:cursor-pointer" />
          <span className="group-hover:text-white group-hover:cursor-pointer">
            back
          </span>
        </div>
        <div className="flex right-1/2 absolute transform translate-x-1/2">
          <p className=" text-gray-50 font-semibold text-4xl">Opportunities</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center p-10">
        {isLoading
          ? _cards.map((c, i) => (
              <div key={i} className="p-2 m-2 w-5/12 rounded-md bg-gray-500">
                <TextSkeleton w="w-full" />
                <TextSkeleton w="w-20" />
              </div>
            ))
          : opportunities?.results
          ? opportunities?.results.map((o: any) => (
              <div
                key={o.id}
                onClick={() => {
                  _setIsOpen(true), _setSelectedOpportunity(o);
                }}
                className="p-2 m-2 w-5/12 rounded-md bg-gray-500 hover:bg-gray-400 hover:cursor-pointer"
              >
                <p className="font-semibold text-lg">{o.objective}</p>
                <p>Remote: {o.remote ? "Yes" : "No"}</p>
              </div>
            ))
          : isError && (
              <Result title="Error retrieving opportunities" type="error" />
            )}
      </div>
      <OpportunityModal
        isOpen={_isOpen}
        setIsOpen={_setIsOpen}
        selectedOpportunity={_selectedOpportunity}
      />
    </div>
  );
};

export default Opportunities;
