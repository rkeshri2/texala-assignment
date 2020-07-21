import React, { useState } from "react";
import jsonpatch from "jsonpatch";
import ReactJson from "react-json-view";
const Dashboard = () => {
  const [jsonObj, setJsonObj] = useState({
    obj: "",
    patch: "",
  });
  const [mergedObj, setMergedObj] = useState();
  const [operations, setOperations] = useState([]);

  const getJsonObj = (e) => {
    setJsonObj({ ...jsonObj, [e.target.name]: e.target.value });
  };

  const reviewPatch = () => {
    const patches = JSON.parse(jsonObj.patch);
    const Obj = JSON.parse(jsonObj.obj);
    if (Array.isArray(patches)) {
      patches.map((patch) => {
        let path = patch["path"].split("/");
        path.splice(0, 1);
        const patchDetails = {
          action: patch["op"],
          key: path[0],
          index: path[1],
          to: patch["value"],
        };
        setOperations((prev) => {
          return [
            ...prev,
            patch["op"] == "replace"
              ? {
                  ...patchDetails,
                  from: Array.isArray(Obj[path[0]])
                    ? path.length > 2
                      ? Obj[path[0]][1][path[path.length - 1]]
                      : path.length > 1
                      ? Obj[path[0]][path[path.length - 1]]
                      : Obj[path[0]]
                    : "",
                }
              : {
                  ...patchDetails,
                },
          ];
        });
      });
    }
  };

  const removePatchAfterAcceptOrReject = (patch, index) => {
    setOperations((prev) => {
      [prev.splice(index, 1)];
      return prev;
    });
    patch.splice(index, 1);
    const patchString = JSON.stringify(patch);
    setJsonObj({ ...jsonObj, patch: patchString });
  };

  const merge = (index) => {
    const obj = JSON.parse(jsonObj.obj);
    const patch = JSON.parse(jsonObj.patch);
    let patchedJSON;

    if (!mergedObj) {
      patchedJSON = jsonpatch.apply_patch(obj, [patch[index]]);
    } else {
      patchedJSON = jsonpatch.apply_patch(mergedObj, [patch[index]]);
    }

    setMergedObj(patchedJSON);
    removePatchAfterAcceptOrReject(patch, index);
  };

  const reject = (index) => {
    const patch = JSON.parse(jsonObj.patch);
    removePatchAfterAcceptOrReject(patch, index);
  };

  const returnJSX = (operation, index) => {
    return (
      <div key={index} className="actionblk">
        <h2>Operation: {operation.action} </h2>
        {operation.action == "replace" ? (
          <p className="operationsblk">
            {operation.index && (
              <>
                [<span>{operation.index}:</span>
                <del>{operation.from}</del>
                <span>
                  {typeof operation.key == "object"
                    ? ` ${operation.to.label} - ${operation.to.uri}`
                    : operation.to}
                </span>
                ]
              </>
            )}
          </p>
        ) : (
          <p className="operationsblk">
            {operation.index && (
              <>
                [<span>{operation.index}:</span>
                <span>
                  {operation.key == "external_profiles"
                    ? ` ${operation.to.label} - ${operation.to.uri}`
                    : operation.to}
                </span>
                ]
              </>
            )}
          </p>
        )}
        <p>Path: {operation.key}</p>
        <button className="action" onClick={() => merge(index)}>
          Accept
        </button>
        <button className="reject" onClick={() => reject(index)}>
          Reject
        </button>
      </div>
    );
  };

  return (
    <div id="container">
      <header>Approve and Reject Patch</header>
      <div className="inputblk">
        <div className="jsonobj">
          <p>JSON Object {}</p>
          <textarea
            resizable="false"
            name="obj"
            value={jsonObj.obj}
            onChange={(e) => getJsonObj(e)}
          ></textarea>
        </div>
        <div className="jsonpatch">
          <p>JSON Patch File {}</p>
          <textarea
            resizable="false"
            name="patch"
            value={jsonObj.patch}
            onChange={(e) => getJsonObj(e)}
          ></textarea>
        </div>
      </div>
      <div className="reviewbtn">
        <button className="update" onClick={reviewPatch}>
          Review Patch
        </button>
      </div>
      <div className="mergeblk">
        <div className="actionarea">
          <p className="heading">Compare Patch</p>
          <div>
            {operations.map((operation, index) => {
              return returnJSX(operation, index);
            })}
          </div>
        </div>
        <div className="mergedjson">
          <div className="jsonviewer">
            <ReactJson
              shouldCollapse={false}
              displayObjectSize={false}
              displayDataTypes={false}
              collapsed={false}
              theme="rjv-default"
              src={mergedObj}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
