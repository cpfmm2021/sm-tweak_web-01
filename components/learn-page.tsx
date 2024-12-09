'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { Star, AlignLeft, Trophy, Medal, Clock, CheckCircle } from "lucide-react"
import Loading from './Loading'

const subjects = [
  { 
    id: 1, 
    name: "Grammar", 
    subtext: "Writing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grammar.jpg-MHupnGLmoUR80T1IUTLmFO9JOYCYIH.jpeg",
    route: "/courses/grammar"
  },
  { 
    id: 2, 
    name: "TOEFL 1", 
    subtext: "Writing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toefl1.jpg-DHLm6L3fQ1cmXlXpw2r37uV4mhmDDF.jpeg",
    route: "/courses/toefl-1"
  },
  { 
    id: 3, 
    name: "TOEFL 2", 
    subtext: "Writing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toefl2.jpg-G3euw9bZCKj1nfvwniUkdVqGEzIEG8.jpeg",
    route: "/courses/toefl-2"
  },
  { 
    id: 4, 
    name: "IELTS 1", 
    subtext: "Writing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ielts1.jpg-vtSY7bnC921ELNJLVaxvAg1NJPHBkr.jpeg",
    route: "/courses/ielts-1"
  },
  { 
    id: 5, 
    name: "IELTS 2", 
    subtext: "Writing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ielts2.jpg-Wdnee25sHgBET7hET9X15iFgAvy5oc.jpeg",
    route: "/courses/ielts-2"
  },
  { 
    id: 6, 
    name: "Everyday", 
    subtext: "Conversation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/everyday.jpg-jzYhdbyymgbeHoabvQTrRKCzEPKBta.jpeg",
    route: "/courses/everyday"
  },
  { 
    id: 7, 
    name: "Business", 
    subtext: "Conversation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business.jpg-gT4bxJ4WG1BM4a72zoMzbPCtEdlITU.jpeg",
    route: "/courses/business"
  },
]

const topics = [
  { id: 1, name: "현재", progress: 80, isCompleted: true },
  { id: 2, name: "과거", progress: 60, isCompleted: false },
  { id: 3, name: "미래", progress: 0, isCompleted: false },
  { id: 4, name: "현재완료", progress: 40, isCompleted: false },
  { id: 5, name: "과거완료", progress: 20, isCompleted: false },
  { id: 6, name: "미래완료", progress: 0, isCompleted: false },
]

export default function LearnPage() {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const { user, loading } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/sso')
    }
  }, [user, loading, router])

  if (loading) {
    return <Loading />
  }

  if (!user) {
    return null
  }

  return (
    <div className="p-6 md:p-10 space-y-6 w-full">
      <header className="flex flex-col gap-4 mb-8">
        <div className="flex items-center space-x-4">
          {selectedSubject && (
            <Button variant="outline" onClick={() => setSelectedSubject(null)}>
              뒤로 가기
            </Button>
          )}
        </div>
      </header>

      {!selectedSubject ? (
        <>
          <div className="rounded-lg border text-card-foreground bg-white shadow-sm w-full">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <div className="tracking-tight text-3xl font-bold">과목 선택</div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-6 items-start">
                {subjects.map((subject) => (
                  <Card 
                    key={subject.id} 
                    className="w-[176px] aspect-[3/4] cursor-pointer hover:shadow-lg transition-shadow overflow-hidden flex-shrink-0"
                    onClick={() => {
                      setSelectedSubject(subject.name)
                      router.push(`/learn/${subject.name.toLowerCase()}`)
                    }}
                  >
                    <div className="relative h-full">
                      <Image 
                        src={subject.image}
                        alt={subject.name}
                        fill
                        className="object-center"
                      />
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-opacity-90 p-4 flex justify-between items-center"
                        style={{
                          backgroundColor: subject.id === 1 ? '#915044' :
                          subject.id === 2 ? '#426B8D' :
                          subject.id === 3 ? '#5D7176' :
                          subject.id === 4 ? '#896E70' :
                          subject.id === 5 ? '#957D5B' :
                          subject.id === 6 ? '#6E7660' :
                          '#5B8B7A'
                        }}
                      >
                        <div>
                          <h4 className="text-white text-base font-medium">{subject.name}</h4>
                          <p className="text-white text-xs opacity-80">{subject.subtext}</p>
                        </div>
                        <Button 
                          variant="custom"
                          className="bg-white text-black hover:bg-black hover:text-white"
                          size="sm"
                        >
                          OPEN
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <section className="mt-8" aria-label="학습 도전">
            <div className="rounded-lg border text-card-foreground bg-white shadow-sm w-full">
              <div className="flex flex-col space-y-1.5 p-6 pb-2">
                <div className="tracking-tight text-3xl font-bold">학습 도전</div>
              </div>
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-6 items-start">
                  <div className="w-[176px] aspect-square flex flex-col justify-between p-6 bg-[#F4F4F5] rounded-xl flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#22C55E] rounded-full p-2">
                        <Star className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">연속 학습</p>
                        <p className="text-sm text-muted-foreground">3일 연속으로 학습했어요!</p>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-[#22C55E] self-end">3</div>
                  </div>
                  <div className="w-[176px] aspect-square flex flex-col justify-between p-6 bg-[#F4F4F5] rounded-xl flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#F97316] rounded-full p-2">
                        <AlignLeft className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">오늘의 목표</p>
                        <p className="text-sm text-muted-foreground">목표까지 5문제 남았어요!</p>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-[#F97316] self-end">5</div>
                  </div>
                  <div className="w-[176px] aspect-square flex flex-col justify-between p-6 bg-[#F4F4F5] rounded-xl flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#EC4899] rounded-full p-2">
                        <Trophy className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">획득 포인트</p>
                        <p className="text-sm text-muted-foreground">이번 주 획득한 포인트예요!</p>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-[#EC4899] self-end">120</div>
                  </div>
                  <div className="w-[176px] aspect-square flex flex-col justify-between p-6 bg-[#F4F4F5] rounded-xl flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#6366F1] rounded-full p-2">
                        <Medal className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">랭킹</p>
                        <p className="text-sm text-muted-foreground">상위 10%의 실력이에요!</p>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-[#6366F1] self-end">127</div>
                  </div>
                  <div className="w-[176px] aspect-square flex flex-col justify-between p-6 bg-[#F4F4F5] rounded-xl flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#8B5CF6] rounded-full p-2">
                        <Clock className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">학습 시간</p>
                        <p className="text-sm text-muted-foreground">오늘 총 학습 시간이에요!</p>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-[#8B5CF6] self-end">2.5</div>
                  </div>
                  <div className="w-[176px] aspect-square flex flex-col justify-between p-6 bg-[#F4F4F5] rounded-xl flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#14B8A6] rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">완료한 문제</p>
                        <p className="text-sm text-muted-foreground">오늘 푼 문제 수예요!</p>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-[#14B8A6] self-end">15</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" aria-label="학습 주제">
          <div className="tracking-tight text-3xl font-bold">학습기록</div>
          {topics.map((topic) => (
            <Card key={topic.id} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <h3 className="font-medium mb-2">{topic.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${topic.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {topic.isCompleted ? "완료" : `${topic.progress}% 진행 중`}
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      )}
    </div>
  )
}
