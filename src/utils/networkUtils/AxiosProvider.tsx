import { useDispatch } from "react-redux";
import axios from "./customAxios";
import { useEffect, useState } from "react";
import axiosSlice from "../../redux/axiosSlice";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const AxiosProvider = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean | any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if (loading === null) return;

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

    useEffect(() => {
        console.log("axios", axios);

        axios.interceptors.request.use(
            (config: AxiosRequestConfig) => requestHandler(config),
            (error: AxiosError) => requestErrorHandler(error)
        );
    
        axios.interceptors.response.use(
            (response: AxiosResponse) => responseHandler(response),
            (error: AxiosError) => responseErrorHandler(error)
        );
    }, [])

    const requestHandler = (config: any) => {
        console.log("requestHandler", config);
        setLoading(true);
        return config;
    };

    const requestErrorHandler = (error: AxiosError) => {
        console.log("requestErrorHandler", error);
        setLoading(false);
        setError(error);
        return Promise.reject(error);
    };

    const responseHandler = (response: AxiosResponse) => {
        console.log("responseHandler", response);
        setLoading(false);
        return response;
    };

    const responseErrorHandler = (error: AxiosError) => {
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