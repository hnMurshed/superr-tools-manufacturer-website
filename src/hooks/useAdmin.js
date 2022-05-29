import { useEffect, useState } from "react";

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        if (user) {
            const userEmail = user?.email;

            fetch('https://mysterious-ravine-35179.herokuapp.com/checkadmin', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
                    'email': userEmail
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAdmin(data.admin);
            })
            .finally( () => {
                setIsLoading(false);
            })
        }
    }, [user]);

    return [admin, isLoading];
}

export default useAdmin;