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
    return (
        <>
            <div className="text-3xl text-center font-bold text-white bg-zinc-800 rounded-lg p-4 mx-8 mt-8 mb-16 shadow-2xl">Profile</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Name: {props.name}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Family: {props.family}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Age: {props.age}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Is Single: {props.isSingle ? 'Yes' : 'No'}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Language: {props.language.join(', ')}</div>
            <div className="text-lg text-center text-white bg-pink-400 my-6 p-4 w-[70%] mx-auto rounded-lg shadow-xl">Country: {props.country}</div>
        </>
    )
}

export { Profile, countries }