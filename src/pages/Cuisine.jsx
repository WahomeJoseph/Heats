import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import { API_KEY } from '../api/Api';
import { Skeleton } from '@mui/material';

const Cuisine = () => {
    
    const [cuisine, setCuisine] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('')
    const params = useParams();
    console.log(params);

    useEffect(() => {
        const getCuisine = async (name) => {
            try {
            const results = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`);
            if (!results.ok) {
                throw new Error('Network Response Failed!');
            }
            const recipe = await results.json();
            if (recipe && recipe.results) {
                setCuisine(recipe.results);
                console.log(cuisine);
            } else {
                setError('No Recipes Found.');
            }
            } catch (err) {
                setError('Failed to fetch data.');
                console.error(err, 'No Recipe Data was Fetched!')
            }
        }
        getCuisine(params.type);
    });

    if(cuisine.length === 0) 
    {
        const number = [1,2,3,4,5,6,7,8,9,10];
        return (
            <div className="cuisine-skeleton">
            {number.map((data) => (
            <Skeleton 
                variant='rounded'
                width={300}
                height={200}
                key={data}
                animation='wave'
                className='cuisine-skltn'
            />
            ))}
            </div>
        )
    }

    return (
        <div className="flex wrap justify-center mt-8 gap-4 p-10">
            {cuisine.map((data) => (
                <RecipeCard data={data} key={data.id} />
            ))}
        </div>
    )
}

export default Cuisine;