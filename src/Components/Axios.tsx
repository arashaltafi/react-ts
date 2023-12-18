import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../utils/networkUtils/callApi"
import AxiosProvider from "../utils/networkUtils/AxiosProvider";
import { useEffect } from "react";
import axiosSlice from "../redux/axiosSlice";
import Loading from "./Loading";

const Axios = () => {

  const axiosSelector = useSelector((state: any) => state.axios);
  const dispatch = useDispatch()

  useEffect(() => {

    return () => {
      dispatch(axiosSlice.actions.reset())
    }
  }, [])

  const handleClick = (e: any) => {
    e.preventDefault()
    window.open("https://axios-http.com/", "_blank")
  }

  const handleClickGet = async (status: number) => {
    dispatch(axiosSlice.actions.reset())

    let url = ''
    switch (status) {
      case 200:
        url = "test_200.php"
        break;
      case 300:
        url = "test_300.php"
        break;
      case 400:
        url = "test_400.php"
        break;
      case 500:
        url = "test_500.php"
        break;
      default:
        url = "test_200.php"
        break;
    }
    try {
      await callApi({
        method: "GET",
        url,
        callBack: (response: any) => {
          console.log("handleClickGet response", response);
        },
      });
    } catch (error) {
      console.log("handleClickGet error", error);
    }
  }

  return (
    <>
      <AxiosProvider />
      <div className='w-full h-full flex flex-col'>
        <div className='title py-12 no-underline'>Axios</div>

        <div className='flex flex-col gap-8 items-center justify-center text-center'>
          <button className="btnSuccess bg-green-500" onClick={() => handleClickGet(200)}>Axios Get 200</button>
          <button className="btnSuccess bg-red-500" onClick={() => handleClickGet(300)}>Axios Get 300</button>
          <button className="btnSuccess bg-purple-500" onClick={() => handleClickGet(400)}>Axios Get 400</button>
          <button className="btnSuccess bg-blue-500" onClick={() => handleClickGet(500)}>Axios Get 500</button>
        </div>

        <div className='title py-12 no-underline mt-8'>
          {
            axiosSelector.error ? <>{axiosSelector.error}</> :
              axiosSelector.isLoading ? <Loading /> :
                axiosSelector.data ? <code>{JSON.stringify(axiosSelector.data)}</code> : <>Please Call Api</>
          }
        </div>

        <div className='flex items-end justify-center flex-grow pb-16'>
          <a className='subtitle text-center hover:text-sky-500 hover:underline'
            onClick={(e) => handleClick(e)}
            href="https://axios-http.com/">React Axios</a>
        </div>
      </div>
    </>
  )
}

export default Axios