import React, { useState } from 'react';
import decorationImage from '../assets/decoration.svg';

const foundations = [
    {
        name: "Dbam o Zdrowie",
        mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        items: "ubrania, jedzenie, sprzęt AGD, meble, zabawki"
    },
    {
        name: "Dla dzieci",
        mission: "Pomoc dzieciom z ubogich rodzin.",
        items: "ubrania, meble, zabawki"
    },
    {
        name: "Bez domu",
        mission: "Pomoc dla osób nieposiadających miejsca zamieszkania.",
        items: "ubrania, jedzenie, ciepłe koce"
    },
    {
        name: "Lorem ipsum 4",
        mission: "lorem ipsum",
        items: "lorem, lorem, lorem"
    },
    {
        name: "Lorem ipsum 5",
        mission: "lorem ipsum",
        items: "lorem, lorem, lorem"
    },
    {
        name: "Lorem ipsum 6",
        mission: "lorem ipsum",
        items: "lorem, lorem, lorem"
    },
    {
        name: "Lorem ipsum 7",
        mission: "lorem ipsum",
        items: "lorem, lorem, lorem"
    },
    {
        name: "Lorem ipsum 8",
        mission: "lorem ipsum",
        items: "lorem, lorem, lorem"
    }
]
const ngos = [
    {
        name: "Lorem Ipsum 1",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
    {
        name: "Lorem Ipsum 2",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
    {
        name: "Lorem Ipsum 3",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
    {
        name: "Lorem Ipsum 4",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
    {
        name: "Lorem Ipsum 5",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
]
const collections = [
    {
        name: "Lorem Ipsum 1",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
    {
        name: "Lorem Ipsum 2",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
    {
        name: "Lorem Ipsum 3",
        mission: "lorem ipsum",
        items: "lorem ipsum lorem ipsum"
    },
]

export const HomeWhoWeHelp = () => {
    const [selectedOption, setSelectedOption] = useState('foundations');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const handleSelection = (option) => {
        setSelectedOption(option);
        setCurrentPage(1);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div id="organizations">
            <div className="organizations-intro">
                <p>Komu pomagamy</p>
                <img src={ decorationImage } alt=""/>
                <div className="organizations-types">
                    <div className={`org-type ${selectedOption === 'foundations' ? 'selected' : ''}`}
                         onClick={() => handleSelection('foundations')}>Fundacjom
                    </div>
                    <div className={`org-type ${selectedOption === 'ngos' ? 'selected' : ''}`}
                         onClick={() => handleSelection('ngos')}>Organizacjom pozarządowym
                    </div>
                    <div className={`org-type ${selectedOption === 'collections' ? 'selected' : ''}`}
                         onClick={() => handleSelection('collections')}>Lokalnym zbiórkom
                    </div>
                </div>
            </div>
            <div className="organizations-content">
                {selectedOption === 'foundations' &&
                    <Foundations currentPage={currentPage} itemsPerPage={itemsPerPage} paginate={paginate}/>}
                {selectedOption === 'ngos' &&
                    <NGOs currentPage={currentPage} itemsPerPage={itemsPerPage} paginate={paginate}/>}
                {selectedOption === 'collections' &&
                    <Collections currentPage={currentPage} itemsPerPage={itemsPerPage} paginate={paginate}/>}
            </div>
        </div>
    )
}

const Foundations = ({ currentPage, itemsPerPage, paginate }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = foundations.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <p className="organizations-desc">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ul className="organizations-list">
                {currentItems.map((foundation) => {
                    return (
                        <li className="organizations-item" key={foundation.name}>
                            <div className="org-name-mission">
                                <p>Fundacja "{foundation.name}" </p>
                                <p>Cel i misja: {foundation.mission} </p>
                            </div>
                            <p>
                                {foundation.items}
                            </p>
                        </li>
                    )
                })}
            </ul>
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={foundations.length} paginate={paginate} />
        </>
    )
}

const NGOs = ({ currentPage, itemsPerPage, paginate }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ngos.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <p className="organizations-desc">W naszej bazie znajdziesz listę zweryfikowanych NGOs, z którymi
                współpracujemy. Możesz sprawdzić, czym się zajmują, komu pomagają i czego potrzebują.</p>
            <ul className="organizations-list">
                {currentItems.map((ngo) => {
                    return (
                        <li className="organizations-item" key={ngo.name}>
                            <div className="org-name-mission">
                                <p>Organizacja "{ngo.name}" </p>
                                <p>Cel i misja: {ngo.mission} </p>
                            </div>
                            <p>
                                {ngo.items}
                            </p>
                        </li>
                    )
                })}
            </ul>
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={ngos.length} paginate={paginate} />
        </>
    )
}

const Collections = ({ currentPage, itemsPerPage, paginate }) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = collections.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <>
            <p className="organizations-desc">W naszej bazie znajdziesz listę zweryfikowanych zbiórek przeprowadzanych lokalnie. Możesz sprawdzić, czego potrzebują.</p>
            <ul className="organizations-list">
                {currentItems.map((collection) => {
                    return (
                        <li className="organizations-item" key={collection.name}>
                            <div className="org-name-mission">
                                <p>Zbiórka "{collection.name}" </p>
                                <p>Cel i misja: {collection.mission} </p>
                            </div>
                            <p>
                                {collection.items}
                            </p>
                        </li>
                    )
                })}
            </ul>
            <Pagination currentPage={currentPage} itemsPerPage={itemsPerPage} totalItems={collections.length} paginate={paginate} />
        </>
    )
}

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    if (totalItems > 3) {
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i);
        }
    }

    if (pageNumbers.length <= 1) {
        return null;
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'selected' : ''}`}>
                        <a href={`#${number}`} className='page-link' onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
