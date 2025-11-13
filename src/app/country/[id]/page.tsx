import { notFound } from 'next/navigation';
import Link from 'next/link';
import { countries, getCountryById } from '@/data/countries';
import Navigation from '@/components/Navigation';
import { Country } from '@/types';

interface CountryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    id: country.id,
  }));
}

export async function generateMetadata({ params }: CountryPageProps) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    return {
      title: '国家未找到',
    };
  }

  return {
    title: `${country.name} - 著名景点介绍`,
    description: `探索${country.name}的著名景点，包括${country.attractions.map(a => a.name).join('、')}等`,
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { id } = await params;
  const country = getCountryById(id);

  if (!country) {
    notFound();
  }

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
      {/* 国家头部 */}

      {/* 国家头部 */}
      <header className={`bg-gradient-to-r ${colors.gradient} text-white py-20 relative`}>
        <div className="container mx-auto max-w-5xl px-20 relative">
          <div className="absolute top-4 left-0 z-50">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 text-sm font-medium hover:text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              ← 返回首页
            </Link>
          </div>
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {country.name}
            </h1>
          </div>
          <div className="max-w-4xl mx-auto text-left">
            <p className="text-xl opacity-95 leading-relaxed font-light tracking-wide italic" style={{ textIndent: '2em' }}>
              {country.description}
            </p>
          </div>
        </div>
      </header>

      {/* 景点列表 */}
      <div className="container mx-auto max-w-5xl px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            著名景点
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            探索{country.name}最值得一游的精彩景点，每一处都有其独特的魅力
          </p>
        </div>

        <div className="space-y-48">
          {country.attractions.map((attraction, index) => {
            // 为每个景点分配不同的背景颜色
            const bgColors = [
              'bg-blue-50', // 第一个景点 - 蓝色背景
              'bg-green-50', // 第二个景点 - 绿色背景
              'bg-purple-50'  // 第三个景点 - 紫色背景
            ];
            const currentBgColor = bgColors[index % bgColors.length];

            return (
              <article key={attraction.id} className={`${currentBgColor} rounded-3xl shadow-2xl overflow-hidden`}>
                {/* 景点图片区域 */}
                <div className="pt-24 pb-20">
                  <div className={`h-12 ${colors.bg} relative max-w-md mx-auto rounded-lg overflow-hidden mb-20`}>
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className={`text-sm font-bold ${colors.text}`}>
                        {attraction.highlights.length} 个精选亮点
                      </span>
                    </div>
                  </div>
                </div>

                {/* 景点详情区域 */}
                <div className="px-20 pb-24">
                  <div className="text-center mb-24">
                    <h3 className={`text-6xl font-black ${colors.text} mb-10`}>
                      {attraction.name}
                    </h3>
                  </div>

                  {/* 详细介绍 */}
                  <div className="mb-24">
                    <div className="text-center mb-16">
                      <h4 className="text-4xl font-black text-gray-800">
                        景点详细介绍
                      </h4>
                    </div>
                    <div className="max-w-6xl mx-auto text-left">
                      <p className="text-gray-700 leading-relaxed text-2xl" style={{ textIndent: '2em' }}>
                        {attraction.name}位于美国{attraction.id === 'statue-of-liberty' ? '纽约港自由岛，由法国于1886年赠送给美国，象征着自由与民主的理念。这座铜制雕像高93米，由古斯塔夫·埃菲尔设计内部结构，弗雷德里克·奥古斯特·巴托尔迪创作外观，是法美友谊的永恒见证。雕像手持火炬和独立宣言，脚踏断裂的枷锁，寓意着照亮世界的自由光芒和对压迫的反抗。自由岛和埃利斯岛共同组成了重要的移民历史纪念地，见证了数百万移民进入美国的梦想历程。作为美国最重要的文化地标之一，自由女神像不仅吸引着全球游客，更是美国精神的象征。雕像内部设有观景台和博物馆，游客可以登上皇冠部分俯瞰纽约港全景。1984年，自由女神像被联合国教科文组织列为世界文化遗产，其价值超越了单纯的地标意义，代表着人类对自由、民主和包容的永恒追求。夜间照明系统使雕像在夜幕下熠熠生辉，成为纽约天际线不可或缺的组成部分。' :
                        attraction.id === 'grand-canyon' ? '亚利桑那州西北部科罗拉多高原，科罗拉多河经过数百万年侵蚀形成的地质奇观，全长446公里，深度达1,857米，宽度从6公里到29公里不等。峡谷岩层记录了地球近20亿年的地质历史，从元古代的变质岩到古生代、中生代和新生代的沉积岩，每一层都诉说着地球演化的故事。大峡谷的形成始于约600万年前，科罗拉多河不断下切，同时地壳抬升，共同塑造了这一举世闻名的自然奇观。大峡谷不仅是地质学的天然实验室，也是生物学和生态学的重要研究基地。公园内栖息着约1,500种植物、355种鸟类、89种哺乳动物、47种爬行动物和9种两栖动物。从峡谷边缘到科罗拉多河岸，海拔变化创造了多样的生态系统，包括松树林、沙漠灌木丛和河岸植被。公园分为南缘和北缘，南缘全年开放，设施完善，游客可沿着边缘步道欣赏壮丽景色；北缘海拔更高，植被更茂密，夏季开放，提供更为原始的 wilderness 体验。' :
                        '西部怀俄明州、蒙大拿州和爱达荷州交界处，面积约8,983平方公里，成立于1872年，是世界上第一个国家公园。公园坐落在落基山脉中段的高原地带，平均海拔约2,400米，其核心是一个直径约70公里的巨大火山口——黄石火山口，是世界上最大的活火山系统之一。这里的岩浆活动形成了丰富的地热现象，包括超过10,000个地热特征，如间歇泉、热泉、泥浆池和蒸汽孔，其中大间歇泉（Old Faithful）每90分钟喷发一次，成为黄石的标志性景观。黄石公园拥有独特的生态系统和丰富的生物多样性，分布着超过1,700种植物和数百种动物。这里是北美少数仍保有完整大型食肉动物和食草动物链条的地区，灰熊、美洲黑熊、狼、美洲狮与野牛、麋鹿、叉角羚等共同构成复杂的生态网络。1995年狼群重新引入黄石，极大改变了食物链和生态平衡，成为生态学经典案例。自古这里就是多支美洲原住民部族的居住地，他们将地热泉和湖泊视为神圣之地，至今保留着深厚的文化传统。'}
                      </p>
                    </div>
                  </div>

                  {/* 主要亮点 */}
                  <div className="mb-24">
                    <div className="text-center mb-16">
                      <h4 className="text-4xl font-black text-gray-800">
                        必游亮点推荐
                      </h4>
                    </div>
                    <div className="max-w-5xl mx-auto">
                      <div className="space-y-8">
                        {attraction.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-start text-2xl p-6 bg-white rounded-xl">
                            <span className="text-4xl mr-8 mt-1">✨</span>
                            <div>
                              <span className="font-black text-gray-800 mr-4 text-3xl">{highlightIndex + 1}.</span>
                              <span className="text-gray-700">{highlight}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 最佳旅游时间 */}
                  <div className="mb-32 mt-20">
                    <div className="text-center mb-20">
                      <h4 className="text-4xl font-black text-gray-800">
                        最佳旅游时间
                      </h4>
                    </div>
                    <div className="max-w-5xl mx-auto">
                      <div className="flex items-center justify-center text-2xl p-12 bg-white rounded-xl">
                        <span className="text-5xl mr-8">📅</span>
                        <div>
                          <span className="font-black text-gray-800 mr-4 text-3xl">推荐游览时间：</span>
                          <span className="text-gray-700">{attraction.bestTimeToVisit}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* 返回首页按钮 */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg font-medium"
          >
            ← 返回首页浏览更多国家
          </Link>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-500 py-20 mt-24">
        <div className="container mx-auto max-w-5xl px-20 text-center">
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