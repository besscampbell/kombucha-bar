import React from 'react';
import PropTypes from 'prop-types';

function KegSpecs(props) {
  const { keg } = props;

  let availability;
  if(keg.pintsRemaining > 9){
    availability = `Approximately ${keg.pintsRemaining} pints left in the keg`;
  } else if (keg.pintsRemaining > 0) {
    availability = `Almost empty, only about ${keg.pintsRemaining} pints left!`;
  } else {
    availability = "Out of Stock";
  }

  return (
    <React.Fragment>
      <h2>Infomation for {keg.brand}'s {keg.flavor} Kombucha</h2>
      <h3>Keg Price: ${keg.kegPrice}</h3>
      <h3>Price per Pint: ${keg.pricePerPint}</h3>
      <h3>Untapped Kegs: {keg.untappedKegs}</h3>
      <h3>Pints remaining: {availability}</h3>
      <button type="button" onClick={props.onRestock} className="btn btn-primary">Restock</button>
      <button hidden={keg.pintsRemaining === 0} type="button" onClick={props.onBuy} className="btn btn-success">Buy</button>
    </React.Fragment>
  );
}

KegSpecs.propTypes = {
  keg: PropTypes.object
}

export default KegSpecs;