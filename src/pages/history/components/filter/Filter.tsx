import "./filter.scss";

import { user } from "./data";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Filter = () => {
  return (
    <div className="filterForm">
      <div className="selectLayer">
        <select
          className="form-select"
          aria-label="Utenti"
          aria-placeholder="Utenti"
        >
          <option value={""} selected>
            Utenti
          </option>
          {user.map((item) => (
            <option>
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
              ></input>
            </option>
          ))}
        </select>
      </div>
      <div className="inputLayer">
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          step="1"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Anno"
        />
      </div>
      <div className="span">
        <FilterAltIcon
          style={{
            color: "white",
            height: "30px",
            width: "30px",
          }}
        />
      </div>
    </div>
  );
};

export default Filter;
