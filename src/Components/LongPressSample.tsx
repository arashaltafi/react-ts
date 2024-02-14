import { useState, useCallback } from 'react';
import { useLongPress } from 'use-long-press';

const LongPressSample = () => {
    const [enabled, setEnabled] = useState(true);

    const callback = useCallback((event: any) => {
        alert('Long pressed!');
    }, []);

    const bind = useLongPress(enabled ? callback : null, {
        onStart: event => console.log('Press started'),
        onFinish: event => console.log('Long press finished'),
        onCancel: event => console.log('Press cancelled'),
        onMove: event => console.log('Detected mouse or touch movement'),
        filterEvents: event => true, // All events can potentially trigger long press (same as 'undefined')
        threshold: 500, // In milliseconds
        captureEvent: true, // Event won't get cleared after React finish processing it
        cancelOnMovement: 25, // Square side size (in pixels) inside which movement won't cancel long press
        cancelOutsideElement: true, // Cancel long press when moved mouse / pointer outside element while pressing
    });

    return (
        <div className='w-full flex flex-col items-center justify-center py-16 gap-8 select-none'>
            <button className='btnSuccess' {...bind()}>Press and hold</button>
            <div>
                <label className='cursor-pointer' htmlFor="enabled">
                    <input
                        type="checkbox"
                        id="enabled"
                        checked={enabled}
                        onChange={() => setEnabled(current => !current)}
                    />
                    Hook enabled
                </label>
            </div>
        </div>
    )
}

export default LongPressSample