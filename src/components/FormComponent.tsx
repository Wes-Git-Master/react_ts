import React, {FormEvent, useState} from 'react';

interface IFormProps {
    username: string,
    password: string
}

const FormComponent = () => {

    const [formState, setformState] = useState<IFormProps>({
        username: 'foobar',
        password: '111'

    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    };

    const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input)
        setformState({...formState, username: input.value})
    };
    const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        console.log(input)
        setformState({...formState, password: input.value})
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name={'username'} value={formState.username} onChange={handleUsernameChange}/>
                <input type="text" name={'password'} value={formState.password} onChange={handlePasswordChange}/>
                <button>send</button>
            </form>
        </div>
    );
};

export {FormComponent};