import { FC } from "react";
import Bubble from "../ui/bubble";
interface BubbleLayoutProps {}

const BubbleLayout: FC<BubbleLayoutProps> = ({}) => {
  const rows = [];
  let leftFlag = false;
  let upFlag = false;
  let upCount = -1;

  for (let i = 0; i < 42; i++) {
    if (i % 7 === 0) {
      leftFlag = true;
      upCount++;
    }
    if (i === 7) upFlag = true;
    rows.push(
      <Bubble
        className={`${i === 17 ? "black" : "normal"}`}
        key={i}
        left={!leftFlag}
        incrementLeft={7 * (i % 7)}
        up={upFlag}
        incrementUp={10.5 * upCount}
      />
    );
    leftFlag = false;
  }

  return <div className="bubble-wrapper">{rows}</div>;
};

export default BubbleLayout;
