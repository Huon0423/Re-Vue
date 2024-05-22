import { useState } from "react";
import Map from "./Map";
import MapData from "./MapData";
import SearchBar from "../../components/ui/SearchBar";
import NavBar from "../../components/ui/NavBar";

// default export 함수
const MapPage = () => {
    const [location, setLocation] = useState({ lat: 37.3595704, lon: 127.105399 });

    const handleAptCardClick = (location) => {
        setLocation(location);
        console.log(`Location updated: ${location.lat}, ${location.lon}`);
    };

    return (
        <>
            <div className="container">
                <NavBar></NavBar>
                <div className="row mt-3">
                    <Map location={location}></Map>
                    <div className="col-md-2 position-absolute"
                        style={{ left: "5rem", marginTop: "4rem" }}>
                        <MapData onAptCardClick={handleAptCardClick}></MapData>
                    </div>
                    <div className="input-group position-absolute p-0"
                        style={{
                            zIndex: "991",
                            maxWidth: "54vh",
                            marginTop: "2rem",
                            left: "50rem",
                        }}>
                        <SearchBar></SearchBar>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapPage;