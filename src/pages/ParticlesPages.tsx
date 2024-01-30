import { Link } from "react-router-dom"

const ParticlesPages = () => {
    return (
        <div className='flex items-center justify-center flex-col gap-8 py-8'>
            <Link to={'/particles/snow'} className='btnSuccess bg-red-500'>Sample Snow</Link>
            <Link to={'/particles/bubbles'} className='btnSuccess bg-sky-500'>Sample Bubbles</Link>
            <Link to={'/particles/confetti'} className='btnSuccess bg-yellow-500'>Sample Confetti</Link>
            <Link to={'/particles/fire'} className='btnSuccess bg-green-500'>Sample Fire</Link>
            <Link to={'/particles/firefly'} className='btnSuccess bg-purple-500'>Sample Firefly</Link>
            <Link to={'/particles/fireworks'} className='btnSuccess bg-zinc-500'>Sample Fireworks</Link>
            <Link to={'/particles/fountain'} className='btnSuccess bg-lime-500'>Sample Fountain</Link>
            <Link to={'/particles/hyperspace'} className='btnSuccess bg-orange-500'>Sample Hyperspace</Link>
            <Link to={'/particles/triangles'} className='btnSuccess bg-cyan-500'>Sample Triangles</Link>
            <Link to={'/particles/links'} className='btnSuccess bg-emerald-500'>Sample Links</Link>
            <Link to={'/particles/stars'} className='btnSuccess bg-pink-500'>Sample Stars</Link>
            <Link to={'/particles/mouse'} className='btnSuccess bg-blue-500'>Sample Mouse</Link>
        </div>
    )
}

export default ParticlesPages