import React, { useEffect, useState } from "react";
import axios from "axios";

function CountryTable(){
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState("");
    const [capitalChecked, setCapitalChecked] = useState(false);

    useEffect(() => {
        axios.get("https://restcountries.com/v2/all").then(response => setCountries(response.data));
    }, []);

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto mt-2">
                    <input type="checkbox" id="filter" name="filter" onChange={() => {
                        if(capitalChecked === false)
                        {
                        setCapitalChecked(true)
                        }
                        else
                        {
                        setCapitalChecked(false)
                        }
                    }}/>
                    <label for="filter" className="text-white">Search by Capital</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="bi bi-search"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
                    </div>
                    <table className="table table-sm text-white mt-2">
                        <thead className="table-danger text-center">
                            <tr>
                                <th scope="col" className="col-md-2 h4">Name</th>
                                <th scope="col" className="col-md-2 h4">Capital</th>
                                <th scope="col" className="col-md-2 h4">Region</th>
                                <th scope="col" className="col-md-2 h4">Flag</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                capitalChecked === false ? (
                                countries.filter((country) => country.capital?.includes(query) || country.name.includes(query)
                                || country.region.includes(query)).map(filteredCountry => {
                                return(
                                    <tr key={filteredCountry.name} className="align-middle text-center">
                                        <td>{filteredCountry.name}</td>
                                        <td>{filteredCountry.capital}</td>
                                        <td>{filteredCountry.region}</td>
                                        <td>
                                            <img src={filteredCountry.flag} alt={filteredCountry.name} style={{width: "100px"}}/>
                                        </td>
                                    </tr>
                                );
                                })) : countries.filter((country) => country.capital?.includes(query)).map(filteredCountry => {
                                    return(
                                        <tr key={filteredCountry.name} className="align-middle text-center">
                                            <td>{filteredCountry.name}</td>
                                            <td>{filteredCountry.capital}</td>
                                            <td>{filteredCountry.region}</td>
                                            <td>
                                                <img src={filteredCountry.flag} alt={filteredCountry.name} style={{width: "100px"}}/>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default CountryTable;