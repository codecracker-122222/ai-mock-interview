import InterviewCard from '@/components/InterviewCard'

interface Interview {
  interviewId: string
  role: string
  type: string
  techstack: string[]
  createdAt?: string | number
  feedback?: {
    totalScore: number
    finalAssessment: string
  }
}

const InterviewGrid = ({ interviews }: { interviews: Interview[] }) => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {interviews.slice(0, 4).map((interview) => (
          <InterviewCard
            key={interview.interviewId}
            {...interview}
          />
        ))}
      </div>
    </div>
  )
}

export default InterviewGrid
