'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from 'react'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

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
    return <div className="flex justify-center items-center h-screen">로딩 중...</div>
  }

  if (!user) {
    return null
  }

  return (
    <div className="p-6 md:p-10 space-y-6">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          {selectedSubject ? selectedSubject : "과목 선택"}
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            {selectedSubject && (
              <Button variant="outline" onClick={() => setSelectedSubject(null)}>
                뒤로 가기
              </Button>
            )}
          </div>
        </div>
      </header>

      {!selectedSubject ? (
        <section className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 justify-items-center" aria-label="학습 주제">
          {subjects.map((subject) => (
            <Card 
              key={subject.id} 
              className="w-full max-w-[220px] aspect-[3/4] cursor-pointer hover:shadow-lg transition-shadow overflow-hidden flex-shrink-0 relative mx-auto"
              onClick={() => setSelectedSubject(subject.name)}
            >
              <div className="relative h-full">
                <Image 
                  src={subject.image}
                  alt={subject.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-center"
                />
                <div className={`absolute bottom-0 left-0 right-0 bg-opacity-90 p-4 flex justify-between items-center ${
                  subject.id === 1 ? 'bg-[#915044]' :
                  subject.id === 2 ? 'bg-[#426B8D]' :
                  subject.id === 3 ? 'bg-[#5D7176]' :
                  subject.id === 4 ? 'bg-[#896E70]' :
                  subject.id === 5 ? 'bg-[#957D5B]' :
                  subject.id === 6 ? 'bg-[#6E7660]' :
                  'bg-[#5B8B7A]'
                }`}>
                  <div>
                    <h4 className="text-white text-base font-medium">{subject.name}</h4>
                    <p className="text-white text-xs opacity-80">{subject.subtext}</p>
                  </div>
                  <Button variant="default" size="sm" className="rounded-full transition-colors duration-200 bg-white text-black hover:bg-black hover:text-white">
                    OPEN
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </section>
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
