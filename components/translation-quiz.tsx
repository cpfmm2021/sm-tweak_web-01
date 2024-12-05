'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { quizData } from '../data/quizData'
import { Volume2, Volume1 } from 'lucide-react'

interface QuizQuestion {
  korean: string;
  english: string;
}

export default function TranslationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [result, setResult] = useState<'correct' | 'incorrect' | null>(null)
  const [isSpeaking, setIsSpeaking] = useState(false)

  const checkAnswer = useCallback(() => {
    if (userAnswer.toLowerCase().trim() === quizData[currentQuestion].english.toLowerCase()) {
      setResult('correct')
    } else {
      setResult('incorrect')
    }
  }, [currentQuestion, userAnswer])

  const speak = useCallback((text: string, rate: number = 1) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      utterance.rate = rate
      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      speechSynthesis.speak(utterance)
    } else {
      alert('죄송합니다. 이 브라우저는 텍스트 음성 변환을 지원하지 않습니다.')
    }
  }, [])

  const nextQuestion = useCallback(() => {
    setCurrentQuestion((prev) => (prev + 1) % quizData.length)
    setUserAnswer('')
    setResult(null)
  }, [])

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        speechSynthesis.cancel()
      }
    }
  }, [])

  const renderQuestion = (question: QuizQuestion) => (
    <>
      <p className="mb-4">다음 문장을 영어로 번역하세요:</p>
      <p className="text-xl font-semibold mb-4">{question.korean}</p>
      <Input
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="영어 번역을 입력하세요..."
        className="w-full mb-4"
      />
      <Button onClick={checkAnswer} className="w-full">확인</Button>
    </>
  )

  const renderResult = (question: QuizQuestion) => (
    <div className="space-y-4">
      <h2 className={`text-xl font-bold ${result === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
        {result === 'correct' ? '정답!' : '오답!'}
      </h2>
      <p>문제: {question.korean}</p>
      <p>
        {result === 'correct' ? '정답' : '제출한 답'}: {result === 'correct' ? question.english : userAnswer}
      </p>
      {result === 'incorrect' && (
        <p>정답: {question.english}</p>
      )}
      <div className="flex justify-between">
        <Button onClick={() => speak(question.english)} disabled={isSpeaking}>
          <Volume2 className="mr-2 h-4 w-4" />
          재생 1배속
        </Button>
        <Button onClick={() => speak(question.english, 0.7)} disabled={isSpeaking}>
          <Volume1 className="mr-2 h-4 w-4" />
          재생 0.7배속
        </Button>
        <Button onClick={nextQuestion}>다음</Button>
      </div>
    </div>
  )

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>번역 퀴즈</CardTitle>
      </CardHeader>
      <CardContent>
        {result === null
          ? renderQuestion(quizData[currentQuestion])
          : renderResult(quizData[currentQuestion])
        }
      </CardContent>
    </Card>
  )
}
