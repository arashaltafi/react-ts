import Swal from 'sweetalert2'

const Swal2Sample = () => {

    const handleClick = (e: any) => {
        e.preventDefault()
        window.open("https://sweetalert2.github.io/", "_blank")
    }


    const handleClick1 = () => {
        Swal.fire("SweetAlert2 is working!");
    }

    const handleClick2 = () => {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
        });
    }

    const handleClick3 = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    const handleClick4 = () => {
        Swal.fire({
            imageUrl: "https://arashaltafi.ir/arash.jpg",
            imageHeight: 1500,
            imageAlt: "A tall image"
        });
    }

    const handleClick5 = () => {
        Swal.fire({
            title: "<strong>HTML <u>example</u></strong>",
            icon: "info",
            html: `
              You can use <b>bold text</b>,
              <a href="#">links</a>,
              and other HTML tags
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
              <i class="fa fa-thumbs-up"></i> Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
              <i class="fa fa-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down"
        });
    }

    const handleClick6 = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    const handleClick7 = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const handleClick8 = () => {
        Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
    }

    const handleClick9 = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const handleClick10 = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }

    return (
        <div className='w-full h-full flex flex-col'>
            <div className='title py-12 no-underline'>Swal2 Sample</div>

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
                    href="https://sweetalert2.github.io/">Swal2</a>
            </div>
        </div>
    )
}

export default Swal2Sample