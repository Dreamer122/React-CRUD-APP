import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
export const Viewdata = () => {
    let params = useParams()
    console.log(params)
    const [viewuserdata, setviewuser] = useState({})

    const singledata = async () => {
        const userdata = await axios.get(`http://localhost:5197/Userdata/${params.id}`)
        setviewuser(userdata.data);
        console.log(userdata.data)
    }

    useEffect(() => {
        singledata()
    }, [])


    return (
        <>
            <div className="container my-5">
                <h2 className="text-center my-4">Viewdata</h2>
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th className="text-md-center">S.No</th>
                            <th className="text-md-center">Name</th>
                            <th className="text-md-center">Username</th>
                            <th className="text-md-center">Email</th>
                            <th className="text-md-center">Website</th>
                        </tr>
                        <tr>
                            <td className="text-md-center" data-th="S.No">{viewuserdata.id}</td>
                            <td className="text-md-center" data-th="Name">{viewuserdata.name}</td>
                            <td className="text-md-center"  data-th="Username">{viewuserdata.username}</td>
                            <td className="text-md-center" data-th="Email">{viewuserdata.email}</td>
                            <td className="text-md-center" data-th="Website">{viewuserdata.website}</td>

                        </tr>
                    </tbody>
                </table>


            </div>
        </>
    )
}