import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesLinks = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Links} />
    </div>
  )
}

export default ParticlesLinks