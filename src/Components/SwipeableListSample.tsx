import { Transition, Popover } from '@headlessui/react'
import { useState } from 'react'
import { useCollapse } from 'react-collapsed';
import './collapseStyle.css'

const SwipeableListSample = () => {

    const [isShowing, setIsShowing] = useState(false)
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();


    return (
        <div>
            <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
                Toggle
            </button>
            <Transition
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                I will fade in and out 1
            </Transition>

            <Transition
                show={isShowing}>
                <Transition.Child
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    I will fade in and out 2
                </Transition.Child>

                <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    I will fade in and out 3
                </Transition.Child>
            </Transition>

            <Transition
                appear={true}
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                I will fade in and out 4
            </Transition>


            <Popover className="w-full h-20 flex flex-col items-center justify-center border border-double border-black mt-16">
                <Popover.Button className='absolute w-full h-20'>Solutions</Popover.Button>

                <Popover.Panel className="relative top-20 w-full h-24 mt-20 flex flex-col items-center justify-center">
                    <div className="grid grid-cols-2">
                        <p>Analytics</p>
                        <p>Engagement</p>
                        <p>Security</p>
                        <p>Integrations</p>
                    </div>

                    <img src="https://arashaltafi.ir/arash.jpg" width={50} height={50} alt="" />
                </Popover.Panel>
            </Popover>




            <div className="collapsible">
                <div className="header" {...getToggleProps()}>
                    {isExpanded ? 'Collapse' : 'Expand'}
                </div>
                <div {...getCollapseProps()}>
                    <div className="content">
                        Now you can see the hidden content. <br /><br />
                        Click again to hide...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SwipeableListSample