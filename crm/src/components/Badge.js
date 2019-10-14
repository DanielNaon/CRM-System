import React, { Component } from 'react';


class Badge extends Component {
    render() {
        return (
            <span className="badgeInfo">
                <div className="numberBadge">{this.props.arr[1]}</div>
                <div>{this.props.arr[0]}</div>
            </span>
        )
    }
}

export default Badge;