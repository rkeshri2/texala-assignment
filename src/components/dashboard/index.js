import React, { useState } from "react";
const Dashboard = () => {
  const [panel, setPanel] = useState([
    [false, false],
    [false, false],
  ]);

  const selectGridType1 = (rowindex, colindex) => {
    setPanel((prev) => {
      return prev.map((row) => {
        panel[rowindex][colindex] = true;
        return [...row, false];
      });
    });
  };

  const selectGridType2 = (rowindex, colindex) => {
    setPanel((prev) => {
      return prev.map((row) => {
        panel[rowindex][colindex] = true;
        return [...row];
      });
    });
  };

  const selectGrid = (e, rowindex, colindex) => {
    const [firstIndex] = panel;
    if (rowindex == 0 && colindex == firstIndex.length - 1) {
      if (!e.target.classList.contains("selected")) {
        //  console.log("first row last column");
        panel.unshift(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            return [...row, false];
          });
        });
      }
    } else if (rowindex == 0 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        //   console.log("first row first column");
        panel.unshift(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
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
        //    console.log("first row not first and last column");
        panel.unshift(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            return [...row];
          });
        });
      }
    } else if (
      rowindex == panel.length - 1 &&
      colindex == firstIndex.length - 1
    ) {
      if (!e.target.classList.contains("selected")) {
        //    console.log("last row last column");
        panel.push(firstIndex);
        selectGridType1(rowindex, colindex);
      }
    } else if (rowindex == panel.length - 1 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        //    console.log("last row first column");
        panel.push(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
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
        //   console.log("last row not first and last column");
        panel.push(firstIndex);
        selectGridType2(rowindex, colindex);
      }
    } else if (
      rowindex != 0 &&
      rowindex != panel.length - 1 &&
      colindex != firstIndex.length - 1 &&
      colindex != 0
    ) {
      if (!e.target.classList.contains("selected")) {
        //  console.log("not first row and last row and not first and last column");
        selectGridType2(rowindex, colindex);
      } else {
        // console.log(
        //   "not first row and last row and not first and last column clicked again"
        // );
        setPanel((prev) => {
          return prev.map((row) => {
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
        //  console.log("not first row and last row and mid last column");
        selectGridType1(rowindex, colindex);
      }
    } else if (rowindex != 0 && rowindex != panel.length - 1 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        //     console.log("not first row and last row and mid first column");
        setPanel((prev) => {
          return prev.map((row) => {
            row.unshift(false);
            return row;
          });
        });
      }
    }
  };

  const bodyClick = (e) => {
    const tdList = document.getElementsByTagName("td");
    if (e.target.nodeName == "DIV") {
      for (let i = 0; i < tdList.length; i++) {
        tdList[i].style.border = 0;
      }
    } else {
      for (let i = 0; i < tdList.length; i++) {
        tdList[i].removeAttribute("style");
      }
    }
  };

  const renderPanel = () => {
    return panel.map((row, rowindex) => {
      return (
        <tr key={`rowindex_${rowindex}`}>
          {row.map((col, colindex) => {
            return (
              <td
                key={`colindex${colindex}`}
                className={(col || 0) && "selected"}
                onClick={(e) => selectGrid(e, rowindex, colindex)}
              ></td>
            );
          })}
        </tr>
      );
    });
  };
  return (
    <div id="container" onClick={(e) => bodyClick(e)}>
      <table cellPadding="0" cellSpacing="0" className="panelbox">
        <tbody>{renderPanel()}</tbody>
      </table>
    </div>
  );
};

export default Dashboard;
