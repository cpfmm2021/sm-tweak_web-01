import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function GrammarCoursePage() {
  return (
    <div className="p-6">
      <header className="flex items-center mb-6">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Grammar</h1>
      </header>
      <h2 className="text-lg mb-6">학습 주제를 선택하세요.</h2>
      {/* 여기에 Grammar 과목의 세부 주제들을 추가할 수 있습니다 */}
    </div>
  )
}
