import Film from "./Film";

const FilmList = ({films}) =>{

    const filmNodes = films.map((film)=>{
        return( 
            <Film name={film.name} url={film.url} key={film.id}/>
        )
    });

    return (
        <>
            <h3>{filmNodes}</h3>
        </>
    );
};

export default FilmList;