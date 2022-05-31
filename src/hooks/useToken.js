import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (user) {
            const email = user.user.email;

            fetch('https://mysterious-ravine-35179.herokuapp.com/user', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                },
                body: JSON.stringify({ email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('access_token', data.accessToken);
                        setToken(data.accessToken);
                    }
                });
        };
    }, [user]);

    return [token];
};

export default useToken;