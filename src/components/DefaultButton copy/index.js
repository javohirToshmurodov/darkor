import React from "react";
import { DefaultButtonWrapper } from "../../styles";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function DefaultButton(props) {
  const navigate = useNavigate();
  return (
    <DefaultButtonWrapper onClick={() => navigate(`employee`)}>
      {props.title}
      <IoIosArrowForward />
    </DefaultButtonWrapper>
  );
}
