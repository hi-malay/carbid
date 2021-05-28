import { useState, useEffect } from 'react'
import axios from 'axios'
import { API } from "./constant"
function CategoriesAPI(props: any) {
    const [userData, setUserData] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [isReferValid, setReferValid] = useState(false);

    const mainApi = () => {
        axios.get(API.main_url)
            .then((response: any) => {
                if (response.data) {
                    console.log("data", response.data)
                    setUserData(response.data)
                    setIsValid(true)
                    console.log("byr2", userData)
                }

            }).catch((error: any) => {
                console.log("error", error)
            });

    }

    useEffect(() => {
        mainApi()
    }, [props.location.pathname])

    return {

        userData: [userData, setUserData],
        isValid: [isValid, setIsValid],
        isReferValid: [isReferValid, setReferValid],
    }
}

export default CategoriesAPI
