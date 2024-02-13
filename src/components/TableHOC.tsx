import { Column, TableOptions, useTable,useSortBy,usePagination } from "react-table"
import { AiOutlineSortAscending,AiOutlineSortDescending } from "react-icons/ai";


function TableHOC<T extends Object>(
    columns:Column<T>[],
    data:T[],
    containerClassname:string,
    heading:string,
    showPagination:boolean = false,
    ){

    return function HOC(){
        try {
        const options:TableOptions<T>={
            columns,
            data,
            initialState:{
                pageSize:5,
            }
        }

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            page,
            prepareRow,
            nextPage,
            previousPage,
            canNextPage,
            canPreviousPage, 
            pageCount,
            state:{pageIndex}, 
        } = useTable(options,useSortBy,usePagination);

        return ( 
        <div className={containerClassname}>
            <h2 className="heading">{heading}</h2>

            <table className="table" {...getTableProps}>
                <thead>
                    {headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    {
                                        column.isSorted && 
                                        <span>
                                            {" "}
                                            {column.isSortedDesc?(
                                            <AiOutlineSortAscending />
                                            ):(
                                            <AiOutlineSortDescending />
                                            )}                                   
                                        </span>
                                    }
                                </th>
                                ))
                            }
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row)=>{
                         prepareRow(row);
                         return (
                            <tr {...row.getRowProps()}>
                                {
                                row.cells.map((cell) => (
                                    <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                         );
                        }
                    )}

                </tbody>
            </table>
            {showPagination && (
                <div className="table-pagination">
                    <button disabled={!canPreviousPage} onClick={previousPage} >prev</button>
                    <span>{`${pageIndex+1} of ${pageCount}`}</span>
                    <button disabled={!canNextPage} onClick={nextPage}>next</button>
                </div>
            )}
        </div>
        );
        }catch(error){
            console.log("errorintableHoc",error)
        }


    };
  
}

export default TableHOC;
