import Image from "next/image";
import Modal, { ModalProps } from "../Modal";
import Badge from "../../components/Badge";
import { useOpportunitiy } from "../../services/Opportunities";
import { TextSkeleton } from "../TextSkeleton";

export default function OpportunityModal({
  isOpen,
  setIsOpen,
  selectedOpportunity,
}: OpportunityModalProps) {
  const {
    opportunity: additionalOppData,
    isLoading,
    isError,
  } = useOpportunitiy(selectedOpportunity?.id);

  if (isError) <div>Error retrieving opportunity details</div>;

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-5/6">
          <p className="font-semibold text-lg text-white self-center">
            {selectedOpportunity?.objective}
          </p>
          {isLoading ? (
            <div className="w-full">
              <TextSkeleton lines={3} w="w-full" />
            </div>
          ) : (
            <p className={`text-sm text-white self-center text-justify`}>
              {additionalOppData?.details &&
                additionalOppData.details.find((d: any) => d.code === "reason")
                  .content}
            </p>
          )}
        </div>
        {selectedOpportunity?.organizations && (
          <div className="flex flex-col justify-center items-center mx-5">
            <div>
              <Image
                className="rounded-xl"
                src={selectedOpportunity.organizations[0].picture}
                width={100}
                height={100}
                alt="organization_logo"
              />
            </div>
            <p className="font-semibold text-lg text-white text-center">
              {selectedOpportunity.organizations[0].name}
            </p>
          </div>
        )}
      </div>
      <div className="text-white my-5 border-t-2 border-dashed">
        <p className="text-white mt-2">
          Remote: {selectedOpportunity?.remote ? "Yes" : "No"}
        </p>
        <div>
          <p className="text-white">
            Skills:{" "}
            <span className="space-x-2">
              {selectedOpportunity?.skills.map((s: any, i: number) => (
                <Badge key={i} badgeTitle={s.name} />
              ))}
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}

interface OpportunityModalProps extends ModalProps {
  selectedOpportunity: any;
}
