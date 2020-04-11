import React from "react";
import styled from "styled-components";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NasaBttn(props) {
  const ArrowBttn = styled.button`
    text-decoration: none;
    background-color: transparent;
    border: transparent;
    border-radius: 40px;
    height: 50px;
    margin: 4% 0;

    ${props =>
      props.type === "hover" ? `&:hover{background-color: #2196f3};` : null}
  `;
  // console.log(props.date);
  return (
    <div className="bttnContainer">
      <ArrowBttn
        onClick={props.backDate}
        value={props.date}
        type="hover"
        className="left"
      >
        <i>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </i>
      </ArrowBttn>
      <p>{props.date}</p>
      <ArrowBttn onClick={props.forwardDate} type="hover" className="right">
        <i>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </i>
      </ArrowBttn>
    </div>
  );
}
