function ShowText({showText}){
    return(
        <>
            {showText 
            &&
            (<b>someText</b>)
            }
        </>
    );
}

export default ShowText;