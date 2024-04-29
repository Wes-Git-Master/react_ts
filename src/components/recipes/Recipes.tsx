import React, {FC, useEffect, useState} from 'react';
import Recipe, {IRecipeProps, IRecipeTypeProps} from "../recipe/Recipe";

const Recipes: FC = () => {


    const [recipes, setRecipes] = useState<IRecipeProps[]>([]); // це масив який повертає гетер і сеттер


    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(value => value.json())
            .then(({recipes}) => {
                setRecipes(recipes);
            });
    }, []);

    console.log('.');


    return (
        <div>
            {
                recipes
                    .map(
                        (value: IRecipeProps) => (
                            <Recipe key={value.id}
                                    id={value.id}
                                    name={value.name}
                                    cuisine={value.cuisine}
                                    mealType={value.mealType}
                                    instructions={value.instructions}
                                    image={value.image}
                            />))
            }

        </div>
    );
};

export default Recipes;
