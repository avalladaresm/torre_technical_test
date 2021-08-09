import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Badge from "../../components/Badge";
import { Input } from "../../components/Input";
import Modal from "../../components/Modal";
import { useOpportunities } from "../../services/Opportunities";

const Opportunities = () => {
  const [_isOpen, _setIsOpen] = useState(false);
  const [_selectedOpportunity, _setSelectedOpportunity] = useState<any>();
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
        ))}
      </div>
      <Modal isOpen={_isOpen} setIsOpen={_setIsOpen}>
        <div className="flex flex-row justify-between pr-5">
          <p className="font-semibold text-lg text-white self-center">
            {_selectedOpportunity?.objective}
          </p>
          {_selectedOpportunity?.organizations && (
            <div className="flex flex-col justify-center items-center">
              <div className="">
                <Image
                  className="rounded-xl"
                  src={_selectedOpportunity.organizations[0].picture}
                  width={75}
                  height={75}
                  alt="organization_logo"
                />
              </div>
              <p className="font-semibold text-lg text-white text-center underline">
                {_selectedOpportunity.organizations[0].name}
              </p>
            </div>
          )}
        </div>
        <div className="text-white my-5 border-t-2 border-dashed">
          <p className="text-white mt-2">
            Remote: {_selectedOpportunity?.remote ? "Yes" : "No"}
          </p>
          <div>
            <p className="text-white">
              Skills:{" "}
              <span className="space-x-2">
                {_selectedOpportunity?.skills.map((s: any, i: number) => (
                  <Badge key={i} badgeTitle={s.name} />
                ))}
              </span>
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Opportunities;
