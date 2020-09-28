import React from 'react'
/*
// functional without state
function Greet(){
    return <h1>hello vish</h1>
}
*/
const Greet = props => {
    console.log(props)
return (
    <div>
<h1>hello {props.name} a.k.a {props.heroname}</h1>
{props.children}
</div>
)}
export default Greet