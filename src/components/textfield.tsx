import React, { useRef, useState } from "react";

interface person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person?: person;
  handleChange: (event: React.FormEvent<HTMLDivElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null>(5);
  const [count2, setCount2] = useState<{ text: string }>({ text: "p" });
  const [count3, setCount3] = useState<TextNode>({ text: "p" });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={e => handleChange(e)} />
    </div>
  );
};
