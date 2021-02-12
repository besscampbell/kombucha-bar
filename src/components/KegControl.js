import React from 'react';
import KegMenu from './KegMenu';
import KegSpecs from './KegSpecs';
import NewKeg from './NewKeg';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInView: false,
      masterKegMenu: [],
      kegInView: null
    };
  }

  handleClick = () =>{
    if(this.state.kegInView != null){
      this.setState({
        formInView: false,
        kegInView: null,
      });
    } else {
      this.setState(prevState => ({
        formInView: !prevState.formInView}));
    }
  }
  render(){
    let visibleNow = null;
    let buttonText = null;
    if(this.state.kegInView != null){
      visibleNow = <KegSpecs />
      buttonText="Booch Menu"
    } else if (this.state.formInView){
      visibleNow = <KegMenu />
      buttonText="+ new Booch"
    } else {
      visibleNow = <NewKeg />
      buttonText="Booch Menu"
    }

    return(
      <React.Fragment>
        {visibleNow}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;