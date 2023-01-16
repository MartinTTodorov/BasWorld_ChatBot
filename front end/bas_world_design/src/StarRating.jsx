import React, {useState} from "react";
import styled from "styled-components";
import {FaStar} from "react-icons/all";

const [currentValue, setCurrentValue] = useState(0);
const [hoverValue, setHoverValue] = useState(undefined);
const stars = Array(5).fill(0)
const colors ={
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

const handleClick = value => {
    setCurrentValue(value)
}

const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
};

const handleMouseLeave = () => {
    setHoverValue(undefined)
}

export default function StarRating(){
    return <Container>
        <h2>Did the conversation please you?</h2>
        <Stars>
            {stars.map((_, index) => {
                return (
                    <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                    />
                )
            })}
        </Stars>
        <Feedback placeholder={"What's your experience?"}/>
        <SubmitButton>Submit</SubmitButton>
    </Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
const Stars = styled.div`
  display: flex;
  flex-direction: row;
    `
const Feedback = styled.textarea`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  min-height: 100px;
  width: 300px;
`
const SubmitButton = styled.button`
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  width: 300px;
  padding: 10px;
    `