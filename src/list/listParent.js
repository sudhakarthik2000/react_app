 export const ListParentOrdered = () => {

    return(
        <ol>

            <Listitems></Listitems>
        </ol>
    );

}

export const ListParentUnOrdered = () => {
    return(
        <ul>
            
            <Listitems></Listitems>
        </ul>
    )
}

 export const Listitems = () => {
    return(
        <li>Apple</li>,
        <li>Banana</li>
    );
}