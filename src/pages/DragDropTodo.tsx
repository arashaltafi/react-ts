import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";

interface Item {
    id: string;
    content: string;
}

interface Column {
    id: string;
    title: string;
    items: Item[];
}

const DragDropTodo = () => {
    const [columns, setColumns] = useState<{ [key: string]: Column }>({
        todo: {
            id: "todo",
            title: "To Do",
            items: [
                { id: "1", content: "Item 1" },
                { id: "2", content: "Item 2" },
                { id: "3", content: "Item 3" },
                { id: "4", content: "Item 4" },
                { id: "5", content: "Item 5" }
            ]
        },
        doing: {
            id: "doing",
            title: "Doing",
            items: []
        },
        inProgress: {
            id: "inProgress",
            title: "inProgress",
            items: []
        },
        done: {
            id: "done",
            title: "Done",
            items: []
        }
    });

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        if (start === finish) {
            const newItems = Array.from(start.items);
            const [movedItem] = newItems.splice(source.index, 1);
            newItems.splice(destination.index, 0, movedItem);

            const newColumn = {
                ...start,
                items: newItems
            };

            setColumns(prevState => ({
                ...prevState,
                [newColumn.id]: newColumn
            }));
        } else {
            const startItems = Array.from(start.items);
            const [movedItem] = startItems.splice(source.index, 1);

            const newStart = {
                ...start,
                items: startItems
            };

            const finishItems = Array.from(finish.items);
            finishItems.splice(destination.index, 0, movedItem);

            const newFinish = {
                ...finish,
                items: finishItems
            };

            setColumns(prevState => ({
                ...prevState,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }));
        }
    };

    const handleLogLists = () => {
        console.log("New Lists:", columns);
    };

    return (
        <div className="w-full h-screen flex items-center justify-between flex-col">
            <div className="flex items-center justify-center w-full">
                <DragDropContext onDragEnd={handleDragEnd}>
                    {Object.values(columns).map(column => (
                        <div
                            key={column.id}
                            className="w-full h-full flex items-center justify-center flex-col gap-8"
                        >
                            <h2>{column.title}</h2>
                            <Droppable droppableId={column.id}>
                                {(provided) => (
                                    <ul
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: "#F43F5E",
                                            borderRadius: 8,
                                            border: "2px solid #06B6D4",
                                            padding: 8,
                                            width: 250,
                                            minHeight: 500
                                        }}
                                    >
                                        {column.items.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                                {(provided) => (
                                                    <li
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={{
                                                            userSelect: "none",
                                                            padding: 16,
                                                            margin: "0 0 8px 0",
                                                            backgroundColor: "white",
                                                            ...provided.draggableProps.style
                                                        }}
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
                        </div>
                    ))}
                </DragDropContext>
            </div>

            <button
                className="btnSuccess px-6 py-3 text-2xl font-bold flex items-center justify-center mb-8"
                onClick={handleLogLists}
            >
                Log Lists
            </button>

        </div>
    )
}

export default DragDropTodo