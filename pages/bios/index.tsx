import { ChevronLeftIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Result } from "../../components/Result";
import { TextSkeleton } from "../../components/TextSkeleton";
import { useBioInformation } from "../../services/Bios";
import { useOpportunities } from "../../services/Opportunities";

const Opportunities = () => {
  const [_searchText, _setSearchText] = useState("");
  const [_selectedOpportunity, _setSelectedOpportunity] = useState<any>();
  const { bio, isLoading, isError } = useBioInformation(_searchText);
  const router = useRouter();

  console.log(_searchText);
  console.log(bio);
  return (
    <div className="bg-gray-900 min-h-screen h-full">
      <Head>
        <title>Bios | Torre Technical Test</title>
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
          <p className=" text-gray-50 font-semibold text-4xl">Bios</p>
        </div>
      </div>
      <div className="flex justify-center px-32">
        <Input
          label="Search"
          buttonText="Search"
          searchText={_searchText}
          setSearchText={_setSearchText}
        />
      </div>
      <div>
        {isLoading ? (
          <div>loading...</div>
        ) : bio ? (
          <div>{bio.person.name}</div>
        ) : (
          isError && <Result title="Bio not found" type="error" />
        )}
      </div>
    </div>
  );
};

export default Opportunities;
