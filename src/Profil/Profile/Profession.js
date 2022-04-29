import React from 'react';
import PropTypes from 'prop-types';
function Profession  (props) {
    return (
        <div>
             <p>I'm safa {props.text} </p>
       <p>Developper Frontend</p>
        </div>
    );
};
Profession.propTypes = {
    text: PropTypes.string
  };
  
  Profession.defaultProps = {
    text: 'Default'
  };
export default Profession;