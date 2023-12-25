import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesStars = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Stars} />
    </div>
  )
}

export default ParticlesStars