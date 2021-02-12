import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';


function KegMenu(props){
  return(
    <React.Fragment>
      {props.kegMenu.map((keg) =>
        <Keg
          brand={keg.brand}
          flavor={keg.flavor}
          kegPrice={keg.kegPrice}
          pricePerPint={keg.pricePerPint}
          pintsRemaining={keg.pintsRemaining}
          id={keg.id}
          key={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegMenu.propTypes = {
  kegMenu: PropTypes.array
}

export default KegMenu;