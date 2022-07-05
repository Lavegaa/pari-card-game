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
      setCountriesArr((val: any) => [...val, key, value]);
    }
    setCountriesArr((val) => val.sort(() => Math.random() - 0.5));
  };

  const handleClick = (data: string) => {
    if (check.length < 2) {
      setCheck((val) => [...val, data]);
      handleStyle(data, "blue");
    } else {
      check.forEach((val) => {
        handleStyle(val, "white");
      });
      setCheck([data]);
      handleStyle(data, "blue");
    }
  };

  const handleStyle = (data: string, style: string) => {
    const dom = document.getElementById(data);
    if (!dom) return;
    dom.style.backgroundColor = style;
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
      } else
        check.forEach((val) => {
          handleStyle(val, "red");
        });
      {
      }
    } else {
    }
  }, [check]);

  return { countriesArr, handleClick };
};

export default useGamePage;
