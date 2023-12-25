import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesFireworks = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Fireworks} />
    </div>
  )
}

export default ParticlesFireworks