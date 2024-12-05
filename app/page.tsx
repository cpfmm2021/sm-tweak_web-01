import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweak_logo_B-OIGcuLsAAeqS339010jzofyqQrqxm8.png" 
              alt="Tweak" 
              width={160}
              height={43}
              style={{ width: 'auto', height: '43px' }}
              priority
            />
          </Link>
          <div className="flex items-center space-x-4">
            <Select defaultValue="ko">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="언어 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ko">한국어</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="it">Italiano</SelectItem>
                <SelectItem value="ja">日本語</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
                <SelectItem value="ru">Pусский</SelectItem>
                <SelectItem value="id">Bahasa Indonesia</SelectItem>
                <SelectItem value="tr">Türkçe</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="pl">Polski</SelectItem>
                <SelectItem value="ms">Bahasa Melayu</SelectItem>
                <SelectItem value="uk">Українська</SelectItem>
                <SelectItem value="ro">Română</SelectItem>
                <SelectItem value="vi">Tiếng Việt</SelectItem>
              </SelectContent>
            </Select>
            <Button asChild>
              <Link href="/sso">로그인/회원가입</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="max-w-lg">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-6">
                언제 어디서든<br />간단한 영작 학습
              </h1>
              <Button size="lg" asChild className="px-8 py-3 text-lg font-semibold rounded-md">
                <Link href="/sso">지금 시작하기</Link>
              </Button>
            </div>
            <div className="hidden lg:block">
              <Image src="/placeholder.svg?height=400&width=500" alt="Tweak App Preview" width={500} height={400} />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-2xl font-semibold mb-2">콘텐츠</h1>
                <h2 className="text-3xl font-bold mb-2">다양한 학습 카테고리와 난이도 제공</h2>
                <h3 className="text-lg text-gray-600 font-pretendard">
                  기본 영문법부터 TOEFL, IELTS, 일상 회화, 비즈니스 회화까지! 원하는 난이도를 선택하고 폭넓은 학습을 경험하세요.
                </h3>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg?height=300&width=500" alt="Learning Categories" width={500} height={300} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-2xl font-semibold mb-2">학습 도전</h1>
                <h2 className="text-3xl font-bold mb-2">다양한 도전과 함께 키워가는 영어 실력</h2>
                <h3 className="text-lg text-gray-600">
                  단순 반복되는 문제 풀이를 넘어, 학습 도전 기능으로 스스로에게 동기를 부여하고 영어 실력을 키워보세요!
                </h3>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg?height=300&width=500" alt="Learning Challenges" width={500} height={300} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-2xl font-semibold mb-2">영작 퀴즈</h1>
                <h2 className="text-3xl font-bold mb-2">쉽고 간단하게 학습하는 영어 작문</h2>
                <h3 className="text-lg text-gray-600">
                  단어 카드를 배열하여 문장을 구성하거나, 직접 입력하여 작문해보세요. 게임처럼 즐겁게 작문해보세요!
                </h3>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg?height=300&width=500" alt="Writing Quiz" width={500} height={300} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-2xl font-semibold mb-2">라이브러리</h1>
                <h2 className="text-3xl font-bold mb-2">라이브러리 기능으로 꾸준한 실력 향상</h2>
                <h3 className="text-lg text-gray-600">
                  문제를 북마크하고 라이브러리에서 복습할 수 있어요. 꾸준한 복습으로 영어 실력을 쌓아가세요.
                </h3>
              </div>
              <div className="md:w-1/2">
                <Image src="/placeholder.svg?height=300&width=500" alt="Library Feature" width={500} height={300} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#15C452]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tweak_logo_B-OIGcuLsAAeqS339010jzofyqQrqxm8.png"
                  alt="Tweak Logo" 
                  width={200} 
                  height={80} 
                  className="mx-auto md:mx-0 mb-4" 
                />
                <p className="text-2xl font-semibold">All About English Composition</p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QR_%E1%84%92%E1%85%A9%E1%86%B7%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B5-qd6uOI3dhjajjVqsMSAjzXA3zl5lOd.svg"
                  alt="Download QR Code" 
                  width={150} 
                  height={150} 
                  className="mb-4"
                />
                <div className="flex space-x-4">
                  <Link href="#" className="block">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/App_Store_Badge-lOZV1eJrYDjMxFDlp8czfkj8ZpzHro.png"
                      alt="Download on the App Store" 
                      width={140} 
                      height={42} 
                      className="w-auto h-[42px]"
                    />
                  </Link>
                  <Link href="#" className="block">
                    <Image 
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-play-badge-RQbVA5buRIorKnsXULLNMpj9md4Gcr.png"
                      alt="Get it on Google Play" 
                      width={140} 
                      height={42} 
                      className="w-auto h-[42px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-sm">
              © 2023 Tweak. All rights reserved.
            </div>
            <nav className="flex space-x-4 text-sm">
              <Link href="/terms" className="hover:underline">서비스 약관</Link>
              <Link href="/privacy" className="hover:underline">개인정보 처리방침</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

