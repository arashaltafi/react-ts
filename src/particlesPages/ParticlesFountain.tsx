import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesFountain = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Fountain} />
    </div>
  )
}

export default ParticlesFountain