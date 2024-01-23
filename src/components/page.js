import { useState, useEffect } from "react"
import { RickAndMortyIcon } from '../assets/rickandmorty'
import spinner from '../assets/spinner.gif';
import { Preloader } from './preloader'
import { ToTop } from './toTop'
import { Modal } from './modal'
import { Characters } from './characters'
const API_URL = 'https://rickandmortyapi.com/api/character/?page=$'

export function Page() {
    const [charactersList, setCharactersList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(API_URL + currentPage);
                const data = await response.json();
                setCharactersList((prevCharacters) => {
                    if (currentPage === 1) {
                        return data.results;
                    } else {
                        return [...prevCharacters, ...data.results];
                    }
                });
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        };

        fetchCharacters();
    }, [currentPage]);

    const handleCardClick = (character) => {
        setSelectedCharacter(character);
    };

    const closeModal = () => {
        setSelectedCharacter(null);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleScroll = () => {
        const isAtBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if (isAtBottom) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    
    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <>
            <RickAndMortyIcon />
            {isLoading ? (
                <Preloader src={spinner} alt="spinner" />
            ) : <Characters data={charactersList} func={handleCardClick} />}

            {selectedCharacter && <Modal data={selectedCharacter} func={closeModal} />}

            {currentPage > 1 && <ToTop func={scrollToTop} />}
        </>
    );
};

