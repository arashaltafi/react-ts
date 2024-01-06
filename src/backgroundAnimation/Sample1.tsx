import { useEffect } from 'react'
import './sample1.css'

const Sample1 = () => {

    useEffect(() => {
        document.body.addEventListener("pointermove", (e: any) => {
            const { currentTarget: el, clientX: x, clientY: y } = e;
            const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
            el.style.setProperty('--posX', x - l - w / 2);
            el.style.setProperty('--posY', y - t - h / 2);
        })
    }, [])

    return (
        <div className='sample1'>

        </div>
    )
}

export default Sample1