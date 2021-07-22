import React from "react";
import PropTypes from "prop-types";

import { noop } from "../../utils";

const FlexInput = ({
  refy,
  type,
  name,
  value,
  title,
  className,
  inputChange,
  placeholder,
}) => {
  return (
    <input
      ref={refy}
      type={type}
      name={name}
      value={value}
      title={title}
      onChange={inputChange}
      className={className}
      placeholder={placeholder}
    />
  );
};

FlexInput.propTypes = {
  refy: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  inputChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

FlexInput.defaultProps = {
  refy: noop,
  type: "text",
  name: "text",
  value: undefined,
  inputChange: noop,
  className: "",
  placeholder: "input password",
};
export default FlexInput;
