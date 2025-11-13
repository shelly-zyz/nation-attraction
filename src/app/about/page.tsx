import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: '关于我们 - 国家景点介绍',
  description: '了解国家景点介绍网站的使命和愿景，探索世界各地的美丽景点和文化瑰宝。',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
      {/* 页面头部 */}
      <header className="bg-gray-800 text-white py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            关于我们
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            探索世界，发现美好
          </p>
        </div>
      </header>

      {/* 主要内容 */}
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* 介绍部分 */}
        <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            我们的使命
          </h2>
          <div className="text-center">
            <p className="text-gray-700 leading-relaxed mb-6">
              国家景点介绍网站致力于为您提供世界各地著名景点的详细信息。
              通过了解不同国家和文化的壮丽景色，增进人们对世界多样性的理解。
            </p>
            <p className="text-gray-700 leading-relaxed">
              无论您是规划旅行，还是想要虚拟游览，
              我们的网站都能为您提供丰富的信息和体验。
            </p>
          </div>
        </section>

        {/* 特色功能 */}
        <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            网站特色
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">精选国家</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                精心挑选世界各国最具代表性的景点和文化遗产
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">精美图片</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                高质量图片展示每个景点的美丽景色和独特魅力
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">详细信息</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                提供每个景点的详细介绍、最佳游览时间和亮点推荐
              </p>
            </div>
          </div>
        </section>

        {/* 涵盖的国家 */}
        <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            我们涵盖的国家
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">美国</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                自由女神像、大峡谷、黄石公园
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-3">中国</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                万里长城、故宫、兵马俑
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">澳大利亚</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                悉尼歌剧院、大堡礁、乌鲁鲁
              </p>
            </div>
          </div>
        </section>

        {/* 技术栈 */}
        <section className="bg-white rounded-xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            技术栈
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">React</h4>
              <p className="text-gray-600 text-sm">现代化前端框架</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Next.js</h4>
              <p className="text-gray-600 text-sm">全栈React框架</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Tailwind CSS</h4>
              <p className="text-gray-600 text-sm">实用优先的CSS框架</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">TypeScript</h4>
              <p className="text-gray-600 text-sm">类型安全的JavaScript</p>
            </div>
          </div>
        </section>

        {/* 统计数据 */}
        <section className="bg-gray-100 rounded-xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            网站数据
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
              <div className="text-gray-600">精选国家</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">9</div>
              <div className="text-gray-600">著名景点</div>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 mb-2">∞</div>
              <div className="text-gray-600">探索可能</div>
            </div>
          </div>
        </section>

        {/* 返回首页按钮 */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-gray-800 text-white rounded-lg font-medium"
          >
            开始探索
          </Link>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm">
            © 2025 国家景点介绍
          </p>
        </div>
      </footer>
      </div>
    </div>
  );
}