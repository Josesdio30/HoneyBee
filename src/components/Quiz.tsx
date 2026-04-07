'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, feedbacks, translations } from '../data/honeyData';
import { useLanguage } from '../LanguageContext';
import { RefreshCw } from 'lucide-react';

export default function Quiz() {
  const { language } = useLanguage();
  const t = translations[language];
  const questions = quizQuestions[language];
  const feedbackList = feedbacks[language];

  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption === questions[currentStep].answer) {
      setScore(score + 1);
    }
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const getFeedback = () => {
    if (score <= 2) return feedbackList[0];
    if (score <= 4) return feedbackList[1];
    return feedbackList[2];
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--foreground)' }}>
      {!showResult ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="tag">{t.quiz_soal} {currentStep + 1} / {questions.length}</span>
            </div>
            <h3 style={{ marginBottom: '2rem' }}>{questions[currentStep].question}</h3>
            
            <div className="options">
              {questions[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  className={`quiz-option ${selectedOption === idx ? 'active' : ''}`}
                  onClick={() => setSelectedOption(idx)}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              className="btn-primary"
              style={{ width: '100%', marginTop: '1rem', opacity: selectedOption === null ? 0.5 : 1 }}
              onClick={handleNext}
              disabled={selectedOption === null}
            >
              {currentStep < questions.length - 1 ? t.quiz_next : t.quiz_result}
            </button>
          </motion.div>
        </AnimatePresence>
      ) : (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
            {score === 5 ? '🏆' : score >= 3 ? '👏' : '🤔'}
          </div>
          <h2 style={{ marginBottom: '1rem' }}>{t.quiz_score} {score} / 5</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', fontStyle: 'italic' }}>
            "{getFeedback()}"
          </p>
          
          <button className="btn-primary" onClick={resetQuiz}>
            <RefreshCw size={20} /> {t.quiz_retry}
          </button>
        </motion.div>
      )}
    </div>
  );
}
