const Film = ({name, url}) => {
    return (
        <>
           <ul> 
               <a href={url}>{name}</a>
           </ul>
        </>
    );
};

export default Film;