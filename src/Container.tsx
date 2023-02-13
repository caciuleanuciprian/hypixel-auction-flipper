import { useQuery } from "react-query";
import axios from "axios";
import uuid from "react-uuid";
import LowestBinPlaceholder from "./components/LowestBinPlaceholder";

import LowestBin from "./LowestBin";
import Loader from "./components/Loader";

const Container = () => {
  const flips: any[] = [];
  function scrollToLast() {
    const scroll = document.getElementById("scroll");
    if (scroll) {
      scroll.scrollIntoView({ behavior: "smooth" });
    }
  }
  const { isLoading, isSuccess, error, data }: any = useQuery(
    "auctions",
    () =>
      axios
        .get("https://api.hypixel.net/skyblock/auctions")
        .then((res) => res.data.auctions)
        .catch((err) => console.log(err)),
    {
      refetchInterval: 15000,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );

  function findFlips() {
    let currentLowestBin = JSON.parse(
      localStorage.getItem("lowestBin") || "{}"
    );
    for (let i = 0; i < data.length; i++) {
      if (data[i].bin == true) {
        for (let j = 0; j < currentLowestBin.length; j++) {
          if (data[i].item_name == currentLowestBin[j].item_name)
            if (data[i].tier == currentLowestBin[j].tier) {
              if (
                data[i].starting_bid <
                currentLowestBin[j].starting_bid * 0.5
              ) {
                if (data[i].claimed == false) {
                  flips.push({
                    ...data[i],
                    binPrice: currentLowestBin[j].starting_bid,
                  });
                }
              }
            }
        }
      }
    }
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <LowestBinPlaceholder />
        </div>
      </div>
    );
  }
  if (error) {
    return <>Error: {error}</>;
  }
  if (isSuccess) {
    if (data?.length > 0) {
      if (
        localStorage.getItem("refreshed") ||
        localStorage.getItem("lowestBin")
      ) {
        findFlips();
        return (
          <div className="container">
            <button className="scrollBtn" onClick={scrollToLast}>
              Scroll to last flip
            </button>
            <div className="row">
              {flips.length > 0 ? (
                flips.map((auction: any) => {
                  return (
                    <LowestBin
                      key={uuid()}
                      uuid={auction.uuid}
                      auctioneer={auction.auctioneer}
                      profile_id={auction.profile_id}
                      item_name={auction.item_name}
                      starting_bid={auction.starting_bid}
                      tier={auction.tier}
                      binPrice={auction.binPrice}
                    />
                  );
                })
              ) : (
                <LowestBinPlaceholder />
              )}
              <div id="scroll"></div>
            </div>
          </div>
        );
      }
    }
  }
  return (
    <div className="container">
      <Loader />
    </div>
  );
};
export default Container;
