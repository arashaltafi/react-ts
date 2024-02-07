import { useEffect, useState } from 'react'
import { callApi } from '../utils/networkUtils/callApi';
import { List, InfiniteLoader } from "react-virtualized";

const PagingApiSample = () => {
    const [response, setResponse] = useState<{
        id: number,
        name: string,
        family: string,
        avatar: string
    }[]>([]);

    const [pageNumber, setPageNumber] = useState<number>()
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
            <SwipeRefresh
                handleSwipeStart={() => setPreventCounter(preventCounter + 1)}
                handleSwipeEnd={() => setPreventCounter(preventCounter + 1)}
                onRefresh={handleRefresh}
                loading={swipeLoading}
                setLoading={setSwipeLoading}
            >
                {
                    response.map((item, index) => (
                        <div key={index} className='w-[80%] rounded-3xl flex flex-col items-center justify-center gap-4 bg-slate-500 text-white py-8'>
                            <img className='w-72 h-72 rounded-full' src={item.avatar} alt={item.name} />
                            <p className='text-xl font-bold'>id: <span className='text-xl font-light'>{item.id}</span></p>
                            <p className='text-xl font-bold'>name: <span className='text-xl font-light'>{item.name}</span></p>
                            <p className='text-xl font-bold'>family: <span className='text-xl font-light'>{item.family}</span></p>
                        </div>
                    ))
                }
            </SwipeRefresh>

            {/* <InfiniteLoader
                isRowLoaded={isRowLoaded}
                loadMoreRows={loadMoreRows}
                minimumBatchSize={5}
                threshold={2}
                onScroll={() => setPreventCounter(preventCounter + 1)}
                rowCount={
                    contactsList.length < total
                        ? contactsList.length + 10
                        : contactsList.length
                }
            >
                {({ onRowsRendered, registerChild }) => (
                    <List
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        onScroll={() => setPreventCounter(preventCounter + 1)}
                        rowHeight={64}
                        rowRenderer={rowRenderer}
                        rowCount={
                            contactsList.length < total
                                ? contactsList.length + 10
                                : contactsList.length
                        }
                        width={window.innerWidth > 600 ? 600 : window.innerWidth}
                        height={window.innerHeight - 153}
                    />
                )}
            </InfiniteLoader> */}
        </div>
    )
}

export default PagingApiSample