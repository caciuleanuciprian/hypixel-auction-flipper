import Loader from "./Loader";

const LowestBinPlaceholder = () => {
  return (
    <div className={`lowestBin placeholder`}>
      <Loader text="Searching..." />
    </div>
  );
};

export default LowestBinPlaceholder;
