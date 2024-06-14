import "../styles/pagination.css"
function Pagination({ handlePagination, length, currentPage }) {

    let amountOfPag = []
    for (let i = 1; i <= length; i++) {
        amountOfPag.push(i)
    }
    return (

        <div className="pagination-container">
            {amountOfPag.map((pag) => {
                if (currentPage === pag) {
                    return <button className="active-pag pagination-list-item" onClick={() => handlePagination(pag)} key={pag}>{pag}</button>
                }
                return <button className="pagination-list-item" onClick={() => handlePagination(pag)} key={pag}>{pag}</button>
            })}
        </div>
    )
}



export default Pagination;