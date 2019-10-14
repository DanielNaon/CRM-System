import React, { Component } from 'react';

import Badge from './Badge'


class Badges extends Component {
    getCountry = () => {
        let data = [...this.props.data]
        let obj = {}
        data.forEach(d => {
            !obj[d.country] ? obj[d.country] = 1 : obj[d.country]++
        })
        let arr = ['Hottest Country']
        let counter = 0
        for (let key in obj) {
            if (obj[key] > counter) {
                counter = obj[key]
                arr[1] = key
            }
        }
        return arr
    }
    getMonthClients = () => {
        let data = [...this.props.data]
        let date = new Date()
        let arr = ['new this month clients', 0]
        data.forEach(d => {
            if (d.firstContact.includes(`-0${date.getMonth() + 1}-`)) {
                arr[1]++
            }
        })
        return arr
    }
    getTotalEmails = () => {
        let data = [...this.props.data]
        let arr = ['Email sents', 0]
        data.forEach(d => {
            if (d.emailType) {
                arr[1]++
            }
        })
        return arr
    }
    getTotalSales = () => {
        let data = [...this.props.data]
        let arr = ['Outsatnding Clients', 0]
        data.forEach(d => {
            if (d.sold === true) {
                arr[1]++
            }
        })
        return arr
    }
    render() {
        return (
            <div className="Badges">
               <span><i class="fas fa-users ipos b1" ></i> <Badge arr={this.getMonthClients()} /></span>
                <span><i class="fas fa-envelope ipos b2"></i><Badge arr={this.getTotalEmails()} /></span>
               <span> <i class="fas fa-chart-line ipos b3"></i><Badge arr={this.getTotalSales()} /></span>
                <span><i class="fas fa-globe-americas ipos b4"></i><Badge arr={this.getCountry()} /></span>
            </div>
        )
    }
}

export default Badges;