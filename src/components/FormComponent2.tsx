import React, {FormEvent, useState} from 'react';

interface IFormProps {
    username: string,
    password: string
}

const FormComponent2 = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: 'foobar',
        password: '111'

    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let user = {
            username: formState.username,
            password: formState.password
        }
        console.log(user)
    };


    const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input.name)
        setFormState({...formState, [input.name]: input.value})

    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export {FormComponent2};