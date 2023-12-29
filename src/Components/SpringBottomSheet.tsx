import React, { useRef, useState } from 'react'
import { BottomSheet, BottomSheetRef } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'

const SpringBottomSheet = () => {
    const [openBasic, setOpenBasic] = useState(false)
    const [openSnap, setOpenSnap] = useState(false)
    const [openSticky, setOpenSticky] = useState(false)
    const [openNonBlocking, setOpenNonBlocking] = useState(false)
    const [expandOnContentDrag, setExpandOnContentDrag] = useState(true)

    const sheetRef = useRef<BottomSheetRef>(null)
    const focusRef = useRef<HTMLButtonElement>(null)

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>SpringBottomSheet</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <button className='btnSuccess bg-red-500' onClick={() => setOpenBasic(true)}>Open Basic</button>
                <button className='btnSuccess bg-green-500' onClick={() => setOpenSnap(true)}>Open Snap points & overflow</button>
                <button className='btnSuccess bg-yellow-500' onClick={() => setOpenSticky(true)}>Open Sticky header & footer</button>
                <button className='btnSuccess bg-blue-500' onClick={() => setOpenNonBlocking(true)}>Open Non-blocking overlay mode</button>

                <BottomSheet
                    open={openBasic}
                    ref={sheetRef}
                >
                    Basic Sample
                    <button
                        onClick={() => {
                            sheetRef?.current?.snapTo(({ maxHeight }) => maxHeight)
                        }}
                    >
                        Expand to full height
                    </button>
                </BottomSheet>


                <BottomSheet
                    open={openNonBlocking}
                    onDismiss={() => setOpenNonBlocking(false)}
                    blocking={false}
                    header={
                        <input
                            className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-300 focus:bg-white focus:ring-0"
                            type="text"
                            placeholder="Text input field in a sticky header"
                        />
                    }
                    snapPoints={({ maxHeight }) => [maxHeight / 4, maxHeight * 0.6]}
                >
                    <div>
                        <p>
                            When <code>blocking</code> is <code>false</code> it's possible to
                            use the Bottom Sheet as an height adjustable sidebar/panel.
                        </p>
                        <p>
                            You can combine this with <code>onDismissable</code> to fine-tune
                            the behavior you want.
                        </p>
                    </div>
                </BottomSheet>


                <BottomSheet
                    open={openSticky}
                    onDismiss={() => setOpenSticky(false)}
                    defaultSnap={({ snapPoints, lastSnap }) =>
                        lastSnap ?? Math.min(...snapPoints)
                    }
                    snapPoints={({ maxHeight }) => [
                        maxHeight - maxHeight / 5,
                        maxHeight * 0.6,
                    ]}
                    header={
                        <h1 className="flex items-center text-xl justify-center font-bold text-gray-800">
                            Sticky!
                        </h1>
                    }
                    footer={
                        <button onClick={() => setOpenSticky(false)} className="w-full">
                            Done
                        </button>
                    }
                >
                    <div>
                        <p>
                            Just as with content, if the header or footer changes their height
                            the sheet will readjust accordingly.
                        </p>
                        <div>
                            <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
                            <p>
                                Putting the "Done" button in a sticky footer is a nice touch on
                                long bottom sheets with a lot of content. And on resize events
                                the sticky elements are always visible, unlike the "Dismiss"
                                button in the first example that needs to be animated first.
                            </p>
                            <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
                        </div>
                        <p>
                            When you provide a header the draggable area increases, making it
                            easier for users to adjust the height of the bottom sheet.
                        </p>
                        <p>
                            The same is true for a sticky footer, as it supports drag gestures
                            as well to optimize for large phones where the header might be
                            difficult to reach with one hand.
                        </p>
                        <div>
                            <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
                            <p>
                                Additionally this bottom sheet uses stable viewpoints that are
                                equivalent to vh CSS units. Predictable heights like this is
                                also handy if there's content loaded async, or you're
                                implementing a virtual list so the sheet can't rely on measuring
                                the height of its content.
                            </p>
                            <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
                        </div>
                    </div>
                </BottomSheet>


                <BottomSheet
                    open={openSnap}
                    skipInitialTransition
                    onDismiss={() => setOpenSnap(false)}
                    blocking={false}
                    ref={sheetRef}
                    initialFocusRef={focusRef}
                    defaultSnap={({ maxHeight }) => maxHeight / 2}
                    snapPoints={({ maxHeight }) => [
                        maxHeight - maxHeight / 10,
                        maxHeight / 4,
                        maxHeight * 0.6,
                    ]}
                    expandOnContentDrag={expandOnContentDrag}
                >
                    <div>
                        <div className="grid grid-cols-3 w-full gap-4">
                            <button
                                className='text-sm px2 py-1'
                                onClick={() =>
                                    sheetRef?.current?.snapTo(({ snapPoints }) =>
                                        Math.max(...snapPoints)
                                    )
                                }
                            >
                                Top
                            </button>
                            <button
                                ref={focusRef}
                                className='text-sm px2 py-1'
                                onClick={() =>
                                    sheetRef?.current?.snapTo(({ maxHeight }) => maxHeight / 2)
                                }
                            >
                                Middle
                            </button>
                            <button
                                className='text-sm px2 py-1'
                                onClick={() =>
                                    sheetRef?.current?.snapTo(({ snapPoints }) =>
                                        Math.min(...snapPoints)
                                    )
                                }
                            >
                                Bottom
                            </button>
                        </div>
                        <div className="grid w-full">
                            <button className='text-sm px-2 py-1'
                                onClick={() => setExpandOnContentDrag(!expandOnContentDrag)}
                            >
                                {expandOnContentDrag ? 'Disable' : 'Enable'} expand on content drag
                            </button>
                        </div>
                        <p>
                            The sheet will always try to set initial focus on the first
                            interactive element it finds.
                        </p>
                        <p>If none is found it sets keyboard focus to the container.</p>
                        <p>
                            You can override this with <code>initialFocusRef</code>.
                        </p>
                        <div
                            className="my-6"
                            onClick={() => {
                                focusRef?.current?.focus()
                            }}
                        />
                    </div>
                </BottomSheet>

            </div>
        </div>
    )
}

export default SpringBottomSheet