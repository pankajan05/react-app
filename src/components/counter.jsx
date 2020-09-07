import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0,
        imgurl:"http://taxivinalescuba.com/img/backslider/2.jpg"
     }
    render() { 
        return  (
            <React.Fragment>
                <img src={this.state.imgurl} width="100%" alt=""/>
                <h1 className="badge badge-primary m-2">{this.formatCount()}</h1>
                <button className="btn btn-secondary btn-sm">Icrement</button>
            </React.Fragment>
            );
    }

    formatCount() {
        return this.state.count === 0 ? 'zero' : this.state.count;
    }
}
 
export default Counter;