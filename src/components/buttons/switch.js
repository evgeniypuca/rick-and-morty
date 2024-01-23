import './switch.css'

export function Switch({ func }) {
    return (
    <>
        <label className="switch">
            <input onClick={func} type="checkbox" />
            <span className="slider round"></span>
        </label>
    </>
    )
}



// if (isPagination && currentPage < data.info.pages && currentPage >= 1) {
//     setCharacters(() => data.results);
// } else if (!isPagination && currentPage <= data.info.pages && currentPage >= 1) {
//     setCharacters((prevCharacters) => {
//         if (currentPage === 1) {
//             return data.results;
//         } else {
//             return [...prevCharacters, ...data.results];
//         }
//     }
//     )
// } else if (currentPage < 1 || currentPage > data.info.pages - 1 ) {
//     setCurrentPage(1)
// } 