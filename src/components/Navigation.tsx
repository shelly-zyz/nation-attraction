'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allAttractions = [
    { name: '自由女神像', country: '美国', href: '/attraction/statue-of-liberty' },
    { name: '大峡谷', country: '美国', href: '/attraction/grand-canyon' },
    { name: '黄石国家公园', country: '美国', href: '/attraction/yellowstone' },
    { name: '万里长城', country: '中国', href: '/attraction/great-wall' },
    { name: '故宫', country: '中国', href: '/attraction/forbidden-city' },
    { name: '兵马俑', country: '中国', href: '/attraction/terracotta-warriors' },
    { name: '悉尼歌剧院', country: '澳大利亚', href: '/attraction/sydney-opera-house' },
    { name: '大堡礁', country: '澳大利亚', href: '/attraction/great-barrier-reef' },
    { name: '乌鲁鲁', country: '澳大利亚', href: '/attraction/uluru' }
  ];

  const filteredAttractions = allAttractions.filter(attraction =>
    attraction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    attraction.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center h-16 px-20">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-black text-black tracking-tight">
            WorldSights
          </h1>
        </div>

        <div className="flex items-center space-x-6">
          {/* 搜索框 */}
          <div className="relative">
            <input
              type="text"
              placeholder="搜索景点..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            {/* 搜索建议 */}
            {showSuggestions && searchQuery && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredAttractions.length > 0 ? (
                  filteredAttractions.map((attraction, index) => (
                    <Link
                      key={index}
                      href={attraction.href}
                      className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setSearchQuery('');
                        setShowSuggestions(false);
                      }}
                    >
                      <div className="font-medium text-gray-900">{attraction.name}</div>
                      <div className="text-sm text-gray-500">{attraction.country}</div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 text-sm">
                    未找到相关景点
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 导航按钮 */}
          <button className="px-6 py-2 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
            <Link href="/" className="text-white hover:text-white">
              首页
            </Link>
          </button>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors">
            <Link href="/about" className="text-white hover:text-white">
              关于
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}