import { useEffect, useState } from "react";
import { customGet } from "./helpers/customGet.js";
import { getRandimindex } from "./helpers/getRandimindex.js";
import Quote from "./components/Quote.jsx";
import "./App.css";

const App = () => {
    const initialState = {
        author: "",
        content: ""
    }
    const [loading, setLoading] = useState(false);
    const [quote, setQuote] = useState(initialState);
    const [bg, setBg] = useState(null);
    const fetchData = async () => {
        const quoteURl = 'https://api.quotable.io/random';
        const bgURL = 'https://my-json-server.typicode.com/KiKDraS/colors/list';
        setLoading(true);
        try {
            const [quoteRes, bgRes] = await Promise.all([
                customGet(quoteURl),
                customGet(`${bgURL}/${getRandimindex()}`)
            ]).catch((error) => {
                error.text = 'No se pudo obtener la cita'
                throw error;
            });
            setQuote({
                author: quoteRes.author,
                content: quoteRes.content
            });
            setBg(bgRes.hex);
        } catch (error) {
            setQuote({
                author: "",
                content: error.text
            });
            setBg(null);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();

    }, []);
    return <div style={{ backgroundColor: `${bg}` }}>
        <Quote quote={quote} loading={loading} fetchData={fetchData}></Quote>
    </div>;
}

export default App;