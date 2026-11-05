import { useState, useEffect } from "react";
import "./Home.css";

const win = [
  ["11", "12", "13"],
  ["11", "21", "31"],
  ["11", "22", "33"],
  ["12", "22", "32"],
  ["13", "23", "33"],
  ["21", "22", "23"],
  ["31", "32", "33"],
  ["31", "22", "13"],
];

const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Home = () => {
  let [player, setPlayer] = useState(0);
  let [positions, setPositions] = useState({});
  let [playerAName, setPlayerA] = useState(
    JSON.parse(localStorage.getItem("userData"))?.name
  );
  let [playerBName, setPlayerB] = useState("");
  let [winBlock, setWinBlock] = useState([]);
  let [matchStarted, setMatchStarted] = useState(false);

  useEffect(() => {
    setPlayerA(localStorage.getItem("playerA"));
    setPlayerB(localStorage.getItem("playerB"));
  }, []);

  const onGridTap = async (row, col, person) => {
    if (!playerAName || !playerBName) {
      alert("Please enter player names");
      return;
    }
    if (positions[`${row}${col}`] == undefined) {
      console.log(row, col, person);
      setPlayer(player ? 0 : 1);
      positions[`${row}${col}`] = person;
      setPositions({ ...positions });
      console.log("positions ", positions);
      await delay(500);
      let playerA = [];
      let playerB = [];

      for (let i = 0; i < Object.keys(positions).length; i++) {
        if (positions[Object.keys(positions)[i]] == 0) {
          playerA.push(Object.keys(positions)[i]);
        } else {
          playerB.push(Object.keys(positions)[i]);
        }
      }
      console.log("PlayerA", playerA);
      console.log("PlayerB", playerB);

      let isWon = false;
      for (let i = 0; i < win.length; i++) {
        let winSort = win[i].sort().join("");
        console.log("winSort", winSort);
        console.log("PlayerA", playerA.sort().join(""));
        console.log("PlayerB", playerB.sort().join(""));
        if (winSort == playerA.sort().join("")) {
          console.log(`${playerA} Won`);
          alert(`${playerAName} Won`);
          isWon = true;
          setWinBlock(win[i].sort());
          console.log("test1 ", win[i].sort(), typeof win[i].sort());
          break;
        } else if (winSort == playerB.sort().join("")) {
          console.log(`${playerB} Won`);
          alert(`${playerAName} Won`);
          isWon = true;
          setWinBlock(win[i].sort());
          console.log("test2 ", win[i].sort(), typeof win[i].sort());
          break;
        }
      }

      await delay(500);
      if (Object.keys(positions).length == 8 || isWon) {
        console.log("reset");
        setPositions({});
        setPlayer(0);
        setWinBlock([]);
      }
    } else {
      console.log("already selected");
    }
  };
  return (
    <div
      className="bg-dark text-center d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <div className="text-light mb-3 d-flex justify-content-space-between">
        <div className="me-5">
          <label className="form-label">P1</label>{" "}
          <input
            className="form-control"
            placeholder="player A"
            value={playerAName}
            onChange={(e) => {
              setPlayerA(e.target.value);
              localStorage.setItem("playerA", e.target.value);
            }}
            disabled
          />
        </div>
        <b>XOXO</b>
        <div className="ms-5">
          <label className="form-label">P2</label>{" "}
          <input
            className="form-control"
            placeholder="player B"
            value={playerBName}
            onChange={(e) => {
              setPlayerB(e.target.value);
              localStorage.setItem("playerB", e.target.value);
            }}
            disabled
          />
        </div>
      </div>
      {matchStarted ? (
        <>
          <div className="text-light mb-3 ">
            Player: <b>{player ? playerBName : playerAName}</b>
          </div>

          <div className="square border bg-light  row p-0 m-0 g-0">
            <div
              className={`col-md-4 box ${
                winBlock.includes("11")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(1, 1, player)}
            >
              {positions["11"] != undefined ? (
                <img
                  className={`img-fluid p-4`}
                  src={
                    positions["11"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("12")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(1, 2, player)}
            >
              {positions["12"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["12"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("13")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(1, 3, player)}
            >
              {positions["13"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["13"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("21")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(2, 1, player)}
            >
              {positions["21"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["21"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("22")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(2, 2, player)}
            >
              {positions["22"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["22"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("23")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(2, 3, player)}
            >
              {positions["23"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["23"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("31")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(3, 1, player)}
            >
              {positions["31"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["31"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("32")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(3, 2, player)}
            >
              {positions["32"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["32"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <div
              className={`col-md-4 box ${
                winBlock.includes("33")
                  ? "bg-success border border-5"
                  : "border border-5 border-dark"
              }`}
              onClick={() => onGridTap(3, 3, player)}
            >
              {positions["33"] != undefined ? (
                <img
                  className="img-fluid p-4"
                  src={
                    positions["33"] ? "/assets/close.png" : "/assets/cross.png"
                  }
                />
              ) : (
                ""
              )}
            </div>
            <button
              className="btn btn-light mt-2 text-color-dark"
              onClick={() => {
                setPositions({});
                setPlayer(0);
                localStorage.clear();
                setPlayerA("");
                setPlayerB("");
              }}
            >
              <i>
                <b>clear</b>
              </i>
            </button>
          </div>
        </>
      ) : (
        <p className="text-light d-flex flex-column">
          "Waiting for opponent to join..."
          <button className="btn btn-info">Post Invite</button>
        </p>
      )}
    </div>
  );
};

export default Home;
