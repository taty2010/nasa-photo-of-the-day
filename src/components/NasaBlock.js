import React from "react";
import styled from "styled-components";

export default function NasaBlock(props) {
  return (
    <div className="block" key={props.toString()}>
      <h1>{props.title}</h1>
      <a href={props.hdimg}>
        <img alt={props.title} src={props.img} />
      </a>
      <p className="mainText">{props.explain}</p>
      <p className="mainText">{props.copy}</p>
    </div>
  );
}
