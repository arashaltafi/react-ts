const SwipeDetect = () => {

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchStartX = e.touches[0].clientX;
        const touchStartY = e.touches[0].clientY;

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;

            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    console.log('Swiped Right Mobile!');
                } else if (deltaX < 0) {
                    console.log('Swiped Left Mobile!');
                }
            } else {
                if (deltaY > 0) {
                    console.log('Swiped Down Mobile!');
                } else if (deltaY < 0) {
                    console.log('Swiped Up Mobile!');
                }
            }

            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const startX = e.clientX;
        const startY = e.clientY;

        const handleMouseUp = (e: MouseEvent) => {
            const endX = e.clientX;
            const endY = e.clientY;

            const deltaX = endX - startX;
            const deltaY = endY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    console.log('Swiped Right Desktop!');
                } else if (deltaX < 0) {
                    console.log('Swiped Left Desktop!');
                }
            } else {
                if (deltaY > 0) {
                    console.log('Swiped Down Desktop!');
                } else if (deltaY < 0) {
                    console.log('Swiped Up Desktop!');
                }
            }

            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div
            onTouchStart={handleTouchStart}
            onMouseDown={handleMouseDown}
            className='flex flex-col items-center justify-start gap-8 w-full h-screen overflow-hidden py-16 select-none'
        >
            <h1 className='title mt-8'>Swipe Detector</h1>

            <p className='subtitle mt-32'>
                Swipe To Detect And Show Log
            </p>
        </div>
    )
}

export default SwipeDetect