import React from "react";
import { Rate } from "antd";
const desc = [1, 2, 3, 4, 5];

function FilByRate(props) {
  // const [value, setValue] = useState(3);
  return (
    <span style={{ paddingRight: "4%" }}>
      <Rate
        tooltips={desc}
        onChange={props.setFilterRate}
        value={props.filterRate}
      />
      {/* {props.filterRate ? (
        // <span className="ant-rate-text">{desc[props.filterRate - 1]}</span>
      ) : (
        ""
      )} */}
    </span>
  );
}

export default FilByRate;
