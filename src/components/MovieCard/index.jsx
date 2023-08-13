import styles from './MovieCard.module.css'

const MovieCard = () => {
    return (
        <div className={ styles.MovieCard }>
            <div className={ styles.cardImgBox }>
                <img className={ styles.cardImg } src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0" alt="movie poster" />
            </div>

            <div className={ styles.movieInfo }>

                <h3 className={ styles.title }>The Shawshank Redemption</h3>
                <p className={ styles.genre }>Genre: Drama, Crime</p>
                <div className={ styles.cardBottom }>
                    <p className={ styles.rating }>Rating: 9.3</p>
                    <p className={ styles.duration }>142 mins</p>
                </div>
            </div>
        </div >
    )
}
export default MovieCard