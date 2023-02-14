import React from "react";

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

type Gpa = {
  subject: string;
  A: number;
  B?: number;
  fullMark: number;
};

export const GpaGraph = () => {
  const data = [
    { subject: "数学", A: 120, B: 110, fullMark: 150 },
    { subject: "中国語", A: 98, B: 130, fullMark: 150 },
    { subject: "英語", A: 86, B: 130, fullMark: 150 },
    { subject: "地理", A: 99, B: 100, fullMark: 150 },
    { subject: "化学", A: 85, B: 90, fullMark: 150 },
    { subject: "歴史", A: 65, B: 85, fullMark: 150 },
  ];

  const [gpa, setGpa] = React.useState<Gpa[]>([
    { subject: "数学", A: 120, B: 110, fullMark: 150 },
  ]);
  const [count, setCount] = React.useState<number>(1);
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  const handleDelete = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div className="my-10">
        <button
          className="px-4 py-2 mb-5 text-xl text-white bg-green-700 rounded"
          onClick={handleCount}
        >
          データ追加
        </button>
        <button
          className="px-4 py-2 mb-5 text-xl text-white bg-green-700 rounded"
          onClick={handleCount}
        >
          科目追加
        </button>
        <button
          className="px-4 py-2 mb-5 text-xl text-white bg-red-700 rounded"
          onClick={handleDelete}
        >
          削除
        </button>
        <div>
          {[...Array(count)].map((_, i) => (
            <div key={i} className="flex">
              <div>科目名；</div>
              <input type="text" className="border-2" />
              <div>点数；</div>
              <input type="text" className="border-2" />
            </div>
          ))}
        </div>
        <div>
          {gpa &&
            gpa.map((val: any, index: number) => (
              <div key={index} className="flex">
                <div>{val.subject}</div>
                <div>{val.A}</div>
              </div>
            ))}
        </div>
      </div>
      <RadarChart // レーダーチャート全体の設定を記述
        cx={250} // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
        cy={250} // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
        outerRadius={150} // レーダーチャート全体の大きさ
        width={500} // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
        height={500} // レーダーチャートが記載される高さ
        data={data} // 表示対象のデータ
      >
        {/* レーダーチャートの蜘蛛の巣のような線 */}
        <PolarGrid />
        {/* 項目を決めるデータのキー(サンプルでいう数学や歴史) */}
        <PolarAngleAxis dataKey="subject" />

        {/* 目安となる数値が表示される線を指定  */}
        <PolarRadiusAxis
          angle={30} // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
          domain={[0, 150]} // リストの１番目の要素が最小値、2番目の要素が最大値
        />

        {/* レーダーを表示 */}
        <Radar
          name="Aさん" // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
          dataKey="A" // 表示する値と対応するdata内のキー
          stroke="#8884d8" // レーダーの外枠の色
          fill="#8884d8" // レーダー内の色
          fillOpacity={0.6} // レーダー内の色の濃さ(1にすると濃さMAX)
        />
        {/* ２個目のレーダー */}
        {/* <Radar
            name="Bさん"
            dataKey="B"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          /> */}

        {/* グラフの下のAさんBさんの表記 */}
        <Legend />
      </RadarChart>
    </div>
  );
};
