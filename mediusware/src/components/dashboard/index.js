import React, { Component } from 'react';

import axios from 'axios';
const APIKEY = 'add075e6f76426f0a2cce47a0d6d5f07';

class Dashboard extends Component {

      state = {

      weather: {},

      city: '',      

      coord: {},

      wind: {},

      icon: '',

      sys:{},

      description:'',

      wind : {},

      error: false

    }

   data= async ()=> {
    const data = await fetch("https://geo.ipify.org/api/v1?apiKey=at_1MlpVwjRsyJwVSVN7iHMN8l6KtuaZ&ipAddress=103.205.71.138");

    const addressdata = await data.json();

    console.log(addressdata);

    // const wdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${addressdata.location.city},${addressdata.location.country}&APPID=${APIKEY}`); api.openweathermap.org/data/2.5/weather?lat=35&lon=139

    const wdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${parseInt(addressdata.location.lat)}&lon=${parseInt(addressdata.location.lon)}&APPID=${APIKEY}`);

    const weatherData = await wdata.json();

    console.log(weatherData);
    
  }

  

  componentDidMount(){
  
this.data();
  }

  render() { 
    return (

      <>
        <div>
          <div className="row">
            <div className="col-md-3 col-sm-4 header">
              <div className="logo">
                <img src="/Icon/equidesk.png" alt="" />
              </div>
            </div>
            <div className="col-md-9 col-sm-8 dashboard-header">
              <p className="dash">Dashboard</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-4 menu-items">
              <div className="icon-area">
                <div className="icon">
                  <ul>
                    <li><span><i class="fas fa-grip-horizontal"></i></span></li>
                    <li><span><i class="fas fa-envelope-square"></i></span></li>
                    <li><span><i class="fas fa-calendar-week"></i></span></li>
                  </ul>
                </div>
              </div>

              <nav className="nav flex-column item-hover">
                <a className="nav-link active" href="#"><span className="mdi mdi-home"></span>Dashboard</a>
                <a className="nav-link" href="#"><span><i style={{ transform: 'rotate(280deg)' }} className="fas fa-wrench"></i></span>Work Orders</a>
                <a className="nav-link " href="#"><span><i class="fas fa-tag"></i></span>Assets</a>
                <a className="nav-link " href="#"><span><i class="far fa-file"></i></span>Inspections</a>
                <a className="nav-link " href="#">Projects</a>
                <a className="nav-link " href="#"> <span><i class="fas fa-dollar-sign"></i></span>Invoices</a>
                <a className="nav-link " href="#"> <span><i class="fas fa-users"></i></span>Personal</a>
                <a className="nav-link " href="#">Inventory</a>
                <a className="nav-link " href="#">Reports</a>
              </nav>
            </div>
            <div className="col-md-9 col-sm-8 content">
              <div className="content-head">
                <h1>hello</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Dashboard;