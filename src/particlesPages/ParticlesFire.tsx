import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesFire = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Fire} />
    </div>
  )
}

export default ParticlesFire