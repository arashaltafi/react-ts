import { useEffect, useRef, useState } from 'react'
import { callApi } from '../utils/networkUtils/callApi';
import { customLog } from '../utils/CustomConsole';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PagingApiSample = () => {
    const [response, setResponse] = useState<{
        id: number,
        name: string,
        family: string,
        avatar: string
    }[]>([]);

    const [page, setPage] = useState<number>(1);
    const pageSize = 5;
    const mainRef = useRef<any>()

    const callApiPaging = async () => {
        try {
            await callApi({
                method: "GET",
                url: `test_paging/test_paging.php?page_number=${page}&page_size=${pageSize}`,
                callBack: (response: any) => {
                    customLog("handleClickGet response", response);
                    setResponse(response)
                    window.scrollTo(0, 1000);
                    document.body.scrollTop = 0; // For Safari
                    document.body.scrollTo(0, 0); // For Safari
                    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                    mainRef.current.scrollTo(0, 0);
                },
            });
        } catch (error) {
            customLog("handleClickGet error", error);
        }
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        console.log('handleChange paging', event)
        setPage(value);
    };

    useEffect(() => {
        callApiPaging()
    }, [])

    useEffect(() => {
        callApiPaging()
    }, [page])

    return (
        <div ref={mainRef} className='w-full flex flex-col items-center justify-start gap-8 py-8'>
            <h1 className='h1'>PagingApiSample</h1>

            <h3>Page: {page}</h3>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-8 py-4 px-8'>
                {
                    response.map((item, index) => (
                        <div key={index} className='rounded-3xl flex flex-col items-center justify-center gap-4 bg-slate-500 text-white'>
                            <img className='w-72 h-72 rounded-full' src={item.avatar} alt={item.name} />
                            <p className='text-xl font-bold'>id: <span className='text-xl font-light'>{item.id}</span></p>
                            <p className='text-xl font-bold'>name: <span className='text-xl font-light'>{item.name}</span></p>
                            <p className='text-xl font-bold'>family: <span className='text-xl font-light'>{item.family}</span></p>
                        </div>
                    ))
                }
            </div>

            <Stack spacing={2}>
                <Pagination
                    sx={{
                        "& .MuiPaginationItem-root": {
                            fontFamily: "Vazir",
                            fontSize: 22,
                        }
                    }}
                    count={10}
                    disabled={false}
                    size="large"
                    shape="rounded"
                    color="primary"
                    page={page}
                    onChange={handleChange}
                    showFirstButton={true}
                    showLastButton={true}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>

        </div>
    )
}

export default PagingApiSample