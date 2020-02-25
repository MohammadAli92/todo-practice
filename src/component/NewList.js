import React from 'react'

const NewList = props => {
    return (
        <>
            <tr onClick={props.onDone} style={{ backgroundColor: props.item.done ? "orange" : "" }}>
                <td>{props.item.title}</td>
                <td>{props.item.deadLine}</td>
            </tr>
        </>
    )
}

export default NewList