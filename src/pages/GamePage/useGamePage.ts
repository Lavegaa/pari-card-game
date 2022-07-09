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
      handleStyle(data, "selected");
    } else {
      check.forEach((val) => {
        handleStyle(val, "idle");
      });
      setCheck([data]);
      handleStyle(data, "selected");
    }
  };

  const handleStyle = (data: string, style: string) => {
    const dom = document.getElementById(data);
    if (!dom) return;
    if (style === "idle") {
      dom.style.transform = "translateZ(0)";
      dom.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
      dom.style.color = "black";
    } else if (style === "selected") {
      dom.style.boxShadow = "rgb(38, 57, 77) 0px 20px 30px -10px";
      dom.style.transform = "translateZ(10px)";
    } else if (style === "wrong") {
      dom.style.transform = "translateZ(0)";
      dom.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
      dom.style.color = "red";
    }
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
          handleStyle(val, "wrong");
        });
      }
    } else {
    }
  }, [check]);

  return { countriesArr, handleClick };
};

export default useGamePage;
