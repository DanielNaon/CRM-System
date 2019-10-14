import React, { Component } from 'react';

import TopChart from './TopChart'
import TopSales from './TopSales.js';

class Charts extends Component {
    render() {
        return (
            <div className="graphsContainer">
              <span><h2>Top Employees:</h2>  <TopChart data={this.props.data} /></span>
              <span><h2>Sales by Country:</h2>  <TopSales data={this.props.data}/></span>
            </div>
        )
    }
}

export default Charts;