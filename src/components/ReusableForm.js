import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formHandler}>
        <div className="form-group">
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            // value={props.brand}
             />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="flavor"
            placeholder="Flavor"
            // value={props.flavor} 
            />
        </div>
        <div className="form-group">
          <label htmlFor="kegPrice">Keg Price: $</label>
          <input
            type="number"
            name="kegPrice"
            placeholder="0.00"
            min="0"
            step="0.01"
            // value={props.kegPrice} 
            />
        </div>
        <div className="form-group">
          <label htmlFor="pricePerPint">Price per Pint: $</label>
          <input
            type="number"
            name="pricePerPint"
            placeholder="0.00"
            min="0"
            step="0.01"
            // value={props.pricePerPint} 
            />
        </div>
        <div className="form-group">
          <label htmlFor="pintsRemaining">Pints remaining:</label>
          <input
            type="number"
            name="pintsRemaining"
            placeholder="124"
            min="0"
            // value={props.pintsRemaining}
             />
          </div>
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formHandler: PropTypes.func,
  buttonText: PropTypes.string,

}

export default ReusableForm;