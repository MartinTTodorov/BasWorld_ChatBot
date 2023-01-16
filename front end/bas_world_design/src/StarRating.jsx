import React, { useState } from 'react';
import styled from 'styled-components';

const StarRatingContainer = styled.div` display: flex; align-items: center;`;

const Star = styled.span`
  font-size: 2em;
  color: #ffc107;
  cursor: pointer;

  &:hover,
  &:active {
    color: #ccc;
  }
`;

const FeedbackContainer = styled.div` margin-top: 1rem;`;

const TextArea = styled.textarea`width: 100%; padding: 0.5rem; font-size: 1rem; border-radius: 0.25rem; border: 1px solid #ccc;`;

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41;
  }
`;

const StarRating = ({ maxStars = 5 }) => {
    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Rating: ${rating} Feedback:${feedback}`);
        setFeedback('');
    }

    return (
        <>
            <StarRatingContainer>
                {Array.from({ length: maxStars }, (_, i) => (
                    <Star key={i} onClick={() => setRating(i + 1)}>
                        {i < rating ? '★' : '☆'}
                    </Star>
                ))}
            </StarRatingContainer>
            <FeedbackContainer>
                <form onSubmit={handleSubmit}>
                    <TextArea
                        placeholder="Leave your feedback here..."
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>

                </form>
            </FeedbackContainer>
        </>
    );
};

export default StarRating;