import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Adduser = () => {
    const navigate = useNavigate()
    const [adduserdata, setAdddata] = useState({

        name: "",
        username: "",
        email: "",
        website: "",
        phone: ""

    })
    const { name, username, email, phone, website } = adduserdata
    const getData = (e) => {
        setAdddata({ ...adduserdata, [e.target.name]: e.target.value })

    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5197/Userdata/`, adduserdata)
        navigate("/")
    }
    return (
        <>
            
            <div className="login-container my-5">
                <form className="login-form" onSubmit={submitHandler}>
                    <h2 className="mb-4">Add User</h2>
                    <div className="input-group">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required=""

                            onChange={getData}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required=""
                            placeholder="Username"
                            onChange={getData}

                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="mail" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            id="mail"
                            name="email"
                            required=""
                            placeholder="Email"

                            onChange={getData}

                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="website" className="form-label">
                            Website
                        </label>
                        <input
                            type="text"
                            id="website"
                            name="website"
                            placeholder="Website"

                            onChange={getData}

                        />
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="submit-btn ">Submit</button>

                    </div>

                </form>
            </div>
        </>
    )

}