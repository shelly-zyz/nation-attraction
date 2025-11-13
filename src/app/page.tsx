import Link from 'next/link';
import { countries } from '@/data/countries';
import Navigation from '@/components/Navigation';

export default function Home() {
  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        button: 'bg-blue-600',
        lightBg: 'bg-blue-50',
        lightText: 'text-blue-800'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-700',
        button: 'bg-red-600',
        lightBg: 'bg-red-50',
        lightText: 'text-red-800'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        button: 'bg-green-600',
        lightBg: 'bg-green-50',
        lightText: 'text-green-800'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <div className="pt-16">
      {/* 页面标题 */}

      {/* 页面标题 */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-32">
        <div className="container mx-auto max-w-7xl px-20 text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-12 tracking-tight leading-tight">
            世界著名景点
          </h1>
          <p className="text-4xl md:text-5xl font-black opacity-95 max-w-6xl mx-auto leading-relaxed">
            探索世界各地的壮丽景色和文化瑰宝，开启一场穿越时空的视觉盛宴
          </p>
        </div>
      </header>

      {/* 国家网格 */}
      <div className="container mx-auto max-w-7xl px-20 py-32">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-black text-gray-800 mb-10">探索热门国家</h2>
          <p className="text-3xl font-black text-gray-700 max-w-5xl mx-auto">
            每个国家都有其独特的魅力和文化底蕴，点击了解更多精彩景点
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {countries.map((country) => {
            const colors = getColorClasses(country.color);

            return (
              <article key={country.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className={`h-20 ${colors.bg} relative mb-8 mt-12 max-w-lg mx-auto`}>
                  <img
                    src={country.image}
                    alt={`${country.name}风景`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <h3 className={`text-7xl font-black ${colors.text} mb-6 text-center`}>
                    {country.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-12 text-xl">
                    {country.description}
                  </p>
                  <div className="flex items-center justify-center mb-24">
                    <Link
                      href={`/country/${country.id}`}
                      className="inline-flex items-center px-10 py-5 bg-blue-500 text-black rounded-lg text-xl font-black hover:bg-blue-600 transition-colors"
                    >
                      点击查看更多景点
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-500 py-20 mt-24">
        <div className="container mx-auto max-w-7xl px-20 text-center">
          <p className="text-white opacity-60 mb-2">
            © 2025 国家景点介绍
          </p>
          <p className="text-white opacity-50 text-sm">
            探索世界各地的美丽景点，感受不同文化的魅力
          </p>
        </div>
      </footer>
      </div>
    </div>
  )
}