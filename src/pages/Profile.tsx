import GoBack from "../Components/GoBack"

interface ProfileProps {
    name: string
    family: string
    age: number
    isSingle: boolean
    language: string[]
    country: countries
}

enum countries {
    iran = 'iran',
    usa = 'usa',
    uk = 'uk'
}

const getAge = (name: string): number => {
    return name === 'arash' ? 26 : 0
}
const age: number = getAge('arash')
console.log(age);

const Profile = (props: ProfileProps) => {

    const handleError = (e: any) => {
        const img = e.target;
        img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png';
        img.onerror = null;
    }

    return (
        <>
            <div className="text-3xl text-center font-bold text-white bg-zinc-800 rounded-lg p-4 mx-8 mt-8 mb-16 shadow-2xl">Profile</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Name: {props.name}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Family: {props.family}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Age: {props.age}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Is Single: {props.isSingle ? 'Yes' : 'No'}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Language: {props.language.join(', ')}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Country: {props.country}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl flex gap-4 items-center justify-center">
                <img onError={(e) => handleError(e)} className="w-44 h-44 rounded-xl" src="https://1arashaltafi.ir/arash.jpg" alt="arash altafi" />
                <img onError={(e) => handleError(e)} className="w-44 h-44 rounded-xl" src="https://arashaltafi.ir/arash_circle.png" alt="arash altafi" />
            </div>

            <GoBack class="btnError mt-16 flex mx-auto" />
        </>
    )
}

export { Profile, countries }