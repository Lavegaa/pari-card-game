import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import countriesData from "../../constant/countriesData";

const useGamePage = () => {
  const { stage } = useParams();
  const [countries, setCountries] = useState<any | null>(null);
  const [countriesArr, setCountriesArr] = useState<string[]>([]);
  const [check, setCheck] = useState<string[]>([]);

  const handleRandomCountries = () => {
    for (const [key, value] of Object.entries(countries)) {
      setCountriesArr((val: any) => [...val, key, value]);
    }
    setCountriesArr((val) => val.sort(() => Math.random() - 0.5));
  };

  const handleGenerateCountries = (num: number) => {
    let stage = num === (2 && 8) ? num : 2;
    const tempCountries = Object.keys(countriesData)
      .sort(() => Math.random() - 0.5)
      .slice(0, stage);
    let temp: any = {};
    tempCountries.forEach((country) => {
      temp[country] = countriesData[country as keyof typeof countriesData];
    });
    setCountries(temp);
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
    handleGenerateCountries(Number(stage) ?? 2);
  }, []);

  useEffect(() => {
    if (!countries) return;
    handleRandomCountries();
  }, [countries]);

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
      } else {
        check.forEach((val) => {
          handleStyle(val, "red");
        });
      }
    } else {
    }
  }, [check]);

  return { countriesArr, handleClick };
};

export default useGamePage;
