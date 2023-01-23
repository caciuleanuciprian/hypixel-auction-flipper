import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const Container = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    if (timer === 0) {
      refetch();
      setTimer(60);
    }
    return () => clearInterval(interval);
  }, [timer]);
  const { isLoading, isSuccess, refetch, error, data }: any = useQuery(
    "auctions",
    () =>
      axios
        .get("https://api.hypixel.net/skyblock/auctions")
        .then((res) => res.data.auctions),
    { enabled: false, cacheTime: 1000 * 60 }
  );
  if (isSuccess) {
    return (
      <div>
        {data.map((auction: any) => {
          if (auction.bin === true && auction.claimed === false) {
            return (
              <div key={auction.uuid}>
                {auction.item_name} - {auction.starting_bid}
              </div>
            );
          }
        })}
        <h1>SUCCESS Refetching Auction House in {timer}</h1>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div></div>;
};
export default Container;
