import { useState } from 'react'
import { callApi } from '../utils/networkUtils/callApi';
import PullToRefresh from 'react-simple-pull-to-refresh'
import BounceLoader from 'react-spinners/BounceLoader';

const SwipeRefresh2 = () => {
    const [response, setResponse] = useState<{
        id: number,
        name: string,
        family: string,
        avatar: string
    }[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const pageSize = 5;

    const callApiPaging = async () => {
        try {
            await callApi({
                method: "GET",
                url: `test_paging/test_paging.php?page_number=${pageNumber}&page_size=${pageSize}`,
                callBack: (res: any) => {
                    console.log("handleClickGet response", res);
                    setResponse([...response, ...res])
                    setPageNumber(pageNumber + 1)
                },
            });
        } catch (error) {
            console.log("handleClickGet error", error);
        }
    }

    const handleRefresh = (): Promise<void> => {
        return new Promise(res => {
            setTimeout(() => {
                res(callApiPaging());
            }, 1000);
        });
    };

    const handleFetchMore = (): Promise<void> => {
        return new Promise(res => {
            setTimeout(() => {
                res(callApiPaging());
            }, 1000);
        });
    };

    return (
        <PullToRefresh
            onRefresh={handleRefresh}
            canFetchMore={true}
            onFetchMore={handleFetchMore}
            isPullable={true}
            resistance={3}
            pullDownThreshold={67}
            maxPullDownDistance={100}
            refreshingContent={<BounceLoader className='w-full flex items-center justify-center' color="#f00" />}
            pullingContent='pullingContent'
        >
            <div className='w-full flex flex-col items-center justify-start gap-8 py-8'>
                {
                    response.map((item, index) => (
                        <div key={index} className='w-[80%] rounded-3xl flex flex-col items-center justify-center gap-4 bg-slate-500 text-white'>
                            <img className='w-72 h-72 rounded-full' src={item.avatar} alt={item.name} />
                            <p className='text-xl font-bold'>id: <span className='text-xl font-light'>{item.id}</span></p>
                            <p className='text-xl font-bold'>name: <span className='text-xl font-light'>{item.name}</span></p>
                            <p className='text-xl font-bold'>family: <span className='text-xl font-light'>{item.family}</span></p>
                        </div>
                    ))
                }
            </div>
        </PullToRefresh>
    )
}

export default SwipeRefresh2