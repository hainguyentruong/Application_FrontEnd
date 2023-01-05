import React, { useCallback, useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import axios from "axios";
import Header from "../components/nav/Header";
import LoadingCard from "../components/card/LoadingCard";
import CountryCard from "../components/card/CountryCard";



const Deaths = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    let formatCountries = countries?.sort((a,b) => b?.TotalDeaths - a?.TotalDeaths);

  
    const loadAllCountries = useCallback(async () => {
        setLoading(true);
        const res = await axios.get("https://api.covid19api.com/summary");
        setCountries(res?.data?.Countries);
        setLoading(false);
      }, []);

    useEffect(() => {
        loadAllCountries();
    },[loadAllCountries]);

  

    return (
        <div className="container-fluid">
            <div className="col">
                <div className="col-md-3">
                    <Header />
                </div>
                <div className="col-md-20">
                    <div className="jumbotron text-danger h1 font-weight-bold text-center">
                        <Jumbotron text={["The Most Total Confirmed Cases", "The Highest Number Of Deaths", "The Least Number Of Recovered Cases"]}/>
                    </div>
                    <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
                        The Highest Number Of Deaths
                    </h4>
                    {loading ? (
                        <LoadingCard count={3} />
                    ) : (
                        <div className="row">
                            {formatCountries.map((country) => (
                                <div key={country.ID} className="col-md-4" style={{marginTop: 20}}>
                                    <CountryCard  country={country} total={country?.TotalDeaths} text={"Total Deaths"}/>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default Deaths;