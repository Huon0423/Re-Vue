import { useEffect, useRef } from 'react';

// default export 함수
const Map = ({ location }) => {
    const mapInstance = useRef(null);

    useEffect(() => {
        initMap();
    }, [location]);

    // Map 시작 설정 함수
    const initMap = () => {

        // Map 옵션 설정
        const mapOptions = {
            zoomControl: true,
            zoomControlOptions: {
                style: naver.maps.ZoomControlStyle.SMALL,
                position: naver.maps.Position.TOP_RIGHT
            },
            // 지도 초기 중심 좌표
            center: new naver.maps.LatLng(location.lat, location.lon),
            // 지도 초기 줌 레벨
            zoom: 15,
            // 지도 최소 줌 레벨
            minZoom: 10,
            // 줌 컨트롤 표시 여부
            zoomControl: true,
            // 지도 유형 컨트롤 표시 여부
            mapTypeControl: true,
            // 줌 컨트롤의 옵션
            zoomControlOptions: {
                // 줌 컨트롤의 위치를 우측 상단으로 배치함
                position: naver.maps.Position.TOP_RIGHT,
            },
            // 지도 데이터 저작권 컨트롤 표시 여부
            mapDataControl: false,
        };

        // 지도 생성
        mapInstance.current = new naver.maps.Map('map', mapOptions);

        // 초기화 후 마커 생성
        const marker = new naver.maps.Marker({
            // 생성될 마커의 위치
            position: new naver.maps.LatLng(location.lat, location.lon),
            // 마커를 표시할 Map 객체
            map: mapInstance.current
        });

        // Marker 클릭 => Map 초기화
        naver.maps.Event.addListener(marker, 'click', () => {
            mapInstance.current?.setCenter(new naver.maps.LatLng(location.lat, location.lng));
            mapInstance.current?.setZoom(16);
        });

        // 지도 클릭 => Marker 생성
        naver.maps.Event.addListener(mapInstance.current, 'click', (e) => {
            marker.setPosition(e.coord);
        });


    }
    return (
        <>
            {/* 위치 정보(지도) */}
            <div id="map"
                style={{
                    height: "95vh", width: "100vw", position: "absolute",
                    left: "0", top: "50px", margin: "0", padding: "0"
                }}>
            </div>
        </>
    )
}

export default Map;