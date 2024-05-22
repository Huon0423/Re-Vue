import NavBar from "../../components/ui/NavBar";
import SearchBar from "../../components/ui/SearchBar";
import Video from "./Video";
import Introduction from "./Introduction";
import Article from "./Article";
import Footer from "../../components/ui/Footer";

const Home = () => {

    return (
        <>
            <NavBar></NavBar>
            <div className="mt-3 d-flex justify-content-center">
                <Video></Video>
                <div className="input-group position-absolute p-0"
                    style={{
                        zIndex: "991",
                        maxWidth: "54vh",
                        marginTop: "40rem",
                    }}
                >
                    <SearchBar></SearchBar>
                </div>
            </div>
            {/* <div className="my-3 p-5">
                <Introduction></Introduction>
            </div> */}
            <div className="mb-5 p-5">
                <Article></Article>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Home;