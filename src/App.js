import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "./components/CardSkeleton";

function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole"
        )
        .then((res) => setUserList(res.data));
      setIsLoading(false);
    }, 200);
  }, []);
  console.log(userList);
  return (
    <div className="App">
      <SkeletonTheme highlightColor="#e8ffd1">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          userList.map((user) => (
            <div className="card">
              <img src={`https://joesch.moe/api/v1/${user.first}`} alt="user" />
              <h1>
                {user.first} {user.last}
              </h1>
              <h2>{user.email}</h2>
              <h3>{user.address}</h3>
            </div>
          ))
        )}
      </SkeletonTheme>
    </div>
  );
}

export default App;
