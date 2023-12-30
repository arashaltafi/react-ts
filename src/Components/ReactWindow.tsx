import { useState } from 'react';
import { FixedSizeList as List } from 'react-window';

const ReactWindow = () => {

    const [count, setCount] = useState<{
        id: number;
        name: string;
        bio: string;
    }[]>([])

    const addNewItem = () => {
        setCount(
            [...Array(100).keys()].map(key => {
                return {
                    id: key,
                    name: 'name',
                    bio: 'bio'
                }
            })
        )
    }

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>ReactWindow</h1>

            <button className='btnSuccess' onClick={addNewItem}>Add +</button>

            <div className='w-full h-full text-center flex items-center justify-center flex-col gap-8'>
                <List
                    height={1000}
                    itemCount={count.length}
                    itemSize={50}
                    width={1000}
                >
                    {
                        ({ isScrolling, index, style }: any) =>
                            <>
                                {isScrolling ? 'Scrolling' : ''}
                                <ul style={style}>
                                    <li>ID {count[index].id}</li>
                                    <li>Name {count[index].name}</li>
                                </ul>
                            </>
                    }
                </List>
            </div>
        </div>
    )
}

export default ReactWindow