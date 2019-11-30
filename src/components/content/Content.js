import React, { Component } from 'react';
import NavBarContent from '../nav-bar/NavBarContent';
import Footer from '../footer/Footer';
import CountrySelect from '../country-select/CountrySelect';
import Country from '../country/Country';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import '../../App.scss';

class Content extends Component {
    render() {
        console.log(this.props.match)
        return (
            <>
            <nav>
            <NavBarContent />
            </nav>
            <main>
                <Switch>
                <Route path="/countries" exact component={CountrySelect} />
                <Route path="/countries/:id" exact component={Country} />
                </Switch>
            </main>
            <footer>
            <Footer />
            </footer>
            </>
        )
    }
}

export default Content



