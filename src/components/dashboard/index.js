import React, { useState, useEffect } from "react";
const Dashboard = () => {
  const [panel, setPanel] = useState([
    [{ 0: false }, { 1: false }, { 2: false }],
    [{ 0: false }, { 1: false }, { 2: false }],
    [{ 0: false }, { 1: false }, { 2: false }],
  ]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    document.getElementsByClassName("initblk");
  });

  const selectGrid = (e, rowindex, colindex) => {
    // console.log(e.target, colindex + 1);

    const [firstIndex] = panel;
    //  console.log(colindex, firstIndex.length - 1, rowindex);
    // if (rowindex == 0) {
    //   // panel.unshift(firstIndex);
    //   // setPanel([firstIndex, ...panel]);
    //   // setPanel(panel);
    //   // setPanel((prev) => {
    //   //   return prev.map((row) => {
    //   //     console.log(row, "111111");
    //   //     panel.unshift(0);
    //   //     return panel;
    //   //     // return [...row, row.length];
    //   //   });
    //   //   //    console.log(prev, "4242424");
    //   //   // return [...prev];
    //   // });
    // } else if (rowindex == panel.length - 1) {
    //   panel.unshift(firstIndex);
    //   // setPanel([firstIndex, ...panel]);
    //   setPanel(panel);

    //   // setPanel((prev) => {
    //   //   return prev.map((row) => {
    //   //     console.log(row, "111111");
    //   //     panel.unshift(0);
    //   //     return panel;
    //   //     // return [...row, row.length];
    //   //   });
    //   //   //    console.log(prev, "4242424");
    //   //   // return [...prev];
    //   // });
    // }

    if (rowindex == 0 && colindex == firstIndex.length - 1) {
      if (!e.target.classList.contains("selected")) {
        firstIndex.forEach((item, index) => {
          return (item[index] = false);
        });
        panel.unshift(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = { [colindex]: true };
            return [...row, { [colindex + 1]: false }];
          });
        });
      }
    } else if (rowindex == 0 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        console.log("first row first column");
      }
    } else if (
      rowindex == 0 &&
      colindex != firstIndex.length - 1 &&
      colindex != 0
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("first row not first and last column");
        firstIndex.forEach((item, index) => {
          return (item[index] = false);
        });
        panel.unshift(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = { [colindex]: true };
            return [...row];
          });
        });
      }

      // setPanel(() => {
      //   // panel.unshift(firstIndex);
      //   // return panel;
      //   // panel.push(firstIndex);
      //   panel.splice(0, 1, firstIndex);
      //   return panel;
      //   //  return [...panel, firstIndex];
      // });
      //   console.log(panel, "sdfsdfBelow");
      // setPanel((prev) => {
      //   return prev.map((row, index) => {
      //     console.log(row, "a9dfus0df90sd");
      //     if (index == 0) {
      //       return [...panel, firstIndex];
      //     }e
      //   });
      //   //    console.log(prev, "4242424");
      //   // return [...prev];
      // });
      // setPanel(panel);
      //    console.log(prev, "4242424");
      // return [...prev];
      //});
    } else if (
      rowindex == panel.length - 1 &&
      colindex == firstIndex.length - 1
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("last row last column");
        firstIndex.forEach((item, index) => {
          return (item[index] = false);
        });
        panel.push(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = { [colindex]: true };
            return [...row, { [colindex + 1]: false }];
          });
        });
      }

      // panel.unshift(firstIndex);
      // setPanel((prev) => {
      //   return prev.map((row) => {
      //     console.log(row, "111111");
      //     return [...row, row.length];
      //   });
      //    console.log(prev, "4242424");
      // return [...prev];
      // });
    } else if (rowindex == panel.length - 1 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        console.log("last row first column");
      }
    } else if (
      rowindex == panel.length - 1 &&
      colindex != firstIndex.length - 1 &&
      colindex != 0
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("last row not first and last column");
        firstIndex.forEach((item, index) => {
          return (item[index] = false);
        });
        panel.push(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = { [colindex]: true };
            return [...row];
          });
        });
      }

      // setPanel(() => {
      //   // panel.unshift(firstIndex);
      //   // return panel;
      //   // panel.push(firstIndex);
      //   panel.splice(0, 1, firstIndex);
      //   return panel;
      //   //  return [...panel, firstIndex];
      // });
      //   console.log(panel, "sdfsdfBelow");
      // setPanel((prev) => {
      //   return prev.map((row, index) => {
      //     console.log(row, "a9dfus0df90sd");
      //     if (index == 0) {
      //       return [...panel, firstIndex];
      //     }e
      //   });
      //   //    console.log(prev, "4242424");
      //   // return [...prev];
      // });
      // setPanel(panel);
      //    console.log(prev, "4242424");
      // return [...prev];
      //});
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
            panel[rowindex][colindex] = { [colindex]: true };
            return [...row];
          });
        });
      }

      // panel.unshift(firstIndex);
      // setPanel((prev) => {
      //   return prev.map((row) => {
      //     console.log(row, "111111");
      //     return [...row, row.length];
      //   });
      //    console.log(prev, "4242424");
      // return [...prev];
      // });
    } else if (
      rowindex != 0 &&
      rowindex != panel.length - 1 &&
      colindex == firstIndex.length - 1
    ) {
      if (!e.target.classList.contains("selected")) {
        console.log("not first row and last row and mid last column");
        // firstIndex.forEach((item, index) => {
        //   return (item[index] = false);
        // });
        // panel.unshift(firstIndex);
        setPanel((prev) => {
          return prev.map((row) => {
            //  console.log(panel[rowindex][colindex]);
            //  console.log(rowindex, colindex);
            panel[rowindex][colindex] = { [colindex]: true };
            return [...row, { [colindex + 1]: false }];
          });
        });
      }

      // panel.unshift(firstIndex);
      // setPanel((prev) => {
      //   return prev.map((row) => {
      //     console.log(row, "111111");
      //     return [...row, row.length];
      //   });
      //    console.log(prev, "4242424");
      // return [...prev];
      // });
    } else if (rowindex != 0 && rowindex != panel.length - 1 && colindex == 0) {
      if (!e.target.classList.contains("selected")) {
        console.log("not first row and last row and mid first column");
      }

      // panel.unshift(firstIndex);
      // setPanel((prev) => {
      //   return prev.map((row) => {
      //     console.log(row, "111111");
      //     return [...row, row.length];
      //   });
      //    console.log(prev, "4242424");
      // return [...prev];
      // });
    }

    //  else if (colindex == firstIndex.length - 1) {
    //   console.log("last column except first and last row");
    //   // setPanel((prev) => {
    //   //   return prev.map((row) => {
    //   //     console.log(row, "111111");
    //   //     return [...row, row.length];
    //   //   });
    //   //   //    console.log(prev, "4242424");
    //   //   // return [...prev];
    //   // });
    // } else if (colindex == 0) {
    //   console.log("first row except first and last column");
    //   // setPanel((prev) => {
    //   //   return prev.map((row) => {
    //   //     console.log(row, "9sd9fds9");
    //   //     row.unshift(0);
    //   //     return row;
    //   //     // return [...row, row.length];
    //   //   });
    //   //   //    console.log(prev, "4242424");
    //   //   // return [...prev];
    //   // });
    // }

    // setPanel((prev) => {
    //   console.log(prev);
    //   return [...prev, { 2: "", 3: "" }];
    // });
    //   e.target.classList.toggle("selected");
  };

  const renderPanel = () => {
    console.log(panel, "renderPanelrenderPanelrenderPanel");
    return panel.map((row, rowindex) => {
      return (
        <tr>
          {row.map((col, colindex) => {
            //   console.log(col, "0sd0fsd0", col[colindex]);
            return (
              <td
                className={col[colindex] && "selected"}
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
