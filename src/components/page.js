import { useState, useEffect } from "react"
import { RickAndMortyIcon } from '../assets/rickandmorty'
import spinner from '../assets/spinner.gif';
import { Preloader } from './preloader'
import { ToTop } from './toTop'
import { Modal } from './modal'
import { Characters } from './characters'
import { Switch } from './buttons/switch'
import { Pagination } from './buttons/pagination';

export function Page() {
    const [characters, setCharacters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('')
    const [isPagination, setIsPagination] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [selectedCharacter, setSelectedCharacter] = useState(null);

  

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(
                    `https://rickandmortyapi.com/api/character/?page=${currentPage}`
                );
                const data = await response.json();
                console.log(data.info.pages);
                console.log(currentPage);        
                if (isPagination) {
                    setCharacters(() => data.results);
                } else  {
                    
                    setCharacters((prevCharacters) => {
                        if (currentPage === 1) {
                            return data.results;
                        } else {
                            return [...prevCharacters, ...data.results];
                        }
                    }
                    )
                } 
            } catch (error) {
                setError(error.message)
            }
            setIsLoading(false)
        };
        fetchCharacters();
    }, [currentPage, isPagination]);

    const nextPage = () => {
        setCurrentPage((page) => page + 1);
    };

    const prevPage = () => {
        setCurrentPage((page) => page - 1);
    };


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
        console.log(isPagination);
        if (isAtBottom) {
            nextPage();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handlePagination = () => {
        setIsPagination(!isPagination);
    };


    if (error) {
        return <h1>Error: {error}</h1>
    }



    return (
        <>
            <RickAndMortyIcon />
            <Switch func={handlePagination} />
            {isPagination && <Pagination funcNext={nextPage} funcPrev={prevPage} />}

            {isLoading ? (
                <Preloader src={spinner} alt="spinner" />
            ) : <Characters data={characters} func={handleCardClick} />}
            {isPagination && <Pagination funcNext={nextPage} funcPrev={prevPage} />}
            {selectedCharacter && <Modal data={selectedCharacter} func={closeModal} />}

            {currentPage > 1 && <ToTop func={scrollToTop} />}
        </>
    );
};

