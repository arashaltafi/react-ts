import React, { useEffect, useRef, useState } from 'react'
import ScrollableFeed from 'react-scrollable-feed'
import { RandomColorGenerator } from '../utils/RandomColorGenerator';

type Item = {
    timestamp: string;
    color: string;
};

const createItem = (): Item => ({
    timestamp: new Date().toISOString(),
    color: RandomColorGenerator.get(),
});

const ScrollableFeedSample = () => {
    const intervalDelay = 800;
    const scrollableRef = useRef<any>(null);

    const [isAtBottom, setIsAtBottom] = useState<boolean>(true);
    const [items, setItems] = useState<Item[]>([
        createItem(),
        createItem(),
        createItem(),
        createItem(),
    ]);

    const [intervalId, setIntervalId] = useState<NodeJS.Timer | undefined>(undefined);

    useEffect(() => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollToBottom();
        }
    }, [items]);

    const addItem = () => {
        setItems((prevItems) => [...prevItems, createItem()]);
    }

    const pause = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(undefined);
        }
    }

    const resume = () => {
        const interval = setInterval(() => {
            addItem();
        }, intervalDelay);
        setIntervalId(interval);
    }

    const clear = () => {
        setItems([]);
    }

    const scrollToBottom = () => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollToBottom();
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-md-8">
                    <div className="card">
                        <div className="text-center">
                            <p>{items.length} items</p>
                            <button onClick={addItem} type="button" className="btn btn-primary m-2">
                                Add Item
                            </button>
                            {intervalId ? (
                                <button onClick={pause} type="button" className="btn btn-primary m-2">
                                    Pause
                                </button>
                            ) : (
                                <button onClick={resume} type="button" className="btn btn-primary m-2">
                                    Autoplay
                                </button>
                            )}
                            <button
                                onClick={scrollToBottom}
                                disabled={isAtBottom}
                                type="button"
                                className="btn btn-primary m-2"
                            >
                                Scroll to Bottom
                            </button>
                            <button onClick={clear} type="button" className="btn btn-primary m-2">
                                Clear
                            </button>
                        </div>
                        
                        <div className="card-body scrollable-wrapper pt-0 pb-0 mt-2">
                            <ScrollableFeed
                                ref={scrollableRef}
                                onScroll={(atBottom: boolean) => setIsAtBottom(atBottom)}
                            >
                                <ul className="list-group list-group-flush">
                                    {items.map((item, i) => (
                                        <li key={i} className="list-group-item">
                                            <span className="dot me-2" style={{ backgroundColor: item.color }}></span>
                                            {item.timestamp}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollableFeed>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScrollableFeedSample