

export default function SearchBar() {
    return (
        <div class="container">
            <div class="row height d-flex justify-content-center align-items-center">
                <div class="col-md-6">
                    <div class="search search-container">
                        <i class="fa fa-search"></i>
                        <input type="text" class="form-control" placeholder="Search"/>
                        <button class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}