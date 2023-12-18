import swal from 'sweetalert';

const SwalSample = () => {

    const handleClick = (e: any) => {
        e.preventDefault()
        window.open("https://sweetalert.js.org/guides/", "_blank")
    }


    const handleClick1 = () => {
        swal("Hello world!");
    }

    const handleClick2 = () => {
        swal("Here's the title!", "...and here's the text!");
    }

    const handleClick3 = () => {
        swal("Good job!", "You clicked the button!", "success");
    }

    const handleClick4 = () => {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    }

    const handleClick5 = () => {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
    }

    const handleClick6 = () => {
        swal("Good job!", "You clicked the button!", "success");
    }

    const handleClick7 = () => {
        swal("Click on either the button or outside the modal.")
            .then((value) => {
                swal(`The returned value is: ${value}`);
            });
    }

    const handleClick8 = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    const handleClick9 = () => {
        swal("Are you sure you want to do this?", {
            buttons: ["Oh noez!", "Aww yiss!"],
        });
    }

    const handleClick10 = () => {
        swal("Are you sure you want to do this?", {
            buttons: ["Oh noez!", true],
        });
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='title py-12 no-underline'>Swal Sample</div>

            <div className='flex flex-col gap-8 items-center justify-center text-center'>
                <button className='btnSuccess bg-red-500' onClick={handleClick1}>Sample 1</button>
                <button className='btnSuccess bg-blue-500' onClick={handleClick2}>Sample 2</button>
                <button className='btnSuccess bg-green-500' onClick={handleClick3}>Sample 3</button>
                <button className='btnSuccess bg-yellow-500' onClick={handleClick4}>Sample 4</button>
                <button className='btnSuccess bg-purple-500' onClick={handleClick5}>Sample 5</button>
                <button className='btnSuccess bg-orange-500' onClick={handleClick6}>Sample 6</button>
                <button className='btnSuccess bg-sky-500' onClick={handleClick7}>Sample 7</button>
                <button className='btnSuccess bg-zinc-500' onClick={handleClick8}>Sample 8</button>
                <button className='btnSuccess bg-pink-500' onClick={handleClick9}>Sample 9</button>
                <button className='btnSuccess bg-lime-500' onClick={handleClick10}>Sample 10</button>
            </div>

            <div className='flex items-end justify-center flex-grow py-16'>
                <a className='subtitle text-center hover:text-sky-500 hover:underline'
                    onClick={(e) => handleClick(e)}
                    href="https://sweetalert.js.org/guides/">Swal</a>
            </div>
        </div>
    )
}

export default SwalSample