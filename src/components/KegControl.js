import React from 'react';
import KegMenu from './KegMenu';
import KegSpecs from './KegSpecs';
import NewKeg from './NewKeg';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formInView: true,
      masterKegMenu: [],
      kegInView: null
    };
  }

  handleClick = () =>{
    if(this.state.kegInView != null){
      this.setState({
        formInView: false,
        kegInView: null
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

  handleKegInView = (id) => {
    const selectedKeg = this.state.masterKegMenu.filter(keg => keg.id === id)[0];
    this.setState({kegInView: selectedKeg});
  }

  handleRestock = () => {
    const untappedKegs = this.state.kegInView.untappedKegs;
    const restockedKeg = {...this.state.kegInView, untappedKegs:(untappedKegs + 1)};
    const newMasterKegMenu = this.state.masterKegMenu.filter(keg => keg.id !== this.state.kegInView.id).concat(restockedKeg);
    this.setState({kegInView: restockedKeg,
                  masterKegMenu: newMasterKegMenu});
  }

  render(){
    let visibleNow = null;
    let buttonText = null;
    if(this.state.kegInView != null){
      visibleNow = <KegSpecs keg={this.state.kegInView} onRestock={this.handleRestock}/>
      buttonText="Booch Menu"
    } else if (!this.state.formInView){
      visibleNow = <KegMenu kegMenu={this.state.masterKegMenu} onKegSelection={this.handleKegInView}/>
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