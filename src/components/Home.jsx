import React, { useEffect, useState } from 'react';
import Header from './Header';
import { CHENNAI_API } from '../utils/Constants';
import Shimmer from './Shimmer';
import Recipes from './Recipes';
import RestaurantsList from './RestaurantsList';
import mockData from '../utils/mockData';
import { useData } from '../utils/DataContext';
import BestSuggestions from './BestSuggestions';

const Home = () => {
  const { useMockData } = useData();
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [JSON, setJSON] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [bestInCities, setBestInCities] = useState([]);
  const [bestCuisines, setBestCuisines] = useState([])


  useEffect(() => {
    fetchData();
  }, [useMockData]); // Fetch data whenever useMockData changes

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading state to true while fetching data
      let data;
      if (useMockData) {
        data = mockData;
      } else {
        const response = await fetch(CHENNAI_API);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        data = await response.json();
      }
      console.log(data)
      setJSON(data);
      setRecipes(data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []);
      setListOfRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      setBestInCities(data?.data?.cards[6]?.card?.card?.brands || [] );
      setBestCuisines(data?.data?.cards[7]?.card?.card?.brands || [])
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      // After fetching data, set loading state to false after 0.5s
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
  };

  return (
    <div className="home-container">
      <div className="home-wrapper">
        {/* Whats on your mind */}
        {loading ? (
          <Shimmer type={'circle'} numRows={1} itemsPerRow={6} />
        ) : (
          <Recipes
            recipes={recipes}
            title={JSON?.data?.cards[0]?.card?.card?.header?.title}
          />
        )}

        <hr className="section-ruler" />

        {/* Top Restaurant Chains */}
        {loading ? (
          <Shimmer type={'res-list'} numRows={5} itemsPerRow={4} />
        ) : (
          <RestaurantsList
            list={listOfRestaurants}
            title={JSON?.data?.cards[2]?.card?.card?.title}
          />
        )}

        <hr className="section-ruler" />
        
        {loading ? (
          <Shimmer type={'suggestion-cards'} numRows={3} itemsPerRow={4} />
        ) : (
          <BestSuggestions title={JSON?.data?.cards[6]?.card?.card?.title} suggestionList={bestInCities} />
        )}

        <hr className="section-ruler" />    
        
        {loading ? (
          <Shimmer type={'suggestion-cards'} numRows={3} itemsPerRow={4} />
        ) : (
          <BestSuggestions title={JSON?.data?.cards[7]?.card?.card?.title} suggestionList={bestCuisines} />
        )}  

      </div>
    </div>
  );
};

export default Home;
