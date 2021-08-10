import Image from "next/image";
import { ChevronLeftIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import React, { useState } from "react";
import { Input } from "../../components/Input";
import { Result } from "../../components/Result";
import { TextSkeleton } from "../../components/TextSkeleton";
import { useBioInformation } from "../../services/Bios";
import { useOpportunities } from "../../services/Opportunities";
import Badge from "../../components/Badge";
import { LoadingSpinner } from "../../components/LoadingSpinner";

const Opportunities = () => {
  const [_searchText, _setSearchText] = useState("");
  const { bio, isLoading, isError } = useBioInformation(_searchText);
  const router = useRouter();

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
        {isLoading && _searchText.length > 0 ? (
          <div className="mt-10">
            <LoadingSpinner />
          </div>
        ) : bio ? (
          <div className="flex flex-col justify-center mt-10">
            <div className="flex flex-col justify-center items-center mx-5">
              <div>
                <Image
                  className="rounded-xl"
                  src={bio.person.picture}
                  width={150}
                  height={150}
                  alt="organization_logo"
                />
              </div>
              <p className="text-gray-50 text-3xl">
                {bio.person.name + " - " + bio.person.professionalHeadline}
              </p>
              <p className="text-gray-50 text-lg">{bio.person.location.name}</p>
              <p className="text-gray-50 text-lg max-w-3xl mt-5">
                {bio.person.summaryOfBio}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center mx-5 mt-10">
              <h3 className="text-3xl text-gray-50">Job experience</h3>
              {bio.jobs.map((j: any) => (
                <div key={j.id} className="flex justify-center w-full">
                  <div className="p-2 m-2 w-5/12 rounded-md bg-gray-400">
                    <p className="font-semibold text-lg">
                      {j.name + " at " + j.organizations[0].name}
                    </p>
                    <p>Summary: {j.additionalInfo}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center items-center mx-5 mb-20">
              <h3 className="text-3xl text-gray-50">Interests</h3>
              <div className="flex flex-row space-x-2 mt-2">
                {bio.interests.map((i: any) => (
                  <Badge key={i.id} badgeTitle={i.name} textSize="text-lg" />
                ))}
              </div>
            </div>
          </div>
        ) : (
          isError && <Result title="Bio not found" type="error" />
        )}
      </div>
    </div>
  );
};

export default Opportunities;
