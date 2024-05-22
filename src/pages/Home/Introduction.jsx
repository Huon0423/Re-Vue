import Button from 'react-bootstrap/Button';

const Introduction = () => {
    return (
        <>
            <div className="d-flex flex-row justify-content-center">
                <div className="w-25 shadow p-1 bg-body rounded">
                    <img src="src/assets/img/apart.jpg" alt="홍?보?"
                        style={{
                            width: "100%",
                            height: "100%",
                        }} />
                </div>
                <div className="">
                    <h5>아파트 매매만 연간</h5>
                    <h1>20,000,000 회</h1>
                    <div className="d-flex flex-row">
                        <div>
                            <p>
                                설명글1
                            </p>
                            <p>
                                설명글2
                            </p>
                        </div>
                        <a href="/map">GoToMAP</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;