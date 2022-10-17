import React, { useState } from "react";
import "./model.css";
import { dataSource } from "../Files";
import Popup from "reactjs-popup";

const Model = (props) => {
  const [filename, setfilename] = useState("");
  const [version, setversion] = useState("");
  const [filetype, setfiletype] = useState("");
  const [addby, setaddby] = useState("");
  const [date, setdate] = useState("");

  ////collect Values from Model Start/////-------------------------

  const filehandleSubmit = (event) => {
    event.preventDefault();
    setfilename(event.target.value);
  };
  const versionhandleSubmit = (event) => {
    event.preventDefault();
    setversion(event.target.value);
  };
  const typehandleSubmit = (event) => {
    event.preventDefault();
    setfiletype(event.target.value);
  };
  const addbyfilehandleSubmit = (event) => {
    event.preventDefault();
    setaddby(event.target.value);
  };
  const datehandleSubmit = (event) => {
    event.preventDefault();
    setdate(event.target.value);
  };
  ///////-----------------------------------------------collect value from model end-------------------
  const addrow = () => {
    let obj = {
      name: filename,
      ver: version,
      type: filetype,
      addby: addby,
      addon: date,
    };
    dataSource.push(obj);
    setfilename("");
    setversion("");
    setfiletype("");
    setaddby("");
    setdate("");
  };

  return (
    <>
      <Popup trigger={<button className="add-button">Add a file</button>}>
        {(close) => (
          <div class="modal">
            <div class="modal-content">
              {/* <span class="close" onClick={() => close()}>
                &times;
              </span> */}
              <br />
              <h1>Add a File</h1>
              <input
                type="text"
                class="model-input"
                value={filename}
                placeholder="filename"
                onChange={filehandleSubmit}
              />
              <br />

              <input
                type="text"
                class="model-input"
                value={version}
                placeholder="Version"
                onChange={versionhandleSubmit}
              />
              <br />

              <input
                type="text"
                class="model-input"
                value={filetype}
                placeholder="file type"
                onChange={typehandleSubmit}
              />
              <br />

              <input
                type="text"
                class="model-input"
                value={addby}
                placeholder="Added By"
                onChange={addbyfilehandleSubmit}
              />
              <br />

              <input
                type="date"
                class="model-input"
                value={date}
                placeholder="Add On"
                onChange={datehandleSubmit}
              />
              <br />

              <button className="model-cancel-button" onClick={() => close()}>
                Cancel
              </button>
              <button class="model-add-button" onClick={addrow}>
                Add
              </button>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
};
export default Model;
