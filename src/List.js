// const List = ({ items })=>{

//     return(
//         items.for (const element of object) {
//             <ul>
//             <li>element</li>
//             </ul>
//         }
//     )

// }


const List = ({ items }) => {
    return (
        // key={index}
        <ul>
            {items.map((element, index) => (
                <li key={index}>{element}</li>
            ))}
        </ul>
    );
};


export default List;