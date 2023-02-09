import logo from "../src/assets/logo.svg";
interface LowestBin {
  key: string;
  uuid: string;
  auctioneer: string;
  profile_id: string;
  item_name: string;
  starting_bid: number;
  tier: Tier;
  binPrice: number;
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

const LowestBin = ({
  uuid,
  item_name,
  starting_bid,
  tier,
  binPrice,
}: LowestBin) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText("/viewauction " + uuid);
      }}
      className={`lowestBin`}
    >
      <p className="itemName">{item_name}</p>
      <img className="itemImage" src={logo} alt="Logo" />
      <p className={`itemTier tier--${tier}`}>{tier}</p>
      <div className="itemValues">
        <p className="itemBinPrice">
          Lowest Bin: <br />~{dollarUSLocale.format(binPrice)}
        </p>
        <p className="itemPrice">
          Price: <br />
          {dollarUSLocale.format(starting_bid)}
        </p>
      </div>
      <p className="itemProfit">
        Profit: <br />~{dollarUSLocale.format(binPrice - starting_bid)}
      </p>
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
};

export default LowestBin;
