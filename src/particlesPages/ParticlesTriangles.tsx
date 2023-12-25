import ParticlesComponent, { ParticlesType } from '../Components/ParticlesComponent'

const ParticlesTriangles = () => {
  return (
    <div className='w-full h-full'>
      <ParticlesComponent particlesType={ParticlesType.Triangles} />
    </div>
  )
}

export default ParticlesTriangles