import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-gray-900 h-screen">
      <Head>
        <title>Torre Technical Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <p className="text-gray-50 font-semibold text-4xl">Torre Search</p>
      </div>
    </div>
  );
}
