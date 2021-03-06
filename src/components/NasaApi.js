import React, { useState, useEffect } from "react";
import NasaBttn from "./NasaBttn";
import NasaBlock from "./NasaBlock";
import moment from "moment";
import axios from "axios";
import styled from "styled-components";

const NasaApi = props => {
  const [nasa, setNasa] = useState([]);
  const [urlDate, setUrlDate] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=hGgRfUrh2RfpzBI5Uixpc8oFzuaFOTOWp3FtytzF&date=${urlDate}`
      )
      .then(result => {
        setNasa(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [urlDate]); //<-- Makes it fire once

  const MainWrapper = styled.div`
    width: 80%;
    margin: 1% 10%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-flow: column;
    border: 2px solid rgba(255, 200, 255, 0.26);
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: -7px 7px 10px 5px rgba(130, 101, 134, 0.15);
    border-radius: 30px;
  `;

  let dateArray = [];
  const [counter, setCounter] = useState(0);

  function backDate(e) {
    let value = "";
    let a = moment();
    let b = moment("2018-09-20");
    for (let m = a; m.isAfter(b); m.subtract(1, "days")) {
      dateArray.push(m.format("YYYY-MM-DD"));
    }

    for (let i = 0; i < dateArray.length; i++) {
      if (counter === i) {
        console.log(dateArray[i]);
        nasa.date = dateArray[i];
      }
    }
    if (counter === 6) {
      setCounter(0);
    }
    setCounter(counter + 1);
    setUrlDate(nasa.date);
  }

  function forwardDate(e) {
    //let a = moment(`${nasa.date}`);
    //let b = moment("2018-09-20");
    if (urlDate > moment()) {
      for (let i = 0; i < dateArray.length; i++) {
        if (counter === i) {
          console.log(dateArray[i]);
          nasa.date = dateArray[i];
        }
      }
      // for (let m = a; m.isAfter(b); m.add(1, "days")) {
      //  dateArray.push(m.format("YYYY-MM-DD"));
      //}
    }

    setCounter(counter + 1);
    setUrlDate(nasa.date);
  }

  return (
    <MainWrapper className="NasaContainer">
      <NasaBttn backDate={backDate} forwardDate={forwardDate} date={urlDate} />

      <NasaBlock
        key={nasa.toString()} //did not have to map over because it is not an array
        title={nasa.title}
        img={nasa.url}
        explain={nasa.explanation}
        copy={nasa.copyright}
        hdimg={nasa.hdurl}
      />
    </MainWrapper>
  );
};

export default NasaApi;
