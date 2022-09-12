import type { NextPage } from "next";
import Disconected from "../components/Disconected";
import Connected from "../components/Connected";
import { useWallet } from "@solana/wallet-adapter-react";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  const { connected } = useWallet();
  return (
    <MainLayout>{connected ? <Connected /> : <Disconected />}</MainLayout>
  );
};

export default Home;
