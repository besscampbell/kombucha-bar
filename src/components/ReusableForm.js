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
            value={props.brand} />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="flavor"
            placeholder="Flavor"
            value={props.flavor} />
        </div>
        <div className="form-group">
          <label for="kegPrice">Keg Price: $</label>
          <input
            for="kegPrice"
            type="float"
            name="kegPrice"
            placeholder="0.00"
            min="0"
            value={props.kegPrice} />
        </div>
        <div className="form-group">
          <label for="pricePerPint">Price per Pint: $</label>
          <input
            for="pricePerPint"
            type="float"
            name="pricePerPint"
            placeholder="0.00"
            min="0"
            value={props.pricePerPint} />
        </div>
        <div className="form-group">
          <label for="pintsRemaining">Pints remaining:</label>
          <input
            for="pintsRemaining"
            type="number"
            name="pintsRemaining"
            placeholder="124"
            min="0"
            value={props.pintsRemaining} />
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