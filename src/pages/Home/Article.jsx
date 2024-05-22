import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Article = () => {
  return (
    <>
      <div className="d-flex flex" >
        <div style={{
          backgroundColor: "gainsboro", position: "absolute",
          height: "11em", end: "0", width: "100vw", left: "0",
          alignSelf: "end"
        }}></div>
        <div className="card w-25 m-2">
          <img src="src/assets/img/house.jpg" alt="Home" className="d-block w-100" />
          <div className="card-body">
            <h4 className="card-title">Home</h4>
          </div>
          <a href="https://realty.daum.net/"
            className="btn btn-dark w-75 align-self-center mb-3">GoToHome</a>
        </div>
        <div className="card w-25 m-2">
          <img src="src/assets/img/interior.jpg" alt="Interior" className="d-block w-100" />
          <div className="card-body ">
            <h4 className="card-title">Interior</h4>
          </div>
          <a href="https://interior.realestate.daum.net/asp/main/Main.do"
            className="btn btn-dark w-75 align-self-center mb-3">GoToInterior</a>
        </div>
        <div className="card w-25 m-2">
          <img src="src/assets/img/news.jpg" alt="News" className="d-block w-100" />
          <div className="card-body">
            <h4 className="card-title">News</h4>
          </div>
          <a href="https://realestate.daum.net/news"
            className="btn btn-dark w-75 align-self-center mb-3">GoToNews</a>
        </div>
        <div className="card w-25 m-2">
          <img src="src/assets/img/community.jpg" alt="Community" className="d-block w-100" />
          <div className="card-body">
            <h4 className="card-title">Community</h4>
          </div>
          <a href="https://realestate.daum.net/community"
            className="btn btn-dark w-75 align-self-center mb-3">GoTOCommunity</a>
        </div>
      </div>
    </>
  )
}

export default Article;
