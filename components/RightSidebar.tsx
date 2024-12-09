'use client'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star, AlignLeft, Trophy, Medal, Clock, CheckCircle } from "lucide-react"

export default function RightSidebar() {
  return (
    <div className="p-4 space-y-4">
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-2">
          <h2 className="text-xl font-bold">학습 도전</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#22C55E] rounded-full p-2">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">연속 학습</p>
              <p className="text-sm text-muted-foreground">3일 연속으로 학습했어요!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#F97316] rounded-full p-2">
              <AlignLeft className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">오늘의 목표</p>
              <p className="text-sm text-muted-foreground">목표까지 5문제 남았어요!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#EC4899] rounded-full p-2">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">획득 포인트</p>
              <p className="text-sm text-muted-foreground">이번 주 120점을 획득했어요!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#6366F1] rounded-full p-2">
              <Medal className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">랭킹</p>
              <p className="text-sm text-muted-foreground">상위 10%의 실력이에요!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#8B5CF6] rounded-full p-2">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">학습 시간</p>
              <p className="text-sm text-muted-foreground">오늘 2.5시간 학습했어요!</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#14B8A6] rounded-full p-2">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">완료한 문제</p>
              <p className="text-sm text-muted-foreground">오늘 15문제를 풀었어요!</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
