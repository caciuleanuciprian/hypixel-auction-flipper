import { useQuery } from "react-query";
import axios from "axios";
import { memo, useEffect, useState, useRef } from "react";
import uuid from "react-uuid";
import { useTimer } from "react-timer-hook";

import LowestBin from "./LowestBin";
const Container = memo(() => {
  const flips: any[] = [];
  const { seconds, minutes, start, restart, isRunning } = useTimer({
    // @ts-ignore
    expiryTimestamp: new Date().getTime() + 5 * 1000,
    onExpire: () => console.log("onExpire called"),
  });

  const [currentLowestBin, setCurrentLowestBin] = useState<any>(
    // @ts-ignore
    JSON.parse(localStorage.getItem("currentLowestBin")) || ""
  );
  const { isLoading, isSuccess, error, data }: any = useQuery(
    "auctions",
    () =>
      axios
        .get("https://hypixel-auction-api.vercel.app/")
        .then((res) => res.data)
        .catch((err) => console.log(err)),
    { refetchInterval: 5000 }
  );
  const time = new Date();
  time.setSeconds(time.getSeconds() + 60);
  if (isRunning === false) {
    localStorage.setItem("currentLowestBin", JSON.stringify(data));
    restart(time);
  }
  const bottom = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);
  const scrollToBottom = () => {
    if (bottom.current !== null) {
      bottom.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (scroll === true) {
      scrollToBottom();
    }
  }, [flips.length]);

  for (let i = 0; i < data?.length; i++) {
    for (let j = 0; j < currentLowestBin.length; j++) {
      if (data[i].item_name === currentLowestBin[j].item_name ) {
          if(data[i].starting_bid < currentLowestBin[j].starting_bid * 0.5) { 
            if(data[i].claimed === false) {
              flips.push(data[i]);
            }
          }
      }
    }
  }
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (isSuccess) {
    return (
      <div className="lowestBinContainer">
        {flips.map((auction: any) => {
          return (
            <LowestBin
              key={uuid()}
              uuid={auction.uuid}
              auctioneer={auction.auctioneer}
              profile_id={auction.profile_id}
              item_name={auction.item_name}
              starting_bid={auction.starting_bid}
              tier={auction.tier}
            />
          );
        })}
        <div ref={bottom}></div>
        <button className="CTA" onClick={() => setScroll(!scroll)}>
          Toggle Scroll To Bottom
          <br />
          <br />
          {minutes}:{seconds}s until auction refresh
        </button>
      </div>
    );
  }

  return <div>Something went wrong.</div>;
});
export default Container;
