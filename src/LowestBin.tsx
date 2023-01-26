import { useEffect, useState, memo } from "react";

interface LowestBin {
  key: string;
  uuid: string;
  auctioneer: string;
  profile_id: string;
  item_name: string;
  starting_bid: number;
  tier: Tier;
}

enum Tier {
  Common = "COMMON",
  Uncommon = "UNCOMMON",
  Rare = "RARE",
  Epic = "EPIC",
  Legendary = "LEGENDARY",
  Special = "SPECIAL",
  Mythic = "MYTHIC",
}

const LowestBin = memo(
  ({
    uuid,
    auctioneer,
    profile_id,
    item_name,
    starting_bid,
    tier,
  }: LowestBin) => {
    let dollarUSLocale = Intl.NumberFormat("en-US");

    return (
      <div
        onClick={() => {
          navigator.clipboard.writeText("/viewauction " + uuid);
        }}
        className={`lowestBin lowestBin--${tier}`}
      >
        <p>
          {item_name} - {tier}
        </p>
        <p>{dollarUSLocale.format(starting_bid)}</p>
        <button
          className="copy"
          onClick={() => {
            navigator.clipboard.writeText("/viewauction " + uuid);
          }}
        >
          Copy AH Link
        </button>
      </div>
    );
  }
);

export default LowestBin;
