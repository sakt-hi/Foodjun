import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconStarRating from '../assets/IconStarRating';
import { IMAGE_URL } from '../utils/Constants';
import { getRatingColor } from '../utils/getRatingColor';
import IconClose from '../assets/IconClose';
import Shimmer from './Shimmer'; // Import your shimmer component

const RestaurantsList = ({ list, title }) => {
    const [resList, setResList] = useState(list);
    const [filteredRestaurant, setFilteredRestaurant] = useState(list);
    const [deliveryFilter, setDeliveryFilter] = useState(false);
    const [pureVegFilter, setPureVegFilter] = useState(false);
    const [topRatedFilter, setTopRatedFilter] = useState(false);
    const [offerFilter, setOfferFilter] = useState(false);
    const [cost300600, setCost300600] = useState(false);
    const [cost300, setCost300] = useState(false);
    const [showShimmer, setShowShimmer] = useState(true);
    const [filterCount, setFilterCount] = useState(null);

    useEffect(() => {
        applyFilters();
        const count = [deliveryFilter, pureVegFilter, topRatedFilter, offerFilter, cost300600, cost300].filter(Boolean).length;
        setFilterCount(count);
    }, [deliveryFilter, pureVegFilter, topRatedFilter, offerFilter,cost300600,cost300]);

    const applyFilters = () => {
        // Show shimmer
        setShowShimmer(true);

        let filteredList = list;

        // Apply delivery filter if selected
        if (deliveryFilter) {
            filteredList = filteredList.filter(
                (res) => res.info.sla.deliveryTime < 25
            );
        }

        // Apply pure veg filter if selected
        if (pureVegFilter) {
            filteredList = filteredList.filter(
                (res) => res.info.veg === true
            );
        }

        // Apply top rated filter if selected
        if (topRatedFilter) {
            filteredList = filteredList.filter(
                (res) => res.info.avgRating >= 4.0
            );
        }

        //Apply offers filter
        if (offerFilter) {
            filteredList = filteredList.filter(res =>
                (res.info.aggregatedDiscountInfoV2 && 
                 res.info.aggregatedDiscountInfoV2.header) ||
                (res.info.aggregatedDiscountInfoV3 && 
                 res.info.aggregatedDiscountInfoV3.header)
            );
        }
        if(cost300600){
            filteredList = filteredList.filter(res=>{
                const cost = extractNumericValue(res.info.costForTwo);
                return cost >= 300 && cost <= 600;
            })
        }

        if(cost300){
            filteredList = filteredList.filter(res=>{
                const cost = extractNumericValue(res.info.costForTwo);
                return cost < 300;
            })
        }
        

        // Update filtered restaurant list
        setFilteredRestaurant(filteredList);

        // Hide shimmer after 500ms
        setTimeout(() => {
            setShowShimmer(false);
        }, 500);
    };

    const extractNumericValue = (costString) => {
        // Remove any non-numeric characters from the string and parse the result as an integer
        return parseInt(costString.replace(/[^\d]/g, ''));
    };

    const clearFilter = (filter) => {
        switch (filter) {
            case 'delivery':
                setDeliveryFilter(false);
                break;
            case 'pureVeg':
                setPureVegFilter(false);
                break;
            case 'topRated':
                setTopRatedFilter(false);
                break;
            case 'offer':
                setOfferFilter(false);
                break;
            case 'cost300600':
                setCost300600(false);
                break;
            case 'cost300':
                setCost300(false);
                break;
            case 'clear-all':
                setDeliveryFilter(false);
                setPureVegFilter(false);
                setTopRatedFilter(false);
                setOfferFilter(false);
                setCost300600(false);
                setCost300(false);
                break;
            default:
                break;
        }
    };

    return (
        <div className='res-list-container'>
            <p className="section-title">{title}</p>
            {showShimmer ? (
                // Render shimmer while loading
                <Shimmer type={'card-filter'} numRows={5} itemsPerRow={4} />
            ) : (
                // Render filtered restaurant list
                <>
                    
                    <div className="facets-container">
                        <div className="filter-btn">
                            <button className={`facets-btn${deliveryFilter ? ' filter-active' : ''}`} onClick={() => { setDeliveryFilter(!deliveryFilter); applyFilters(); }} >
                                Fastest Delivery
                                {deliveryFilter && <IconClose className="close-icon" onClick={() => clearFilter('delivery')} />}
                            </button>
                            <button className={`facets-btn${topRatedFilter ? ' filter-active' : ''}`} onClick={() => { setTopRatedFilter(!topRatedFilter); applyFilters(); }}>
                                Top Rated
                                {topRatedFilter && <IconClose className="close-icon" onClick={() => clearFilter('topRated')} />}
                            </button>
                            <button className={`facets-btn${pureVegFilter ? ' filter-active' : ''}`} onClick={() => { setPureVegFilter(!pureVegFilter); applyFilters(); }}>
                                Pure Veg
                                {pureVegFilter && <IconClose className="close-icon" onClick={() => clearFilter('pureVeg')} />}
                            </button>
                            <button className={`facets-btn${offerFilter ? ' filter-active' : ''}`} onClick={() => { setOfferFilter(!offerFilter); applyFilters(); }}>
                                Offers
                                {offerFilter && <IconClose className="close-icon" onClick={() => clearFilter('offer')} />}
                            </button>
                            {!cost300 && (
                                <button className={`facets-btn${cost300600 ? ' filter-active' : ''}`} onClick={() => { setCost300600(!cost300600); applyFilters(); }}>
                                    Rs. 300 - 600
                                    {cost300600 && <IconClose className="close-icon" onClick={() => clearFilter('cost300600')} />}
                                </button>
                            )}
                            {!cost300600 && (
                                <button className={`facets-btn${cost300 ? ' filter-active' : ''}`} onClick={() => { setCost300(!cost300); applyFilters(); }}>
                                    Less than Rs. 300
                                    {cost300 && <IconClose className="close-icon" onClick={() => clearFilter('cost300')} />}
                                </button>
                            )}
                        </div>
                        <div className="clear-filters">
                            {filterCount>0 && <button className='clear-btn' onClick={()=>clearFilter('clear-all')} >Clear Filters({filterCount})</button>}
                        </div>
                    </div>
                    <div className="res-list-item">
                        {filteredRestaurant.map((item) => (
                            <Link className="res-list-image" key={item.info.id}>
                                <div className="image-container">
                                    <div className="overlay">
                                        <p>
                                            {item.info &&
                                                (item.info.aggregatedDiscountInfoV3 ? (
                                                    <>
                                                        {item.info.aggregatedDiscountInfoV3.header}{' '}
                                                        {item.info.aggregatedDiscountInfoV3.subHeader}
                                                    </>
                                                ) : item.info.aggregatedDiscountInfoV2 ? (
                                                    <>
                                                        {item.info.aggregatedDiscountInfoV2.header}{' '}
                                                        {item.info.aggregatedDiscountInfoV2.subHeader}
                                                    </>
                                                ) : null)}
                                        </p>
                                    </div>
                                    <img src={IMAGE_URL + item.info.cloudinaryImageId} alt="restaurant-images" />
                                </div>
                                <div className="res-list-info">
                                    <h3 title={item.info.name} >{item.info.name}</h3>
                                    <div className="res-list-rating-sla">
                                        <IconStarRating color={getRatingColor(item.info.avgRating)} />
                                        <p>
                                            {item.info.avgRatingString} - {item.info.sla.slaString}
                                        </p>
                                    </div>
                                    <p>{item.info.locality}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default RestaurantsList;
