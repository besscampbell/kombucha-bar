import React from 'react';
import PropTypes from 'prop-types';


function Keg(props){

  let availability;
  if(props.pintsRemaining > 10){
    availability = `Approximately ${props.pintsRemaining} pints left in the keg`;
  } else if (props.pintsRemaining > 0) {
    availability = `Almost gone, only about ${props.pintsRemaining} pints left!`;
  } else {
    availability = "Out of Stock";
  }

  return(
    <React.Fragment>
      <h3>{props.brand}: {props.flavor}</h3>
      <h4>{availability}</h4>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string,
  flavor: PropTypes.string,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string
}

export default Keg;