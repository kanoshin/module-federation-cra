import { useId } from 'react';

const Button = () => {
    const id = useId();
    return <button>Hello from remote {id}</button>
};
export default Button;
