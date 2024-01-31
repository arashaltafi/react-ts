import MouseParticles from "react-mouse-particles";

const ParticlesMouse1 = () => {
    return (
        <div>
            <MouseParticles
                g={0.3}
                num={9}
                radius={8}
                life={0.8}
                v={0.8}
                color="black"
                alpha={0.26}
                level={6}
            />
        </div>
    )
}

export default ParticlesMouse1