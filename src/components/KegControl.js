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

  handleAddNewKeg = (newKeg) =>{
    const newMasterKegMenu = this.state.masterKegMenu.concat(newKeg);
    console.log(newKeg);
    console.log(newMasterKegMenu);
    this.setState({masterKegMenu: newMasterKegMenu,
                  formInView: false});
  }
  render(){
    let visibleNow = null;
    let buttonText = null;
    if(this.state.kegInView != null){
      visibleNow = <KegSpecs />
      buttonText="Booch Menu"
    } else if (this.state.formInView){
      visibleNow = <KegMenu kegMenu={this.state.masterKegMenu}/>
      buttonText="+ new Booch"
    } else {
      visibleNow = <NewKeg onNewKeg={this.handleAddNewKeg}/>
      buttonText="Booch Menu"
    }

    return(
      <React.Fragment>
        <button onClick={this.handleClick}>{buttonText}</button>
        <hr/>
        {visibleNow}
      </React.Fragment>
    );
  }
}

export default KegControl;