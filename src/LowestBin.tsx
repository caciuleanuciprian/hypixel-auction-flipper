import { useQuery } from "react-query";
import axios from "axios";

const LowestBin = () => {
  const { isLoading, isSuccess, refetch, error, data }: any = useQuery(
    "lowestBin",
    () =>
      axios
        .get("https://moulberry.codes/lowestbin.json", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          withCredentials: false,
        })
        .then((res) => console.log(res)),
    { enabled: true, cacheTime: 1000 * 60 }
  );
  if (isSuccess) {
    return (
      <div>
        <h1>SUCCESS Refetching Auction House in {timer}</h1>
      </div>
    );
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div></div>;
};

export default LowestBin;
