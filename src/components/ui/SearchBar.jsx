const SearchBar = () => {
    return (
        <>
            <div className="form-outline bg-light rounded d-flex mt-5">
                <input type="search" id="search"
                    className="form-control form-control-lg" placeholder="search"
                    style={{ minWidth: "45vh" }}
                />

                <button type="button" className="btn btn-light">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
        </>
    )
}

export default SearchBar;