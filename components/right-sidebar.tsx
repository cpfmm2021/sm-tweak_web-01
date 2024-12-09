'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Star, X, Ticket, AlignLeft, ChevronsUpDown } from 'lucide-react'
import LevelSelectModal from './level-select-modal'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'ko', label: '한국어' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Pусский' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'pl', label: 'Polski' },
  { code: 'ms', label: 'Bahasa Melayu' },
  { code: 'uk', label: 'Українська' },
  { code: 'ro', label: 'Română' },
  { code: 'vi', label: 'Tiếng Việt' }
]

const difficulties = ['초급', '중급', '고급', '전문가']

const periods = ['최근 7일', '최근 30일', '최근 60일', '최근 90일']

export default function RightSidebar() {
  const [language, setLanguage] = useState<Language>(languages[0])
  const [difficulty, setDifficulty] = useState(difficulties[0])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0])
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false)
  const [currentLevel, setCurrentLevel] = useState('BEGINNER')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedPeriod);

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  const handleLevelSelect = (level: string) => {
    setCurrentLevel(level.toUpperCase())
    setIsLevelModalOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside style={{ width: '240px' }} className="h-screen bg-[#FAFAFA] border-l border-[#E4E4E7] p-6 flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Ticket className="h-5 w-5" />
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">5</span>
        </div>
        <Select defaultValue={language.code} onValueChange={(value) => {
          const lang = languages.find(l => l.code === value)
          if (lang) setLanguage(lang)
        }}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="언어 선택" />
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                {lang.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button 
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setIsLevelModalOpen(true)}
        >
          <AlignLeft className="h-4 w-4" />
          <span className="text-sm font-medium">{currentLevel}</span>
        </Button>
      </div>

      <Card className="bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-white">프리미엄 구독하기</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-end space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <p className="text-sm text-white/90">무제한 문제 풀이</p>
          </div>
          <div className="flex items-center space-x-2">
            <AlignLeft className="h-5 w-5 text-yellow-400" />
            <p className="text-sm text-white/90">모든 주제 학습 가능</p>
          </div>
          <div className="flex items-center space-x-2">
            <Ticket className="h-5 w-5 text-yellow-400" />
            <p className="text-sm text-white/90">프리미엄 혜택 제공</p>
          </div>
          <Button variant="secondary" className="w-full mt-4 bg-white text-[#7C3AED] hover:bg-white/90">
            구독하기
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full bg-white shadow-sm">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-3xl font-bold">학습 기록</CardTitle>
            <Select defaultValue={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[180px] z-50">
                <SelectValue placeholder="기간 선택" />
              </SelectTrigger>
              <SelectContent className="z-50">
                {periods.map((period) => (
                  <SelectItem key={period} value={period}>
                    {period}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-[#F4F4F5] rounded-xl w-[180px] h-[180px] relative">
              <p className="text-[18px] font-medium text-muted-foreground absolute top-4 left-4">총문제</p>
              <p className="text-6xl font-bold text-[#22C55E] absolute bottom-4 right-4">6</p>
            </div>
            <div className="text-center p-4 bg-[#F4F4F5] rounded-xl w-[180px] h-[180px] relative">
              <p className="text-[18px] font-medium text-muted-foreground absolute top-4 left-4">정답률</p>
              <p className="text-6xl font-bold text-[#22C55E] absolute bottom-4 right-4">60<span className="text-2xl">%</span></p>
            </div>
            <div className="text-center p-4 bg-[#F4F4F5] rounded-xl w-[180px] h-[180px] relative">
              <p className="text-[18px] font-medium text-muted-foreground absolute top-4 left-4">정답</p>
              <p className="text-6xl font-bold text-[#F97316] absolute bottom-4 right-4">60</p>
            </div>
            <div className="text-center p-4 bg-[#F4F4F5] rounded-xl w-[180px] h-[180px] relative">
              <p className="text-[18px] font-medium text-muted-foreground absolute top-4 left-4">오답</p>
              <p className="text-6xl font-bold text-[#EC4899] absolute bottom-4 right-4">60</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-auto">
        <Card className="bg-[#FAFAFA] border border-[#E4E4E7]">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold">전면 광고</h3>
              <p className="text-sm text-muted-foreground">광고를 제거하고 싶다면?</p>
              <Button variant="outline" className="w-full mt-2 bg-white border-[#E4E4E7] hover:bg-gray-50" onClick={() => {}}>
                <X className="mr-2 h-4 w-4" />
                광고 제거하기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <LevelSelectModal
        open={isLevelModalOpen}
        onOpenChange={setIsLevelModalOpen}
        currentLevel={currentLevel}
        onLevelSelect={setCurrentLevel}
      />
    </aside>
  )
}
