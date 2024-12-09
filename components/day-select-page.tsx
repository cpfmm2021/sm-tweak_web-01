'use client'

import { useState } from 'react'
import { Card } from './ui/card'
import { useRouter } from 'next/navigation'
import { grammarChapters } from './subject-detail-page'

interface DaySelectPageProps {
  subject: string
  chapter: string
}

export function DaySelectPage({ subject, chapter }: DaySelectPageProps) {
  const router = useRouter()
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  
  // chapter ID로 챕터 정보 찾기
  const chapterId = parseInt(chapter)
  const chapterInfo = grammarChapters?.find(c => c.id === chapterId) || {
    name: `Chapter ${chapter}`,
    description: '문법 학습'
  }

  const days = Array.from({ length: 20 }, (_, i) => ({
    day: i + 1,
    questionCount: 5,
    isCompleted: false
  }))

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{chapterInfo.name}</h1>
        <p className="text-muted-foreground">{chapterInfo.description}</p>
        <p className="text-sm text-muted-foreground mt-2">총 100문제 (5문제 × 20일)</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {days.map(({ day, questionCount, isCompleted }) => (
          <Card 
            key={day}
            className={`aspect-square cursor-pointer hover:shadow-lg transition-all p-4 flex flex-col items-center justify-center 
              ${selectedDay === day ? 'ring-2 ring-primary' : ''}
              ${isCompleted ? 'bg-primary/5' : ''}`}
            onClick={() => {
              setSelectedDay(day)
              router.push(`/learn/${subject.toLowerCase()}/${chapterId}/${day}`)
            }}
          >
            <div className="text-3xl font-bold mb-1">Day {day}</div>
            <div className="text-sm text-muted-foreground">5문제</div>
            {isCompleted && (
              <div className="text-xs text-primary mt-2">완료</div>
            )}
          </Card>
        ))}
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        * 각 Day는 5개의 문제로 구성되어 있습니다
      </div>
    </div>
  )
}
