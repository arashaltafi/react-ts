import { useEffect, useState } from 'react'
import { callApi } from '../utils/networkUtils/callApi';

const PagingApiSample = () => {
    const [response, setResponse] = useState<{
        id: number,
        name: number,
        family: number,
        avatar: string
    }[]>([]);
    const pageNumber = 1;
    const pageSize = 5;

    const callApiPaging = async () => {
        try {
            await callApi({
                method: "GET",
                url: `test_paging/test_paging.php?page_number=${pageNumber}1&page_size=${pageSize}`,
                callBack: (response: any) => {
                    console.log("handleClickGet response", response);
                    setResponse(response)
                },
            });
        } catch (error) {
            console.log("handleClickGet error", error);
        }
    }

    useEffect(() => {
        callApiPaging()
    }, [])

    return (
        <div dir='rtl' className='w-full flex flex-col items-center justify-center gap-8 py-8'>
            <h1 className='mb-16'>PagingApiSample</h1>
            {
                response.map((item, index) => (
                    <div key={index} className='w-[80%] rounded-3xl flex flex-col items-center justify-center gap-4 bg-slate-500 text-white py-8'>
                        <img className='w-72 h-72 rounded-full' src={item.avatar} />
                        <p className='text-xl font-bold'>id: <span className='text-xl font-light'>{item.id}</span></p>
                        <p className='text-xl font-bold'>name: <span className='text-xl font-light'>{item.name}</span></p>
                        <p className='text-xl font-bold'>family: <span className='text-xl font-light'>{item.family}</span></p>
                    </div>
                ))
            }
        </div>
    )
}

export default PagingApiSample