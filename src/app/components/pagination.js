
function Pagination({ handlePagination, length }) {

    let amountOfPag = []
    for (let i = 1; i <= length; i++) {
        amountOfPag.push(i)
    }
    return (

        <div className="pagination-container">
            {amountOfPag.map((pag) => {
                return <button onClick={() => handlePagination(pag)} key={pag}>{pag}</button>
            })}
        </div>
    )
}



export default Pagination;