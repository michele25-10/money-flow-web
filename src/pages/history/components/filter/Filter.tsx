import { useState } from "react";

import "./filter.scss";

import { user } from "./data";

import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Select, { components } from "react-select";

const Filter = () => {
  const InputOption = ({
    getStyles,
    Icon,
    isDisabled,
    isFocused,
    isSelected,
    children,
    innerProps,
    ...rest
  }) => {
    const [isActive, setIsActive] = useState(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);
    const onMouseLeave = () => setIsActive(false);

    // styles
    let bg = "transparent";
    if (isFocused) bg = "#eee";
    if (isActive) bg = "#B2D4FF";

    const style = {
      alignItems: "center",
      backgroundColor: "white",
      color: "black",
      display: "flex ",
      gap: "5px",
    };

    // prop assignment
    const props = {
      ...innerProps,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
      style,
    };

    return (
      <components.Option
        {...rest}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isSelected={isSelected}
        getStyles={getStyles}
        innerProps={props}
      >
        <input type="checkbox" checked={isSelected} />
        {children}
      </components.Option>
    );
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="filterForm">
      <div className="title">
        <h1>Filtro</h1>
      </div>
      <div className="filterFormElement">
        <div className="selectLayer">
          <Select
            defaultValue={[]}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            onChange={(options) => {
              if (Array.isArray(options)) {
                setSelectedOptions(options.map((opt: any) => opt.value));
              }
            }}
            options={user}
            components={{
              Option: InputOption,
            }}
          />
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
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
