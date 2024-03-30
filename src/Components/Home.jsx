import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


export const Home = () => {
    const [inputdata, setData] = useState([])

    useEffect(() => {
        getUser()


    }, [])

    const getUser = async () => {
        const result = await axios.get("http://localhost:5197/Userdata")
        setData(result.data)
        console.log(result.data)

    }

    const deletehandle = (userid) => {
        let answer = window.confirm('Are you sure?')
        if (answer) {
            axios.delete(`http://localhost:5197/Userdata/` + userid).then((res) => console.log(res))

            setTimeout(() => {

                window.location.reload();

            }, 100)
        }


    }





    return (
        <>
            <div className="container my-5">
                <table className="rwd-table">
                    <tbody>
                        <tr>
                            <th className="text-md-center">S.No</th>
                            <th className="text-md-center">Name</th>
                            <th className="text-md-center">Username</th>
                            <th className="text-md-center">Email</th>
                            <th className="text-md-center">Website</th>

                            <th className="text-md-center">Actions</th>
                        </tr>
                        {
                            inputdata?.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td className="text-md-center" data-th="S.No">
                                            {i + 1}
                                        </td>
                                        <td className="text-md-center" data-th="Name">
                                            {item.name}
                                        </td>
                                        <td className="text-md-center" data-th="Username">
                                            {item.username}
                                        </td>
                                        <td className="text-md-center" data-th="Email" >
                                            {item.email}
                                        </td>
                                        <td className="text-md-center" data-th="Website">
                                            {item.website}
                                        </td>


                                        <td className="text-md-center" data-th="Actions">
                                            <NavLink to={`/user/${item.id}/${item.username}`}>
                                                <button type="button" className="btn btn-primary">



                                                    <i className="far fa-eye action-icons" />



                                                </button>
                                            </NavLink>

                                            <NavLink to={`/user/edit/${item.id}/${item.username}`}>

                                                <button type="button" className="btn btn-success">
                                                    <i className="fas fa-edit action-icons" />


                                                </button>
                                            </NavLink>
                                            <button type="button" className="btn btn-danger" onClick={() => { deletehandle(item.id) }}>
                                                <i className="far fa-trash-alt action-icons" />

                                            </button>
                                        </td>

                                    </tr>

                                )

                            })
                        }
                        
                    </tbody>
                </table>

            </div>



        </>

    )
}