import React from "react";

type Props = {
  text1: string;
  text2: string;
  bigger?: boolean;
};

export default function GradientText({
  text1,
  text2,
  bigger,
}: Props): React.JSX.Element {
  return bigger ? (
    <h1>
      {text1}{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-turquoise to-bluedarker">
        {text2}
      </span>
    </h1>
  ) : (
    <h2>
      {text1}{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-br from-turquoise to-bluedarker">
        {text2}
      </span>
    </h2>
  );
}
