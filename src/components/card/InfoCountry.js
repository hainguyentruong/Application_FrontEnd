import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";


const InfoCountry = ({countryCode}) => {
    const [infoCountry, setInfoCountry] = useState([])
    
    
    const getInfoCountry = useCallback(async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if(res?.data){
            setInfoCountry(res?.data);
        }
    }, [countryCode]);

    useEffect(() => {
        getInfoCountry();
    }, [getInfoCountry]);
    return(
        <>
            <div className="p-3">
                <div className="column">
                    <label>Name:</label>
                    <text className="ml-2 text-primary">{infoCountry[0]?.name?.common}</text>
                </div>
                <div className="column">
                    <label>Population:</label>
                    <text className="ml-2 text-primary">{infoCountry[0]?.population}</text>
                </div>
                <div className="column">
                    <label>Capital:</label>
                    <text className="ml-2 text-primary">{infoCountry[0]?.capital}</text>
                </div>
                <div className="column">
                    <label>Region:</label>
                    <text className="ml-2 text-primary">{infoCountry[0]?.region}</text>
                </div>
                <div className="column">
                    <label>Subregion:</label>
                    <text className="ml-2 text-primary">{infoCountry[0]?.subregion}</text>
                </div>
            </div>
        </>
    )
}

export default InfoCountry;