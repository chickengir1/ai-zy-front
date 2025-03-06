import { animationChars, features, teamMembers } from "@/utils/common/constans";
import { FaGithub, FaGitlab } from "react-icons/fa";

export default function RootPage() {
  const handleRedirect = () => (window.location.href = "/project");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-[var(--apple-font)]">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-8">
          <h1 className="text-3xl font-semibold text-gray-900">AI-ZY</h1>
        </div>
      </nav>
      <section className="relative overflow-hidden px-6 pt-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-8 text-center">
            <h2 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
              AI로 완성하는
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                스마트 업무 솔루션
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 md:text-2xl">
              회의 관리부터 업무 자동화까지
              <br />
              AI가 당신의 업무 생산성을 혁신적으로 향상시킵니다
            </p>
            <button
              onClick={handleRedirect}
              className="mx-auto rounded-full bg-blue-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-xl active:scale-95"
            >
              지금 시작하기
            </button>
          </div>
          <div className="mt-20 flex justify-center">
            <div className="relative h-96 w-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-100 to-purple-100" />
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20" />
                <div className="absolute flex space-x-2">
                  {animationChars.map((char, i) => (
                    <span
                      key={i}
                      className="text-6xl font-bold text-gray-900 transition-transform duration-500 hover:scale-110"
                      style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="animate-spin-slow absolute h-72 w-72">
                  <div className="h-full w-full rounded-full border-[6px] border-dashed border-blue-500/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <h3 className="mb-16 text-center text-4xl font-bold text-gray-900">
          주요 기능
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-md transition-all hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{feature.icon}</div>
              <h4 className="mb-3 text-2xl font-semibold text-gray-900">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-32 md:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="animate-float absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-200 blur-3xl" />
          <div className="animate-float-delay absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-purple-200 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center">
          <h3 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
            지금 바로 경험해보세요
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-700">
            AI-ZY 팀이 선사하는 차세대 업무 관리 플랫폼으로
            <br className="hidden md:block" />
            업무 생산성을{" "}
            <span className="font-semibold text-amber-400">200%</span>{" "}
            향상시켜보세요
          </p>
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleRedirect}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-10 py-5 text-lg font-medium text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl hover:brightness-110 active:scale-95"
            >
              <span>시작하기</span>
            </button>
          </div>
        </div>
      </section>
      <footer className="border-t border-gray-200 bg-white px-6 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600" />
                <h4 className="text-2xl font-semibold text-gray-900">AI-ZY</h4>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-gray-500">
                인공지능 기술을 활용한 업무 자동화 솔루션으로
                <br />
                회의 관리, 투두리스트, AI 어시스턴트를 제공합니다.
              </p>
              <p className="mt-8 text-sm text-gray-500">
                © 2025 AI-ZY Team. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end">
              <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                팀 구성원
              </h5>
              <div className="mt-4 flex flex-wrap gap-2 md:justify-end">
                {teamMembers.map((name, i) => (
                  <div
                    key={i}
                    className="rounded-full bg-gray-50 px-4 py-2 text-sm text-gray-700 transition-all hover:bg-gray-100 hover:shadow-sm"
                  >
                    {name}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm text-gray-500 md:text-right">
                엘리스트랙 포트폴리오 1기 2차 프로젝트 2팀
              </p>
              <div className="mt-4 flex items-center space-x-4 md:justify-end">
                <a
                  href="https://github.com/orgs/Elice-team-2/repositories"
                  className="text-gray-400 transition-colors hover:text-gray-900"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://kdt-gitlab.elice.io/pttrack/class_01/web_project_ii/team02"
                  className="text-gray-400 transition-colors hover:text-gray-900"
                >
                  <FaGitlab className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
