import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries, getAttractionById } from '@/data/countries';
import Navigation from '@/components/Navigation';

interface AttractionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const attractionIds = countries.flatMap(country =>
    country.attractions.map(attraction => ({
      id: attraction.id,
    }))
  );

  return attractionIds;
}

export async function generateMetadata({ params }: AttractionPageProps) {
  const { id } = await params;
  const attractionData = getAttractionById(id);

  if (!attractionData) {
    return {
      title: '景点未找到',
    };
  }

  const { attraction, country } = attractionData;
  return {
    title: `${attraction.name} - ${country.name}`,
    description: attraction.description,
  };
}

export default async function AttractionPage({ params }: AttractionPageProps) {
  const { id } = await params;
  const attractionData = getAttractionById(id);

  if (!attractionData) {
    notFound();
  }

  const { attraction, country } = attractionData;

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        button: 'bg-blue-600',
        lightBg: 'bg-blue-50',
        lightText: 'text-blue-800',
        gradient: 'from-blue-600 to-indigo-700'
      },
      red: {
        bg: 'bg-red-100',
        text: 'text-red-700',
        button: 'bg-red-600',
        lightBg: 'bg-red-50',
        lightText: 'text-red-800',
        gradient: 'from-red-600 to-rose-700'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        button: 'bg-green-600',
        lightBg: 'bg-green-50',
        lightText: 'text-green-800',
        gradient: 'from-green-600 to-emerald-700'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const colors = getColorClasses(country.color);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Navigation />
      <div className="pt-16">
      {/* 景点头部 */}

      {/* 景点头部 */}
      <div className={`bg-gradient-to-r ${colors.gradient} text-white py-20`}>
        <div className="container mx-auto max-w-7xl px-20">
          <div className="text-center">
            <Link
              href={`/country/${country.id}`}
              className="inline-flex items-center text-white/80 mb-6 text-sm font-medium"
            >
              ← 返回{country.name}
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {attraction.name}
            </h1>
            <p className="text-xl opacity-90 mb-8">
              {country.flag} {country.name} · 必游景点
            </p>
            <div className="max-w-lg mx-auto mb-20">
              <div className={`h-20 ${colors.bg} rounded-lg overflow-hidden shadow-xl`}>
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 景点详情 */}
      <div className="container mx-auto max-w-7xl px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 主要内容 */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-2xl shadow-xl p-10 mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="mr-3">📖</span>
                景点介绍
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {attraction.description}
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="mr-3">⭐</span>
                主要亮点
              </h2>
              <div className="space-y-4">
                {attraction.highlights.map((highlight: string, index: number) => (
                  <div key={index} className={`flex items-center p-6 ${colors.lightBg} rounded-xl`}>
                    <div className={`w-12 h-12 ${colors.button} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {index + 1}
                    </div>
                    <span className={`text-lg font-medium ${colors.lightText}`}>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 侧边栏 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3">ℹ️</span>
                游览信息
              </h3>

              <div className="space-y-6">
                <div className={`p-6 ${colors.lightBg} rounded-xl`}>
                  <h4 className={`font-semibold ${colors.lightText} mb-3 flex items-center text-lg`}>
                    <span className="mr-2">📅</span>
                    最佳旅游时间
                  </h4>
                  <p className="text-gray-700 font-medium">{attraction.bestTimeToVisit}</p>
                </div>

                <div className={`p-6 ${colors.lightBg} rounded-xl`}>
                  <h4 className={`font-semibold ${colors.lightText} mb-3 flex items-center text-lg`}>
                    <span className="mr-2">🌍</span>
                    所属国家
                  </h4>
                  <p className="text-gray-700 font-medium text-lg">{country.flag} {country.name}</p>
                </div>

                <div className={`p-6 ${colors.lightBg} rounded-xl`}>
                  <h4 className={`font-semibold ${colors.lightText} mb-3 flex items-center text-lg`}>
                    <span className="mr-2">✨</span>
                    亮点特色
                  </h4>
                  <p className="text-gray-700 font-medium">{attraction.highlights.length} 个精选亮点</p>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <Link
                  href={`/country/${country.id}`}
                  className={`block w-full text-center px-6 py-4 ${colors.button} text-white rounded-xl font-medium text-lg`}
                >
                  探索更多{country.name}景点
                </Link>
                <Link
                  href="/"
                  className="block w-full text-center px-6 py-4 text-gray-700 rounded-xl font-medium text-lg hover:bg-gray-50"
                >
                  返回首页
                </Link>
              </div>
            </div>
          </div>
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
  );
}