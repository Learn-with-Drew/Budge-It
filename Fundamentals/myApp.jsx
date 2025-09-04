// main function
export default function MyApp(){
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}

function MyButton(){
    function handleClick(){
        alert("MyButton clicked");
    }

    return(
        <button onClick={handleClick}>this is a button</button>
    );
}