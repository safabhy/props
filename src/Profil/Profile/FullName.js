import React from "react";
import PropTypes from 'prop-types';

 function FullName(props) {
 

  return (
    <div  onMouseMove={props.handleName}>
      {props.children}
      <h1> {props.name}</h1>
    </div>
  );
}
FullName.propTypes = {
  name: PropTypes.string
};

FullName.defaultProps = {
  name: 'Default'
};
export default FullName;