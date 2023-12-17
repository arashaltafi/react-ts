const ReactPdf = () => {

    const handleClick = (e: any) => {
        e.preventDefault()
        // window.open("https://www.npmjs.com/package/react-pdf", "_blank")
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='flex-grow-0 title py-12 no-underline'>React PDF</div>

            <iframe
                className="flex-grow-1"
                title="Document: Sample Resume"
                src="https://arashaltafi.ir/resume_en.pdf"
            ></iframe>

            <div className='block flex-grow-0 items-center justify-center py-6'>
                <div className='subtitle text-center hover:text-sky-500 hover:underline cursor-pointer select-none'
                    onClick={(e) => handleClick(e)}>React PDF</div>
            </div>
        </div>
    )
}

export default ReactPdf