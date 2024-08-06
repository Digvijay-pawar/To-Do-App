export function Login() {
    return (
        <div className="container">
            <div className="div row mt-5">
                <div className="col-4"></div>
                <div className="col-4 card text-center mt-5 p-2 py-3">
                    <h2>Login Form</h2>
                    <hr />
                    <form action="" className="mx-4 py-4">
                        <div className="form-group">
                            <input
                                type="text"
                                name="username"
                                style={{ border: '1px solid silver' }}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                style={{ border: '1px solid silver' }}
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Password"
                            />
                        </div>
                        <button className="btn btn-block btn-success">Submit</button>
                        <br />
                        <p>Don't have an account? <a href="">Register</a></p>
                    </form>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}