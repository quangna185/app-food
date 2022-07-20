import React from 'react'
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

 const Recipes = () => {
  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/img/gallery/img_1.jpg",
        authorImg: "/img/img_1 (1).jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/img_2 (1).jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/img_3 (1).jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/img_4 (1).jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/img_5 (1).jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/img/gallery/img_1.jpg",
        authorImg:"/img/img_2 (1).jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/img/gallery/img_4.jpg",
        authorImg: "/img/img_4 (1).jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/img_2 (1).jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/img_1 (1).jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/img/gallery/img_10.jpg",
        authorImg: "/img/img_4 (1).jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/img/gallery/img_5.jpg",
        authorImg: "/img/img_5 (1).jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/img/gallery/img_6.jpg",
        authorImg: "/img/img_5 (1).jpg",
    }
].sort(() => Math.random() - 0.5)
  return (
    <div>
        <PreviousSearches/>
        <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
    </div>
  
  )
}
export default Recipes;
