const { useState, useEffect } = require("react")

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://mob-shop-server-foysal767.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                        setToken(data.accessToken)
                    }
                })
        }
    }, [email])
    return [token]
}
export default useToken;