import NavBar from "../../components/NavBar.jsx";

const LayoutHoc = (Component) => {
    return ({...props}) => {
        return <>
            <NavBar/>
            <main className="p-3">
            <Component/>
            </main>
        </>
    }
}
export default LayoutHoc;