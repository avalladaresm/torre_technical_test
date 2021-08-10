import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

export const Result = ({ title, type = "success" }: ResultProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center my-10">
      <div className="mr-4 self-center">
        {type === "success" && (
          <CheckCircleIcon className="text-green-500 w-28" />
        )}
        {type === "info" && (
          <InformationCircleIcon className="text-blue-500 w-28" />
        )}
        {type === "warning" && (
          <ExclamationCircleIcon className="text-yellow-500 w-28" />
        )}
        {type === "error" && <XCircleIcon className="text-red-500 w-28" />}
      </div>
      <div className="flex items-center">
        <h4 className="text-lg font-bold text-center text-gray-100">{title}</h4>
      </div>
    </div>
  );
};

interface ResultProps {
  title?: string;
  type?: "success" | "info" | "warning" | "error";
}
