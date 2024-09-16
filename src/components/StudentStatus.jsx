const StudentStatus = ()=>{
    return(
        <div className="col-3">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>alamin</td>
                        <td>
                            <div className="d-flex gap-2">
                                <button type="button" className="btn btn-secondary">accidentally Added</button>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default StudentStatus