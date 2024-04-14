import React, { useRef, useEffect } from "react";

interface Point {
    x: number;
    y: number;
}

const CanvasSample: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const isDrawing = useRef<boolean>(false);
    const lastPoint = useRef<Point | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            canvas.width = window.innerWidth * 2;
            canvas.height = window.innerHeight * 2;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            const context = canvas.getContext("2d");
            if (context) {
                context.scale(2, 2);
                context.lineCap = "round";
                context.strokeStyle = "black";
                context.lineWidth = 5;
                contextRef.current = context;
            }
        }
    }, [])

    const startDrawing = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
        const { offsetX, offsetY } = nativeEvent;
        isDrawing.current = true;
        lastPoint.current = { x: offsetX, y: offsetY };
    }

    const finishDrawing = () => {
        isDrawing.current = false;
        lastPoint.current = null;
    }

    const draw = ({ nativeEvent }: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing.current || !contextRef.current) return;

        const { offsetX, offsetY } = nativeEvent;
        const { x, y } = lastPoint.current || { x: 0, y: 0 };

        contextRef.current.beginPath();
        contextRef.current.moveTo(x, y);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        lastPoint.current = { x: offsetX, y: offsetY };
    }

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        if (context) {
            context.clearRect(0, 0, canvas?.width || 0, canvas?.height || 0);
        }
    }

    return (
        <div>
            <button
                onClick={clearCanvas}
                className="bg-red-500 hover:bg-red-600 transition-all px-8 py-6 rounded-lg text-xl m-8 text-white"
            >
                Clear
            </button>
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
            />
        </div>
    )
};

export default CanvasSample