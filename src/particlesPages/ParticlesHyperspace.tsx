import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesHyperspace = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Hyperspace} />
    </div>
  )
}

export default ParticlesHyperspace