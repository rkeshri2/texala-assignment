import React, { useState } from "react";
const Dashboard = () => {
  const [panel, setPanel] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const selectGrid = (e, rowindex, colindex) => {
    const [firstIndex] = panel;
    if (rowindex == 0 && colindex == firstIndex.length - 1) {
      if (!e.target.classList.contains("selected")) {
        firstIndex.forEach((item, index) => {
          return (item = false);
        });
        panel.unshift(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            console.log(panel[0]);
            console.log(rowindex, colindex);
            // panel[rowindex][colindex] = true;
            return [...row, false];
          });
        });
      }
    } else if (rowindex == 0 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        console.log("first row first column");
        firstIndex.forEach((item) => {
          return (item = false);
        });
        panel.unshift(firstIndex);
        setPanel((prev) => {
          //console.log(prev, "7sdfsd7f");
          return prev.map((row) => {
            console.log(row, "rowroeor", colindex);
            //panel[rowindex][colindex] = true;
            return [false, ...row];
          });
        });
      }
    } else if (
      rowindex == 0 &&
      colindex != firstIndex.length - 1 &&
      colindex != 0
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("first row not first and last column");
        firstIndex.forEach((item, index) => {
          return (item = false);
        });
        console.log(panel, "before unshift", firstIndex);
        panel.unshift(firstIndex);
        console.log(panel, "after unshift", firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            // panel[rowindex][colindex] = true;
            return [...row];
          });
        });
      }
    } else if (
      rowindex == panel.length - 1 &&
      colindex == firstIndex.length - 1
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("last row last column");
        firstIndex.forEach((item) => {
          return (item = false);
        });
        panel.push(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            panel[rowindex][colindex] = true;
            return [...row, false];
          });
        });
      }
    } else if (rowindex == panel.length - 1 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        console.log("last row first column");
        firstIndex.forEach((item) => {
          return (item = false);
        });
        panel.push(firstIndex);
        setPanel((prev) => {
          //console.log(prev, "7sdfsd7f");
          return prev.map((row) => {
            console.log(row, "rowroeor", colindex);
            panel[rowindex][colindex] = true;
            return [false, ...row];
          });
        });
      }
    } else if (
      rowindex == panel.length - 1 &&
      colindex != firstIndex.length - 1 &&
      colindex != 0
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("last row not first and last column");
        firstIndex.forEach((item) => {
          return (item = false);
        });
        panel.push(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = true;
            return [...row];
          });
        });
      }
    } else if (
      rowindex != 0 &&
      rowindex != panel.length - 1 &&
      colindex != firstIndex.length - 1 &&
      colindex != 0
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("not first row and last row and not first and last column");
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = true;
            return [...row];
          });
        });
      } else {
        console.log(
          "not first row and last row and not first and last column clicked again"
        );
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = false;
            return [...row];
          });
        });
      }
    } else if (
      rowindex != 0 &&
      rowindex != panel.length - 1 &&
      colindex == firstIndex.length - 1
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("not first row and last row and mid last column");
        setPanel((prev) => {
          return prev.map((row) => {
            panel[rowindex][colindex] = true;
            return [...row, false];
          });
        });
      }
    } else if (rowindex != 0 && rowindex != panel.length - 1 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        console.log("not first row and last row and mid first column");
        setPanel((prev) => {
          console.log(prev, "7sdfsd7f");
          return prev.map((row) => {
            console.log(row, "rowroeor", colindex);
            row.unshift(false);
            // panel[rowindex][colindex] = true;
            return row;
          });
        });
      }
    }
  };

  const renderPanel = () => {
    console.log(panel, "renderPanelrenderPanelrenderPanel");
    return panel.map((row, rowindex) => {
      return (
        <tr>
          {row.map((col, colindex) => {
            //   console.log(col, "0sd0fsd0", col[colindex], colindex);
            return (
              <td
                className={(col || 0) && "selected"}
                onClick={(e) => selectGrid(e, rowindex, colindex)}
              ></td>
            );
          })}
        </tr>
      );
    });
  };
  {
    // console.log(panel, "111111111panelpanelpanel");
  }
  return (
    <div id="container">
      <table cellPadding="0" cellSpacing="0" className="panelbox">
        {renderPanel()}
      </table>
    </div>
  );
};

export default Dashboard;
