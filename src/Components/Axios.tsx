import { useDispatch, useSelector } from "react-redux";
import { callApi } from "../utils/networkUtils/callApi"
import AxiosProvider from "../utils/networkUtils/AxiosProvider";
import { useEffect } from "react";
import axiosSlice from "../redux/axiosSlice";

const Axios = () => {

  const axiosSelector = useSelector((state: any) => state.axios);
  const dispatch = useDispatch()

  useEffect(() => {

    return () => {
      dispatch(axiosSlice.actions.reset())
    }
  })


  const handleClick = (e: any) => {
    e.preventDefault()
    window.open("https://axios-http.com/", "_blank")
  }

  const handleClickGet = async () => {
    try {
      await callApi({
        method: "GET",
        url: `test_json.php`,
        callBack: (response: any) => {
          console.log("handleClickGet", response);
        },
      });
    } catch (error) {

    }
  }

  return (
    <>
      <AxiosProvider />
      <div className='w-full h-full flex flex-col'>
        {
          axiosSelector.error ? <div className='title py-12 no-underline'>{axiosSelector.error}</div> :
            axiosSelector.loading ? <div className='title py-12 no-underline'>LOADING ...</div> :
              <>
                <div className='title py-12 no-underline'>Axios</div>

                <div className='flex flex-col gap-8 items-center justify-center text-center'>
                  <button className="btnSuccess bg-red-500" onClick={handleClickGet}>Axios Get</button>
                </div>

                <div className='flex items-end justify-center flex-grow pb-16'>
                  <a className='subtitle text-center hover:text-sky-500 hover:underline'
                    onClick={(e) => handleClick(e)}
                    href="https://axios-http.com/">React Axios</a>
                </div>
              </>
        }
      </div>
    </>
  )
}

export default Axios