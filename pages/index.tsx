import { useRouter } from "next/dist/client/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-gray-900 h-screen">
      <Head>
        <title>Torre Technical Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center py-20">
        <p className="text-gray-50 font-semibold text-4xl">Torre Search</p>
      </div>
      <div className="flex justify-center px-32">
        <div className="flex flex-row gap-20">
          <button className="group h-[5rem] w-[15rem] hover:bg-gray-500 bg-gray-700 rounded-md">
            <div className="flex h-full justify-center items-center">
              <p className="text-2xl font-semibold text-gray-300 group-hover:text-gray-50">
                Bios
              </p>
            </div>
          </button>
          <button
            onClick={() => {
              router.push("opportunities");
            }}
            className="group h-[5rem] w-[15rem] hover:bg-gray-500 bg-gray-700 rounded-md"
          >
            <div className="flex h-full justify-center items-center">
              <p className="text-2xl font-semibold text-gray-300 group-hover:text-gray-50">
                Opportunities
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
