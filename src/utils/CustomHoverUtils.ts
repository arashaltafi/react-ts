const CustomHoverUtils = () => {
    const calculateAngle = (
        e: any,
        item: HTMLSpanElement,
        parent: HTMLButtonElement
    ) => {
        let dropShadowColor = `rgba(0, 0, 0, 0.3)`;

        if (parent.getAttribute('data-filter-color') !== null) {
            dropShadowColor = parent.getAttribute('data-filter-color')!;
        }

        if (parent.getAttribute('data-custom-perspective') !== null) {
            parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}px`;
        }

        let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
        let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

        let halfWidth = item.getBoundingClientRect().width / 2;
        let halfHeight = item.getBoundingClientRect().height / 2;

        let calcAngleX = (x - halfWidth) / 6;
        let calcAngleY = (y - halfHeight) / 4;

        item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.15)`;
        parent.style.perspective = `${halfWidth * 2}px`;
        item.style.perspective = `${halfWidth * 3}px`;

        let calcShadowX = (x - halfWidth) / 3;
        let calcShadowY = (y - halfHeight) / 3;

        item.style.filter = `drop-shadow(${-calcShadowX}px ${calcShadowY}px 15px ${dropShadowColor})`;
    };

    document.querySelectorAll('.customHover').forEach((item) => {
        item.addEventListener('mouseover', function (e: Event) {
            if (e.target instanceof HTMLButtonElement) {
                calculateAngle(e, e.target.querySelector('span')!, e.target);
            }
        });

        item.addEventListener('mousemove', function (e: Event) {
            if (e.target instanceof HTMLButtonElement) {
                calculateAngle(e, e.target.querySelector('span')!, e.target);
            }
        });

        item.addEventListener('mouseout', function (e: Event) {
            if (e.target instanceof HTMLButtonElement) {
                let dropShadowColor = `rgba(0, 0, 0, 0.3)`;

                if (e.target.getAttribute('data-filter-color') !== null) {
                    dropShadowColor = e.target.getAttribute('data-filter-color')!;
                }

                e.target.querySelector('span')!.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
                e.target.querySelector('span')!.style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
            }
        });
    });
}

const CustomHoverUtilsBest = () => {
    const el = document.getElementById('customHoverBest');

    if (el) {
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

        return () => {
            // Cleanup event listeners on component unmount
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseout', handleMouseOut);
            el.removeEventListener('mousedown', handleMouseDown);
            el.removeEventListener('mouseup', handleMouseUp);
        };
    }
}

export { CustomHoverUtils, CustomHoverUtilsBest }