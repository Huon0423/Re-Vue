import { useState, useEffect } from "react";
import MapAxios from "../../apis/MapAxios";

import "../../assets/css/Map.css"

const MapData = ({ onAptCardClick }) => {
    const [mapData, setMapData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await MapAxios();
                setMapData(data);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        fetchData();

    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card aptlist">
            {mapData.length > 0 ? (mapData.map((apt) => (
                <div className="card-body m-3" key={apt.aptName}
                    onClick={
                        () => onAptCardClick({
                            lat: apt.lat, lon: apt.lon
                        })}

                    style={{ backgroundColor: "GAINSBORO" }}>
                    <h5 className="card-title">{apt.aptName}</h5>
                    <p className="card-text">{apt.floor}</p>
                    <p className="card-text">{apt.exclusiveArea}</p>
                    <p className="card-text">{apt.legalDong}</p>
                    <p className="card-text">{apt.price}</p>
                    <p className="card-text">{apt.constructionYear}</p>
                </div>
            ))
            ) : (
                <div>No data available</div>
            )}
        </div>
    )
}

export default MapData;