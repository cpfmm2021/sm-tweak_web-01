'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, Star, X, Ticket, AlignLeft } from 'lucide-react'
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

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  const handleLevelSelect = (level: string) => {
    setCurrentLevel(level.toUpperCase())
    setIsLevelModalOpen(false)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside style={{ width: '30rem' }} className="h-screen bg-background border-l p-4 flex flex-col space-y-4">
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
      
      <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white h-64">
        <CardHeader>
          <CardTitle className="text-white text-lg">프리미엄 구독하기</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-end p-6">
          <p className="text-sm text-purple-100 whitespace-nowrap overflow-hidden text-overflow-ellipsis">
            광고 제거 및 무제한 AI 기능!
          </p>
          <Button variant="secondary" className="mt-8 w-full bg-white text-purple-700 hover:bg-purple-100">
            요금제 구독하기
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-base">학습 기록</CardTitle>
            <div className="relative">
              <button onClick={toggleDropdown} className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[100px]">
                <span style={{ pointerEvents: 'none' }}>{selectedPeriod}</span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white border rounded-md shadow-lg mt-2 w-[100px]">
                  {periods.map((period) => (
                    <li key={period} className="px-4 py-2 hover:bg-gray-100" onClick={() => { setSelectedPeriod(period); toggleDropdown(); }}>
                      {period}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-2 bg-muted rounded-lg w-[180px] h-[180px] flex flex-col justify-center">
              <p className="text-[18px] font-medium text-muted-foreground ml-12 mt-12">총문제</p>
              <p className="text-2xl font-bold text-green-500">6</p>
            </div>
            <div className="text-center p-2 bg-muted rounded-lg w-[180px] h-[180px] flex flex-col justify-center">
              <p className="text-[18px] font-medium text-muted-foreground ml-12 mt-12">정답률</p>
              <p className="text-2xl font-bold text-green-500">60<span className="text-base">%</span></p>
            </div>
            <div className="text-center p-2 bg-muted rounded-lg w-[180px] h-[180px] flex flex-col justify-center">
              <p className="text-[18px] font-medium text-muted-foreground ml-12 mt-12">정답</p>
              <p className="text-2xl font-bold text-orange-500">60</p>
            </div>
            <div className="text-center p-2 bg-muted rounded-lg w-[180px] h-[180px] flex flex-col justify-center">
              <p className="text-[18px] font-medium text-muted-foreground ml-12 mt-12">오답</p>
              <p className="text-2xl font-bold text-pink-500">60</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-auto">
        <Card className="bg-muted">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="font-bold mb-2">전면 광고</p>
              <p className="text-sm text-muted-foreground mb-4">광고 제거하기</p>
              <Button variant="outline" className="w-full" onClick={() => {}}>
                <X className="mr-2 h-4 w-4" />
                광고 제거
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <LevelSelectModal
        open={isLevelModalOpen}
        onOpenChange={setIsLevelModalOpen}
        onSelect={handleLevelSelect}
      />
    </aside>
  )
}
