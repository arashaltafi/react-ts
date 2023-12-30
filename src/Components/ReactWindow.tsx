import { useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { faker } from '@faker-js/faker/locale/fa';
import Divider from './Divider';

const ReactWindow = () => {

    const [count, setCount] = useState<{
        id: number;
        name: string;
        sex: string;
        bio: string;
        job: string;
        email: string;
        avatar: string;
    }[]>([])

    const addNewItem = () => {
        setCount(
            [...Array(1000).keys()].map(key => {
                return {
                    id: key,
                    name: faker.person.fullName(),
                    sex: faker.person.sex(),
                    bio: faker.person.bio(),
                    job: faker.person.jobTitle(),
                    email: faker.internet.email(),
                    avatar: faker.image.avatar()
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
                    itemSize={350}
                    width={1000}
                >
                    {
                        ({ isScrolling, index, style }: any) =>
                            <>
                                {isScrolling ? 'Scrolling' : ''}
                                <ul style={style}>
                                    <li>آیدی: {count[index].id}</li>
                                    <li>نام: {count[index].name}</li>
                                    <li>مرد یا زن: {count[index].sex}</li>
                                    <li>بیو: {count[index].bio}</li>
                                    <li>شغل: {count[index].job}</li>
                                    <li>ایمیل: {count[index].email}</li>
                                    <img className='w-28 h-28 mx-auto rounded-2xl' src={count[index].avatar} alt="User Avatar" />
                                    <Divider />
                                </ul>
                            </>
                    }
                </List>
            </div>
        </div>
    )
}

export default ReactWindow