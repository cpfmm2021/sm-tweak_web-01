import { DaySelectPage } from '@/components/day-select-page'

interface PageProps {
  params: {
    subject: string
    chapter: string
  }
}

export default function Page({ params }: PageProps) {
  return <DaySelectPage subject={params.subject} chapter={params.chapter} />
}
