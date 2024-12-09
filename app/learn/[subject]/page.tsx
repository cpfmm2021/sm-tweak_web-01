import { SubjectDetailPage } from '@/components/subject-detail-page'

interface PageProps {
  params: {
    subject: string
  }
}

export default function Page({ params }: PageProps) {
  return <SubjectDetailPage subject={params.subject} />
}
