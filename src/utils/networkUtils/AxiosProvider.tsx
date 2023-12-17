import { useDispatch } from "react-redux";
import axios from "./customAxios";
import { useEffect, useState } from "react";
import axiosSlice from "../../redux/axiosSlice";

const AxiosProvider = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        console.log("loading", loading);
        dispatch(axiosSlice.actions.setLoading({ isLoading: loading }))
    }, [loading])

    useEffect(() => {
        if (error === null) return;

        console.log("error", error);

        if (!error.response) {
            dispatch(axiosSlice.actions.setError({ error: 'Internet Error!' }))
        } else if (error.response.status >= 300) {
            dispatch(axiosSlice.actions.setError({ error: 'Redirect Error!' }))
        } else if (error.response.status >= 400) {
            dispatch(axiosSlice.actions.setError({ error: 'Client Error!' }))
        } else if (error.response.status >= 500) {
            dispatch(axiosSlice.actions.setError({ error: 'Server Error!' }))
        } else {
            dispatch(axiosSlice.actions.setError({ error: error.response.message }))
        }
    }, [error])

    axios.interceptors.request.use(
        (config) => requestHandler(config),
        (error) => requestErrorHandler(error)
    );

    axios.interceptors.response.use(
        (response) => responseHandler(response),
        (error) => responseErrorHandler(error)
    );

    const requestHandler = (config: any) => {
        console.log("requestHandler", config);
        setLoading(true);
        return config;
    };

    const requestErrorHandler = (error: any) => {
        console.log("requestErrorHandler", error);
        setLoading(false);
        setError(error);
        return Promise.reject(error);
    };

    const responseHandler = (response: any) => {
        console.log("responseHandler", response);
        setLoading(false);
        return response;
    };

    const responseErrorHandler = (error: any) => {
        console.log("responseErrorHandler", error);
        setLoading(false)
        setError(error)
        return Promise.reject(error);
    };

    return (
        <></>
    )
}

export default AxiosProvider