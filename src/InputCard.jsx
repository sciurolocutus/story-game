import React from 'react';
import { useState } from 'react';
import { useDrag } from 'react-dnd';

function SentenceCard(ordinal) {
    const [content, setContent] = useState([]);
    const [{isDragging}, drag] = useDrag(() => ({
        type: "InputCard",
        item: {
            content: content,
            ordinal: ordinal
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
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
            onChange={handleChange}/>

        </div>
    )
}

export default SentenceCard;
