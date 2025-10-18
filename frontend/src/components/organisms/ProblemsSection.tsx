import { Heading } from '@/components/atoms/Heading'
import { ProblemCard } from '@/components/molecules/ProblemCard'
import { homeContent } from '@/content/home'

export function ProblemsSection() {
  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heading
            level={2}
            size="3xl"
            color="dark"
            align="center"
            className="mb-4"
          >
            {homeContent.problems.title}
          </Heading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeContent.problems.problems.map((problem, index) => (
            <ProblemCard
              key={index}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
