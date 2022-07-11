import React from "react";
import "./Filter.css";
import FilByRate from "./FilByRate";
import FilByTitel from "./FilByTitel";
function Filter(props) {
  return (
    <div className="filter">
      <FilByTitel
        filterName={props.filterName}
        setFilterName={props.setFilterName}
      />
      <FilByRate
        filterRate={props.filterRate}
        setFilterRate={props.setFilterRate}
      />
    </div>
  );
}

export default Filter;
