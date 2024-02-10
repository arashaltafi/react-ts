import { CircularProgress } from "@material-ui/core";

const NetworkLoading = () => {
    return (
        <div
            className='fixed w-screen h-full  top-0 left-0 flex items-center justify-center zIndex1 flex-col bg-zinc-500/50'
        >
            <CircularProgress />
        </div>
    )
}

export default NetworkLoading