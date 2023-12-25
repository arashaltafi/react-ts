import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesBubbles = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Bubbles} />
    </div>
  )
}

export default ParticlesBubbles