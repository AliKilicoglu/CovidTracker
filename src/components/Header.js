import React, { Component } from 'react';
import Card from './Card/Card'
import './Card/card.css'
import { DisappearedLoading } from 'react-loadingg';
import Switch from "react-switch";
class Header extends Component {
    state = {
        loading:true,
        data: null,
        checked: false
    };
 
    async componentDidMount() {
        const url = "https://api.apify.com/v2/key-value-stores/28ljlt47S5XEd1qIi/records/LATEST?disableRedirect=true";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data: data, loading: false });
        console.log(this.state.data);
    } 
    
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick() {
        var checked = !this.state.checked
        this.setState({ checked });
        console.log(checked);
      }
    
    
    render() {
        return (
            <div>
                {this.state.loading ? ( <DisappearedLoading />) : this.state.checked ? (<div>
                <h1 className="bold-text">Covid 19 Tracker</h1>
                <div className="space"/>
                <br/>
                <br/>
                <div className="center">

                    <Card value={this.state.data.infected}text="Toplam Vaka" classname="infected"></Card>
                    <div className="space"/> 
                    <Card value={this.state.data.deceased}text="Toplam Ölüm" classname="deaths"></Card>
                    <div className="space"/> 
                    <Card value={this.state.data.recovered}text="Toplam İyileşen" classname="recovered"></Card>
                  

                </div>
                <div><br/><br/></div>
                <div className="center">
                    <Card value={this.state.data.tested}text="Toplam Test" classname="tests"></Card>
                </div>
                <div className="left-corner">
                <label className="light-text">
                    Günlük veriler
                    <Switch onChange={this.handleClick} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false}  />
                </label>
                </div>
                </div>) :<div>
                <h1 className="bold-text">Covid 19 Tracker</h1>
                <div className="space"/>
                <br/>
                <br/>
                <div className="center">

                    <Card value={this.state.data.dailyInfected}text="Günlük Vaka" classname="infected"></Card>
                    <div className="space"/> 
                    <Card value={this.state.data.dailyDeceased}text="Günlük Ölüm" classname="deaths"></Card>
                    <div className="space"/> 
                    <Card value={this.state.data.dailyRecovered}text="Günlük İyileşen" classname="recovered"></Card>
                  

                </div>
                <div><br/><br/></div>
                <div className="center">
                    <Card value={this.state.data.dailyTested}text="Günlük Test" classname="tests"></Card>
                </div>
                <div className="left-corner">
                <label className="light-text">
                    Toplam veriler 
                    <Switch onChange={this.handleClick} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false}  />
                </label>
                </div>
                </div>}
            </div>
            
        );
    }
}

export default Header;
