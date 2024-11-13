import {Component} from "react";
import NavBar from "./NavBar.jsx";

const HOC = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <>
                    <NavBar />
                    <WrappedComponent />
                </>
            );
        }
    };
};
export default HOC;