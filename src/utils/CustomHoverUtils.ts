const CustomHoverAnimation = (elementClass: string = '.customHover') => {
    const e = document.querySelectorAll(elementClass);

    e.forEach((el: any) => {
        const height = el.clientHeight;
        const width = el.clientWidth;

        const handleMove = (e: any) => {
            const xVal = e.layerX;
            const yVal = e.layerY;

            const yRotation = 20 * ((xVal - width / 2) / width);
            const xRotation = -20 * ((yVal - height / 2) / height);

            const transformString =
                'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';

            el.style.transform = transformString;
        };

        const handleMouseOut = () => {
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        };

        const handleMouseDown = () => {
            el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
        };

        const handleMouseUp = () => {
            el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseout', handleMouseOut);
        el.addEventListener('mousedown', handleMouseDown);
        el.addEventListener('mouseup', handleMouseUp);

        // Cleanup event listeners on component unmount
        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseout', handleMouseOut);
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mouseup', handleMouseUp);
        };
    })
}

const CustomMouseMove = (setMousePosition: Function) => {
    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX / 300, y: e.clientY / 300 });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
    };
}

export { CustomHoverAnimation, CustomMouseMove }