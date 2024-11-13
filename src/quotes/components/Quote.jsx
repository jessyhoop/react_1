import Loader from "./Loader";
import "./Quote.css";

const Quote = ({ quote, loading, fetchData }) => {
    return <div className="container">
        {loading ? <Loader /> :
            <div className="blockquote-wrapper">
                <div className="blockquote">
                    <h1 >{quote.content}</h1>
                    <h4>&mdash;{quote.author}</h4>
                    <button className="button" type="button" onClick={fetchData}>Next</button>
                </div>
            </div>
        }
    </div>
};

export default Quote;