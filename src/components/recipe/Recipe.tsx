import React, {FC} from 'react';
import {IRecipeProps} from "../../models/Recipe";


export type IRecipeTypeProps = IRecipeProps & { children?: React.ReactNode };
const Recipe: FC<IRecipeTypeProps> = ({
                                          id,
                                          name,
                                          mealType,
                                          cuisine,
                                          instructions,
                                          image
                                      }) => {
    return (
        <div>
            <h2>{name}. {mealType}. {cuisine}</h2>

            <img src={image} alt={name}/>

            <ul>
                {
                    instructions?.map((instruction, index) => <li key={index}>{instruction}</li>)
                }
            </ul>


        </div>
    );
};

export default Recipe;
