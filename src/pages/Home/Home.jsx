import NavBar from "../../components/ui/NavBar";
import SearchBar from "../../components/ui/SearchBar";
import Video from "./Video";
import Introduction from "./Introduction";
import Article from "./Article";

const Home = () => {

    return (
        <>
            <NavBar></NavBar>
            <div className="container mt-3" >
                <div className="row d-flex justify-content-center">
                    <Video></Video>
                    <div className="input-group position-absolute p-0"
                        style={{
                            zIndex: "991",
                            maxWidth: "54vh",
<<<<<<< HEAD
                            marginTop: "40rem",
=======
                            marginTop: "42rem",
>>>>>>> 18f629b038b1ea12dc6afe95ddb8f9380fa93fb4
                        }}
                    >
                        <SearchBar></SearchBar>
                    </div>
                </div>

                <Introduction></Introduction>
                <Article></Article>
            </div >
        </>
    )
}

export default Home;