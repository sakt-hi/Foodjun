import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import IconChevronDown from '../assets/IconChevronDown';
import IconChevronUp from '../assets/IconChevronUp';

const BestSuggestions = ({suggestionList,title}) => {
    const [initialSuggestion, setInitialSuggestion] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [showShimmer, setShowShimmer] = useState(false);

    useEffect(() => {
        // Filter first 8 suggestions initially
        setInitialSuggestion(suggestionList.slice(0, 11));
    }, [suggestionList]);

    const handleToggleShowAll = () => {
        setShowShimmer(true);
        // Toggle to show all suggestions
        setShowAll(!showAll);
        // Hide shimmer after 500ms
        setTimeout(() => {
            setShowShimmer(false);
        }, 500);
    };
    

  return (
    <div className='best-sg-container'>
        <h3 className='section-title' >{title}</h3>
        {showShimmer ? (
            <Shimmer type={'suggestion-btn'} numRows={3} itemsPerRow={4} />
        ) : (
            <>
                <div className="sg-cards">
                    {(showAll ? suggestionList : initialSuggestion).map((item,index)=>(
                        <button className='sg-btn' key={index} >{item.text}</button>
                    ))}
                    {!showAll && <button className='show-more' onClick={()=>handleToggleShowAll()}>
                        Show More <IconChevronDown />
                    </button>}
                </div>
                {showAll && <button className='show-less' onClick={()=>handleToggleShowAll()}>
                    Show Less <IconChevronUp />
                </button>}
            </>
        ) }
    </div>
  )
}

export default BestSuggestions