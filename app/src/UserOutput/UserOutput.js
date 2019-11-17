import React from 'react';

const userOutput = (props)=>{
return <div>
    <p> User name: {(props.name)} </p>
    {
        props.show?
        <p>second paragregh </p>
    :null}

</div>

};export default userOutput;