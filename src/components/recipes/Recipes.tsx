import React, {FC, useEffect, useState} from 'react';
import Recipe from "../recipe/Recipe";
import {getAllRecipes} from "../../services/recipes.api.service";
import {IRecipeProps} from "../../models/Recipe";


const Recipes: FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]); // це масив який повертає гетер і сеттер


    useEffect(() => {
        getAllRecipes().then(value => console.log(value.data));

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
