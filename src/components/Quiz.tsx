'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions, feedbacks, translations } from '../data/honeyData';
import { useLanguage } from '../LanguageContext';
import { RefreshCw, CheckCircle2, Trophy, Award, Search } from 'lucide-react';

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
      setScore(prev => prev + 1);
    }
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const getRank = () => {
    if (score === 5) return { icon: <Trophy size={48} />, title: language === 'id' ? 'Master Madu' : 'Honey Master', color: '#f1c40f' };
    if (score >= 3) return { icon: <Award size={48} />, title: language === 'id' ? 'Pecinta Madu' : 'Honey Lover', color: '#3498db' };
    return { icon: <Search size={48} />, title: language === 'id' ? 'Pembelajar' : 'Learner', color: '#95a5a6' };
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  const progress = ((currentStep) / questions.length) * 100;

  return (
    <div className="card" style={{ 
      maxWidth: '700px', 
      margin: '0 auto', 
      color: 'var(--foreground)', 
      padding: '0', 
      overflow: 'hidden',
      border: 'none',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      {/* Progress Bar */}
      {!showResult && (
        <div style={{ width: '100%', height: '8px', background: 'rgba(0,0,0,0.05)', position: 'relative' }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            style={{ height: '100%', background: 'var(--primary)', position: 'absolute', top: 0, left: 0 }}
          />
        </div>
      )}

      <div style={{ padding: '3rem 2.5rem' }}>
        {!showResult ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, opacity: 0.5, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {t.quiz_soal} {currentStep + 1} / {questions.length}
                </span>
              </div>
              <h3 style={{ marginBottom: '2.5rem', fontSize: '1.5rem', lineHeight: '1.4' }}>{questions[currentStep].question}</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {questions[currentStep].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedOption(idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      borderRadius: '16px',
                      border: '2px solid',
                      borderColor: selectedOption === idx ? 'var(--primary)' : 'rgba(0,0,0,0.1)',
                      background: selectedOption === idx ? 'rgba(250, 195, 41, 0.1)' : 'white',
                      textAlign: 'left',
                      fontSize: '1rem',
                      fontWeight: selectedOption === idx ? 700 : 500,
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s ease',
                      color: 'var(--foreground)'
                    }}
                  >
                    {option}
                    {selectedOption === idx && <CheckCircle2 size={20} color="var(--secondary)" />}
                  </motion.button>
                ))}
              </div>

              <button
                className="btn-primary"
                style={{ 
                  width: '100%', 
                  padding: '1.25rem',
                  opacity: selectedOption === null ? 0.5 : 1,
                  cursor: selectedOption === null ? 'not-allowed' : 'pointer'
                }}
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
            <div style={{ 
              width: '100px', 
              height: '100px', 
              background: getRank().color + '20', 
              color: getRank().color,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem'
            }}>
              {getRank().icon}
            </div>
            
            <h4 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', opacity: 0.6, marginBottom: '0.5rem' }}>
              {language === 'id' ? 'Peringkat Anda' : 'Your Rank'}
            </h4>
            <h2 style={{ marginBottom: '0.5rem', fontSize: '2.5rem', color: getRank().color }}>{getRank().title}</h2>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '2rem', opacity: 0.8 }}>
              {t.quiz_score} {score} / 5
            </div>

            <div style={{ 
              background: 'var(--background)', 
              padding: '2rem', 
              borderRadius: '24px', 
              marginBottom: '3rem',
              position: 'relative'
            }}>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', lineHeight: '1.6' }}>
                "{feedbackList[score >= 5 ? 2 : score >= 3 ? 1 : 0]}"
              </p>
            </div>
            
            <button className="btn-primary" onClick={resetQuiz} style={{ padding: '1rem 2rem' }}>
              <RefreshCw size={20} /> {t.quiz_retry}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
