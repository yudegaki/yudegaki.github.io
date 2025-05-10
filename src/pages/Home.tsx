import { Coffee, Earth, GraduationCap } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { SocialLink, SocialLinkProps } from '@/components/social-link';
import { ToolCard, ToolCardProps } from '@/components/tool-card';

const Home = () => {
  // ツールデータ
  const tools: ToolCardProps[] = [
    {
      icon: <Coffee className="h-6 w-6 text-gray-700" />,
      title: 'コーヒー検定クイズ',
      description:
        'コーヒーインストラクター2級レベルの知識が試されるクイズです。',
      link: '/coffeequiz',
      linkText: '問題に挑戦する',
      isComingSoon: false,
    },
    {
      icon: <Earth className="h-6 w-6 text-gray-700" />,
      title: 'GeoCoffee Quiz',
      description:
        'コーヒーに関する問題の答えを世界地図から国を選んで答えるクイズです。',
      link: '/geo-coffee-quiz',
      linkText: '問題に挑戦する',
      isComingSoon: false,
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-gray-700" />,
      title: 'GeoCoffee Education',
      description:
        '地図をクリックして気になる国のコーヒー情報を調べることができます。',
      link: '',
      linkText: '準備中',
      isComingSoon: true,
    },
  ];

  // SNSデータ
  const socialLinks: SocialLinkProps[] = [
    {
      name: 'Twitter',
      icon: <img src="/twitter.svg" alt="Twitter" className="h-6 w-6" />,
      link: 'https://x.com/yd00245',
    },
    {
      name: 'GitHub',
      icon: <img src="/github.svg" alt="GitHub" className="h-6 w-6" />,
      link: 'https://github.com/yudegaki',
    },
    {
      name: 'YouTube',
      icon: <img src="/youtube.svg" alt="GitHub" className="h-6 w-6" />,
      link: 'https://www.youtube.com/@%E3%82%86%E3%81%A7%E3%81%8C%E3%81%8D%E3%81%AE%E3%81%B8%E3%82%84',
    },
    {
      name: 'Hatena Blog',
      icon: <img src="/hatena.svg" alt="Hatena Blog" className="h-6 w-6" />,
      link: 'https://yudegaki.hatenablog.com/',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* 自己紹介セクション */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div
                className="mx-auto relative aspect-square overflow-hidden rounded-full border-8 border-white shadow-xl order-2 lg:order-1"
                style={{ maxWidth: '400px', width: '45%' }}
              >
                <img
                  src="/yudegaki.png?height=400&width=400"
                  alt="プロフィール画像"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-800">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  自己紹介
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  はじめまして、 yudegaki というハンドルネームで活動しています。
                  <br />
                </p>
                <p className="text-gray-500">
                  コーヒーとゲームが大好きなエンジニアです。
                  <br />
                  このサイトでは、私が作成したツールを公開していきます。
                </p>
                <p className="text-gray-500">
                  趣味：コーヒー/ゲーム/ボルダリング/バイオリン/音楽鑑賞(Vaundy)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <SocialLink {...link} />
              ))}
            </div>
          </div>
        </section>

        {/* ツールセクション */}
        <section id="tools" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeader
              badge="Tools"
              title="様々な便利機能"
              description="私が欲しくなったら作ります"
            />

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool, index) => (
                <ToolCard key={index} {...tool} />
              ))}

              {/* 追加のツールプレースホルダー */}
              <div className="flex flex-col justify-between h-full rounded-lg border border-dashed border-gray-300 p-6 bg-gray-50">
                <div className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                    <span className="text-xl font-bold text-gray-400">+</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-400">
                      今後追加予定
                    </h3>
                    <p className="text-gray-400">
                      今後も様々な便利ツールを追加していく予定です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t bg-gray-50">
        <div className="container py-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <SocialLink {...link} />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} yudegaki. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
