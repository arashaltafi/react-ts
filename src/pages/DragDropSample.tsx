import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

//npm install react-beautiful-dnd
const DragDropSample = () => {
    const [items, setItems] = useState([
        { id: "1", content: "Item 1" },
        { id: "2", content: "Item 2" },
        { id: "3", content: "Item 3" },
        { id: "4", content: "Item 4" },
        { id: "5", content: "Item 5" }
    ]);

    const handleDragEnd = (result: any) => {
        if (!result.destination) return;
        const newItems = [...items];
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);
        setItems(newItems);
    };

    return (
        <div className="w-full h-screen py-8 flex flex-col gap-16">
            <h1 className='title'>DragDropSample</h1>
            <div className='w-full h-full flex items-center justify-center flex-col gap-8'>
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="list">
                        {(provided: any) => (
                            <ul
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className="w-[80%] flex flex-col gap-4 justify-center items-center"
                            >
                                {items.map((item, index) => (
                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                        {(provided: any) => (
                                            <li
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="w-full bg-pink-600 p-4 text-2xl font-bold rounded-xl text-white text-center"
                                            >
                                                {item.content}
                                            </li>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

export default DragDropSample