import React from 'react';
import { useState } from 'react';
import { useDrag } from 'react-dnd';

function InputCard(ordinal) {

    const collection = (monitor) => {
        return {
            isDragging: !!monitor.isDragging()
        }
    };

    const [content, setContent] = useState([]);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "InputCard",
        item: {
            content: content,
            ordinal: ordinal
        },
        collect: collection
    }));

    const handleChange = (event) => {
        setContent(event.target.value);
    }

    return (
        <div id={ordinal}
            ref={drag}
            className="inputCard"
        >

            <textarea placeholder="Type your sentence here."
                value={content} cols="5" rows="3" maxLength="100"
                onChange={handleChange} />

        </div>
    )
}

export default InputCard;
