import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesFirefly = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Firefly} />
    </div>
  )
}

export default ParticlesFirefly