import MouseParticles from "react-mouse-particles";

const ParticlesMouse1 = () => {
    return (
        <>
            <div>
                <MouseParticles
                    g={1}
                    color="random"
                    cull="MuiSvgIcon-root,MuiButton-root"
                    level={6}
                />
            </div>
        </>
    )
}

export default ParticlesMouse1