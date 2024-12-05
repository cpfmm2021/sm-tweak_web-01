'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Check, AlignLeft } from 'lucide-react'

interface Level {
  id: string;
  name: string;
}

const levels: Level[] = [
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
  { id: 'expert', name: 'Expert' },
]

interface LevelSelectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (level: string) => void;
}

export default function LevelSelectModal({ 
  open, 
  onOpenChange,
  onSelect 
}: LevelSelectModalProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('beginner')

  const handleNext = () => {
    onSelect(selectedLevel)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Choose your level
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`w-full flex items-center justify-between p-4 rounded-lg transition-colors
                ${selectedLevel === level.id 
                  ? 'bg-gray-100 border-2 border-gray-200' 
                  : 'bg-gray-50 hover:bg-gray-100'
                }`}
            >
              <div className="flex items-center gap-3">
                <AlignLeft className="h-5 w-5 text-gray-500" />
                <span className="text-lg">{level.name}</span>
              </div>
              <div className={`rounded-full p-1 ${selectedLevel === level.id ? 'bg-black text-white' : 'text-gray-400'}`}>
                <Check className="h-4 w-4" />
              </div>
            </button>
          ))}
        </div>
        <Button 
          className="w-full bg-black text-white hover:bg-black/90"
          onClick={handleNext}
        >
          DONE
        </Button>
      </DialogContent>
    </Dialog>
  )
}
