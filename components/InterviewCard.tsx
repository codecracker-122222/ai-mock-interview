import dayjs from 'dayjs'
import Link from 'next/link'
import { getRandomInterviewCover } from '@/lib/utils'
import { Button } from './ui/button'
import DisplayTechIcons from './DisplayTechIcons'

interface InterviewCardProps {
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

const InterviewCard = ({
  interviewId,
  role,
  type,
  techstack,
  createdAt,
  feedback,
}: InterviewCardProps) => {
  const normalizedType = /mix/i.test(type) ? 'Mixed' : type
  const formattedDate = dayjs(createdAt ?? Date.now()).format('MMM D, YYYY')

  return (
    <div className="card-border w-full min-h-96">
      <div className="card-interview p-4 flex flex-col gap-4">

        {/* TOP ROW */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src={getRandomInterviewCover()}
              alt="cover"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h3 className="text-sm font-semibold truncate">
              {role} Interview
            </h3>
          </div>

          <span className="px-3 py-1 text-xs rounded-lg bg-light-600 shrink-0">
            {normalizedType}
          </span>
        </div>

        {/* META */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <img src="/calendar.svg" alt="calendar" width={18} height={18} />
            <span>{formattedDate}</span>
          </div>

          <div className="flex items-center gap-2">
            <img src="/star.svg" alt="star" width={18} height={18} />
            <span>{feedback ? `${feedback.totalScore}/100` : '---/100'}</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="line-clamp-2 text-sm">
          {feedback?.finalAssessment ??
            "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>

        {/* BOTTOM ROW */}
        <div className="flex items-center justify-between">
          <DisplayTechIcons techStack={techstack} />

          <Link
            href={
              feedback
                ? `/interview/${interviewId}/feedback`
                : `/interview/${interviewId}`
            }
          >
            <Button className="btn-primary h-9 px-4 text-sm">
              {feedback ? 'Check Feedback' : 'View Interview'}
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default InterviewCard
