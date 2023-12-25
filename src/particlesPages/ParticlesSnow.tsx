import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesSnow = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Snow} />
    </div>
  )
}

export default ParticlesSnow