import MouseParticles from "react-mouse-particles";

const ParticlesMouse1 = () => {
    return (
        <>
            <div>
                <MouseParticles
                    g={2.3}
                    num={1}
                    radius={8}
                    life={0.8}
                    v={1.2}
                    color="random"
                    alpha={0.16}
                    level={6}
                />
            </div>
        </>
    )
}

export default ParticlesMouse1