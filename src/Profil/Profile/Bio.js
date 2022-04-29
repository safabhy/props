import React from "react";
import PropTypes from "prop-types";

 function Bio(props) {
  return (
    <div>
      <p>{props.text} </p>
      
    </div>
  );
}

Bio.propTypes = {
  text: PropTypes.string
};

Bio.defaultProps = {
  text: 'Default'
};
export default Bio;