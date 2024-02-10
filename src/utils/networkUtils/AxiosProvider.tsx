import { useDispatch } from "react-redux";
import axios from "./customAxios";
import { useEffect, useState } from "react";
import axiosSlice from "../../redux/axiosSlice";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { customLog } from "../CustomConsole";

const AxiosProvider = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean | any>(null);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);
    const [configAxios, setConfigAxios] = useState<any>(null);

    useEffect(() => {
        if (loading === null) return;

        customLog("loading", loading);

        dispatch(axiosSlice.actions.setLoading({ isLoading: loading }))
    }, [loading])

    useEffect(() => {
        if (error === null) return;

        customLog("error", error);

        if (!error.response) {
            dispatch(axiosSlice.actions.setError({ error: 'Internet Error!' }))
        } else if (error.response.status >= 500) {
            dispatch(axiosSlice.actions.setError({ error: 'Server Error!' }))
        } else if (error.response.status >= 400) {
            dispatch(axiosSlice.actions.setError({ error: 'Client Error!' }))
        } else if (error.response.status >= 300) {
            dispatch(axiosSlice.actions.setError({ error: 'Redirect Error!' }))
        } else {
            dispatch(axiosSlice.actions.setError({ error: error.response.message }))
        }
    }, [error])

    useEffect(() => {
        if (data === null) return;

        customLog("data", data);

        dispatch(axiosSlice.actions.setData({ data: data }))
    }, [data])

    useEffect(() => {
        if (configAxios === null) return;

        customLog("configAxios", configAxios);

        dispatch(axiosSlice.actions.setAxiosReq({ axiosReq: configAxios }))
    }, [configAxios])

    axios.interceptors.request.use(
        (config: AxiosRequestConfig) => requestHandler(config),
        (error: AxiosError) => requestErrorHandler(error)
    );

    axios.interceptors.response.use(
        (response: AxiosResponse) => responseHandler(response),
        (error: AxiosError) => responseErrorHandler(error)
    );

    const requestHandler = (config: any) => {
        customLog("requestHandler", config);
        setLoading(true);
        setConfigAxios(JSON.stringify(config))
        return config;
    };

    const requestErrorHandler = (error: AxiosError) => {
        customLog("requestErrorHandler", error);
        setLoading(false);
        setError(error);
        return Promise.reject(error);
    };

    const responseHandler = (response: AxiosResponse) => {
        customLog("responseHandler", response);
        setLoading(false);
        setData(response.data);
        return response;
    };

    const responseErrorHandler = (error: AxiosError) => {
        customLog("responseErrorHandler", error);
        setLoading(false)
        setError(error)
        return Promise.reject(error);
    };

    return (
        <></>
    )
}

export default AxiosProvider