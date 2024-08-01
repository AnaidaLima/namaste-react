import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error-container">
            <div>{err.status} : {err.data}</div>
        </div>
    )
}

export default Error;