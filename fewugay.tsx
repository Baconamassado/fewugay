import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2 sm:mb-4">
            Por que o fewu é gay
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-center text-gray-600">
            Por que ele é gay, simples assim.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}