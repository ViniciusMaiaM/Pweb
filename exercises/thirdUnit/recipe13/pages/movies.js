import React, { useState } from 'react';
import styles from '../style/Movies.module.css';

export default function Movies({ data }) {
    const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query
    const [moviesData, setMoviesData] = useState(data); // State to hold the fetched movies data

    const handleSearchClick = async () => {
        if (searchQuery === "") {
            setSearchQuery('bagda');
        }
        const res = await fetch(`http://www.omdbapi.com/?apikey=6e8073bf&s=${searchQuery}`);
        const newData = await res.json();
        setMoviesData(newData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    id="searchInput"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for a movie"
                    className={styles.input}
                />
                <button onClick={handleSearchClick} className={styles.button}>Search</button>
            </div>
            <div className={styles.moviesGrid}>
                {moviesData?.Search.map((m) => (
                    <div key={m.imdbID} className={styles.movieItem}>
                        <img src={m.Poster} alt={`${m.Title} Poster`} />
                        <div className={styles.title}>
                            {m.Title} --- {m.Year}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const res = await fetch(`http://www.omdbapi.com/?apikey=6e8073bf&s=sunshine`);
    const data = await res.json();

    // if (data.Response === "False") {
    //     return {
    //         props: {
    //             data: null
    //         }
    //     };
    // }

    return {
        props: {
            data,
        },
    };
}
