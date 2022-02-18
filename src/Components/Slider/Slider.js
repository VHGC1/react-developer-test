import React, { Component } from "react";
import { Img, ImgWrapper } from "./Slider.styled";

export default class Slider extends Component {
  render() {
    const { photos, id } = this.props;

    return (
      <ImgWrapper>
        <Img src={photos[0]} alt={id} />
      </ImgWrapper>
    );
  }
}
