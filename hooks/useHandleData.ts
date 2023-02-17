import { Gpa } from "@/types/type";
import React from "react";

export const useHandleData = () => {
  const [data, setData] = React.useState<Gpa[]>([
    { subject: "数学", A: 120, B: 110, fullMark: 150 },
  ]);
  const [count, setCount] = React.useState<number>(1);
  const subjectRef = React.useRef<HTMLInputElement>(null);
  const scoreRef = React.useRef<HTMLInputElement>(null);
  const handleCount = () => {
    setCount((prev) => prev + 1);
    const subject = subjectRef.current?.value;
    const score = scoreRef.current?.value;
    if (subject && score) {
      setData((prev) => [
        ...prev,
        {
          subject: subject,
          A: Number(score),
          fullMark: 150,
        },
      ]);
    }
  };
  const handleDelete = () => {
    setCount((prev) => prev - 1);
    // ここでdataの最後の要素を削除する
    setData((prev) => prev.slice(0, -1));
  };
  return { data, count, subjectRef, scoreRef, handleCount, handleDelete };
};
