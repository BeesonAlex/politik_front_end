
import React, { Component } from 'react';
import axios from 'axios';
import NavBarContent from '../nav-bar/NavBarContent';
import Footer from '../footer/Footer';
// import BubbleChart from '../bubble-chart/BubbleChart';
import Bar from '../charts/Bar';
import './Budget.scss'

export class Budget extends Component {

    state = {
        partyDetails: {
            platform: {
                socialIssues: [],
                immigration: [],
                domesticPolicy: [],
                healthcare: [],
                environment: [],
                economy: [],
                electoralIssues: [],
                education: [],
                foreignPolicy: [],
                science: [],
                crime: [],
                nationalSecurity: [],
                infrastructureTransportation: [],
            },
            budget: [],
        },
        budgetData: {
            labels:[],
            datasets:[
                {
                    label:"",
                    backgroundColor: "#FDBE11",
                    borderColor: "#FAFAFA",
                    data: [
                        {},
                    ],
                },
            ],

        },
    }


    componentDidMount() {

        axios.get(`http://localhost:8080/data/${window.location.pathname}`)
            .then(response => {
                this.setState({
                    partyDetails: response.data,
                })
                this.setState({

                    budgetData: {
                        labels: this.state.partyDetails.budget.map( item => {
                            return item._id;
                        }),
                        datasets:[
                            {
                                label:"",
                                backgroundColor: "#FDBE11",
                                borderColor: "#FAFAFA",
                                data: this.state.partyDetails.budget.map( item => {
                                    return {x: item.value, y: item._id};
                                }),
                            },
                        ],
            
                    },

                    
                })
        })
            .catch(error => {
                console.log(error)
            })

    }

    render() {
        return (
            <>
                <NavBarContent />
                <div className="budget-wrapper">
                    <div className="budget__budget-details-wrapper">
                        <h1 className="party__party-details--title">{this.state.partyDetails.name} Budget</h1>
                        <p className="budget__title-subheading">Initiative Spending ($ Millions)</p>
                            <Bar type="horizontalBar" data={this.state.budgetData} title="" height={1000} width={30} />
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default Budget