import Loader from "./Loader";

const LowestBinPlaceholder = () => {
  return (
    <div className={`lowestBin placeholder`}>
      <Loader text="Searching..." />
      <p className="disclaimer">
        Flips can take a while to show up because we are fetching lowest bin
        every 90s and every auction page every 15s for a more accurate result.
      </p>
    </div>
  );
};

export default LowestBinPlaceholder;
