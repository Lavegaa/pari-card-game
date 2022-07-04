import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import countriesData from "../../constant/countriesData";

const useGamePage = () => {
  const { stage } = useParams();
  const [countries, setCountries] = useState<any>({
    팔레스타인: "동예루살렘/라말라(이스라엘)",
    필리핀: "마닐라",
  });
  const [countriesArr, setCountriesArr] = useState<string[]>([]);
  const [check, setCheck] = useState<string[]>([]);

  const handleRandomCountries = () => {
    for (const [key, value] of Object.entries(countries)) {
      console.log("key:  ", key);
      console.log("value:  ", value);
      setCountriesArr((val: any) => [...val, key, value]);
    }
    setCountriesArr((val) => val.sort(() => Math.random() - 0.5));
  };

  const handleClick = (data: string) => {
    setCheck((val) => [...val, data]);
    const dom = document.getElementById(data);
    if (!dom) return;
    dom.style.backgroundColor = "blue";
  };

  useEffect(() => {
    handleRandomCountries();
  }, []);

  useEffect(() => {
    if (check.length === 2) {
      if (
        countries[check[0]] === check[1] ||
        countries[check[1]] === check[0]
      ) {
        setCountriesArr(
          countriesArr.filter(
            (country) => country !== check[0] && country !== check[1]
          )
        );
      }
      check.forEach((val) => {
        const dom = document.getElementById(val);
        if (!dom) return;
        dom.style.backgroundColor = "red";
      });
      setCheck([]);
    } else {
    }
  }, [check]);

  useEffect(() => {
    console.log("countriesArr:  ", countriesArr);
  }, [countriesArr]);

  return { countriesArr, handleClick };
};

export default useGamePage;
