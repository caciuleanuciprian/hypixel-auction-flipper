import axios from "axios";
import { useEffect, useState } from "react";

import Loader from "./Loader";

const LowBinData = () => {
  const [fetchedData, setFetchedData] = useState<any>();

  if (fetchedData === undefined && !localStorage.getItem("firstTime")) {
    async function fetchFirstVisit() {
      const res = await axios
        .get(`https://oyster-app-tmgo4.ondigitalocean.app/bin`)
        .then((res) =>
          localStorage.setItem("lowestBin", JSON.stringify(res.data))
        )
        .catch((err) => err);
      if (fetchedData) {
        setFetchedData(res);
        // localStorage.setItem("lowestBin", JSON.stringify(fetchedData));
        localStorage.setItem("firstTime", "false");
      }
    }
    fetchFirstVisit();
    setTimeout(function () {
      localStorage.setItem("refreshed", "true");
      window.location.reload();
    }, 30000);
  }

  useEffect(() => {
    let interval = setInterval(async () => {
      const res = await axios
        .get(`https://oyster-app-tmgo4.ondigitalocean.app/bin`)
        .then((res) => res.data)
        .catch((err) => err);
      setFetchedData(res);
    }, 90000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("lowestBin") !== null) {
      localStorage.setItem("firstTime", "false");
    }
    if (fetchedData) {
      localStorage.setItem("lowestBin", JSON.stringify(fetchedData));
    }
  }, [fetchedData]);

  return (
    <div>
      {localStorage.getItem("firstTime") &&
      localStorage.getItem("refreshed") &&
      localStorage.getItem("lowestBin") ? (
        ""
      ) : (
        <div className="container">
          <div className="firstTimeContainer">
            <p className="firstTimeMessage">
              As this is your first time using the flipper, it requires 30s to
              fetch everything. This will only happen on your first usage.
            </p>
            <Loader />
          </div>
        </div>
      )}
    </div>
  );
};

export default LowBinData;
