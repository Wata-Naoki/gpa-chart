"use client";

import Image from "next/image";
import { Inter } from "@next/font/google";
import { GpaGraph } from "@/components/GpaGraph";
// 棒グラフ用のコンポーネントをインポート

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">グラフ</h1>
      <div className="flex">
        <GpaGraph />
      </div>
    </div>
  );
}
