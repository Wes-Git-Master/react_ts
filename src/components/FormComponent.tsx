import React from 'react';

interface IFormProps{
    username:string,
    password:string
}

const FormComponent = () => {


    return (
        <div>
            <form>
                <input type="text" name={'username'}/>
                <input type="text" name={'password'}/>
            </form>
            
        </div>
    );
};

export {FormComponent};