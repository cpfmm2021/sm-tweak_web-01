'use client'

import { useState } from 'react'
import { Card } from './ui/card'
import { useRouter } from 'next/navigation'

interface SubjectDetailPageProps {
  subject: string
}

export const grammarChapters = [
  { id: 1, name: '현재', description: '현재 시제의 다양한 용법을 학습합니다' },
  { id: 2, name: '과거', description: '과거 시제의 활용을 배웁니다' },
  { id: 3, name: '미래', description: '미래 시제의 표현 방법을 익힙니다' },
  { id: 4, name: '현재완료', description: '현재완료 시제의 개념과 활용을 학습합니다' },
  { id: 5, name: '과거완료', description: '과거완료 시제의 사용법을 배웁니다' },
  { id: 6, name: '미래완료', description: '미래완료 시제의 구조를 이해합니다' },
  { id: 7, name: '진행', description: '진행형의 다양한 활용을 학습합니다' },
  { id: 8, name: '조동사', description: '조동사의 의미와 용법을 익힙니다' },
  { id: 9, name: '부정사', description: '부정사의 기능과 활용을 배웁니다' },
  { id: 10, name: '동명사', description: '동명사의 역할과 사용법을 학습합니다' },
  { id: 11, name: '분사', description: '분사의 다양한 기능을 이해합니다' },
  { id: 12, name: '수동태', description: '수동태의 구조와 활용을 배웁니다' },
  { id: 13, name: '전치사', description: '전치사의 의미와 용법을 익힙니다' },
  { id: 14, name: '접속사', description: '접속사를 활용한 문장 구성을 학습합니다' },
  { id: 15, name: '관계사', description: '관계사의 종류와 용법을 배웁니다' },
  { id: 16, name: '가정법', description: '가정법의 구조와 활용을 이해합니다' },
  { id: 17, name: '비교 구문', description: '비교 표현의 다양한 방법을 학습합니다' },
]

export function SubjectDetailPage({ subject }: SubjectDetailPageProps) {
  const router = useRouter()
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null)

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{subject}</h1>
        <p className="text-muted-foreground">학습할 챕터를 선택하세요</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {grammarChapters.map((chapter) => (
          <Card 
            key={chapter.id}
            className="w-full aspect-square cursor-pointer hover:shadow-lg transition-shadow p-6 flex flex-col justify-between"
            onClick={() => {
              setSelectedChapter(chapter.name)
              router.push(`/learn/${subject.toLowerCase()}/${chapter.id}`)
            }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">{chapter.name}</h2>
              <p className="text-muted-foreground">{chapter.description}</p>
            </div>
            <div className="text-sm text-muted-foreground mt-4">
              20 Days • 100 문제
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
