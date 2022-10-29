import React from "react";
import logo from '../logo.svg';

interface HomePageProps {}

class HomePage extends React.Component<HomePageProps> {
    render() {
        return <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>;
    }
}
export default HomePage;
