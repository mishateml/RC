import React from 'react';

const userInput = (props)=>{
    const style = {
        boxShadow: '10px 9px 12px 1px rgba(0, 0, 255, .2)'

    }
return <div>
    <input
    type="text"
    style = {style}
    onChange={props.changed}
    placeholder = {props.val}
    />
    <button onClick={props. btnOfOtpt}>click!!!</button>
</div>

};export default userInput;