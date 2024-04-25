import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [questions] = useState([
    { id: 1, text: "What is your favorite color?", options: ["Red", "Blue", "Green", "Yellow"] },
    { id: 2, text: "Which fruits do you like?", options: ["Apple", "Banana", "Orange", "Grapes"] },
    // Add more questions here
  ]);

  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill([]));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
  const [synthesis, setSynthesis] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const synthesis = window.speechSynthesis;
    setSynthesis(synthesis);
  }, []);

  useEffect(() => {
    if (synthesis && quizStarted) {
      const utterance = new SpeechSynthesisUtterance(questions[currentQuestionIndex].text);
      synthesis.speak(utterance);
      setTimeout(() => {
        setCurrentOptionIndex(0);
      }, 3000); // Start reading options after 3 seconds
    }
  }, [currentQuestionIndex, synthesis, questions, quizStarted]);

  useEffect(() => {
    if (synthesis && quizStarted) {
      if (currentOptionIndex < questions[currentQuestionIndex].options.length) {
        const utterance = new SpeechSynthesisUtterance(questions[currentQuestionIndex].options[currentOptionIndex]);
        synthesis.speak(utterance);
        setTimeout(() => {
          setCurrentOptionIndex(prevIndex => prevIndex + 1);
        }, 3000); // Read the next option after 3 seconds
      } else {
        // All options have been read, move to the next question
        setTimeout(() => {
          setCurrentOptionIndex(0);
          setCurrentQuestionIndex(prevIndex => (prevIndex + 1) % questions.length);
        }, 15000); // Move to the next question after 15 seconds
      }
    }
  }, [currentOptionIndex, synthesis, currentQuestionIndex, questions, quizStarted]);

  const handleOptionChange = (optionIndex) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = updatedOptions[currentQuestionIndex].includes(optionIndex)
      ? updatedOptions[currentQuestionIndex].filter(index => index !== optionIndex)
      : [...updatedOptions[currentQuestionIndex], optionIndex];
    setSelectedOptions(updatedOptions);
  };

  const handleStartButtonClick = () => {
    setQuizStarted(true);
  };

  return (
    <div>
      <h2>Quiz App</h2>
      {!quizStarted && (
        <button onClick={handleStartButtonClick}>Start Quiz</button>
      )}
      {quizStarted && (
        <div>
          <p>Question: {questions[currentQuestionIndex].text}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  name={`option-${index}`}
                  checked={selectedOptions[currentQuestionIndex].includes(index)}
                  onChange={() => handleOptionChange(index)}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
