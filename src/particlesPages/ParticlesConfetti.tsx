import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesConfetti = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Confetti} />
    </div>
  )
}

export default ParticlesConfetti