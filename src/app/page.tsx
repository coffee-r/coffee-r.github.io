"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// データ配列
const socialLinks = [
  {
    href: "https://github.com/coffee-r",
    icon: "/github.svg",
    alt: "GitHub",
    label: "GitHub"
  },
  {
    href: "https://x.com/plus_marumaru",
    icon: "/x.svg",
    alt: "X",
    label: "X (旧Twitter)"
  },
  {
    href: "https://zenn.dev/coffee_r",
    icon: "/zenn.svg",
    alt: "Zenn",
    label: "Zenn"
  }
]

const techSkills = [
  "バックエンド開発",
  "Webサービス開発",
  "ゲーム開発",
  "個人開発",
  "チーム開発",
  "PHP",
  "Go",
  "TypeScript",
  "Unity",
  "Godot",
  "GameMaker",
  "IPA 試験",
]

const hobbies = [
  "トレッキング",
  "キャンプ",
  "釣り",
  "読書",
  "暴飲暴食",
  "ブルーアーカイブ",
  "睡眠",
  "メンタルケア"
]

const projects = [
  {
    title: "Webゲーム置き場 TsumikiKichi",
    description: "気軽にWebゲームを置いておける場所",
    link: "https://tsumiki-kichi.com",
    linkText: "サイトへ"
  },
  {
    title: "フリーゲーム投稿サイト GodotPlayer",
    description: "GodotEngineに対応したブラウザゲーム投稿サイト",
    link: "https://godotplayer.com",
    linkText: "サイトへ"
  },
  {
    title: "ビンゴ大会終了時間シュミレーター",
    description: "宴会とかで使えるツール",
    link: "https://bingo-time-simulator.vercel.app",
    linkText: "サイトへ"
  },
  {
    title: "PCゲーム Re Painter",
    description: "自分の書いたイラストが必殺技になるアクションミニゲーム",
    link: "https://store.steampowered.com/app/1096420/Re_Painter",
    linkText: "Steamへ"
  },
  {
    title: "ブラウザで遊べるUnity製ミニゲーム集",
    description: "3分くらい暇つぶしできるものを作ってあります",
    link: "https://unityroom.com/users/3cr10wv7fsuxmag8h594",
    linkText: "unityroomへ"
  }
]

const books = [
  "ドメイン駆動設計をはじめよう ―ソフトウェアの実装と事業戦略を結びつける実践技法",
  "アーキテクトの教科書 価値を生むソフトウェアのアーキテクチャ構築",
  "システム設計の面接試験",
  "初めてのGo言語 ―他言語プログラマーのためのイディオマティックGo実践ガイド",
  "はじめよう！プロセス設計 ～要件定義のその前に",
  "はじめよう！システム設計 ～要件定義のその後に",
  "支援士R6 春期・秋期　－情報処理安全確保支援士の最も詳しい過去問解説",
  "支援士R5 春期・秋期　－情報処理安全確保支援士の最も詳しい過去問解説",
  "支援士R4 春期・秋期　－情報処理安全確保支援士の最も詳しい過去問解説",
  "セキュリティ技術の教科書　第3版 教科書シリーズ",
  "Flutter実践開発 ── iPhone／Android両対応アプリ開発のテクニック WEB+DB PRESS plus",
  "システムを作らせる技術　エンジニアではないあなたへ (日本経済新聞出版)",
  "はじめよう！ 要件定義 ～ビギナーからベテランまで",
  "ザ・アドテクノロジー～データマーケティングの基礎からアトリビューションの概念まで",
  "2025-2026　システムアーキテクト「専門知識＋午後問題」の重点対策 重点対策書シリーズ",
  "SOFT SKILLS ソフトウェア開発者の人生マニュアル 第2版",
  "システムアーキテクト　合格論文の書き方・事例集　第6版 合格論文シリーズ",
  "マンガ＋図解で基礎がよくわかる　情報セキュリティの教科書",
  "Docker&仮想サーバー完全入門　Webクリエイター＆エンジニアの作業がはかどる開発環境構築ガイド",
  "失敗から学ぶRDBの正しい歩き方 Software Design plus",
  "スッキリわかるJava入門 第4版 スッキリわかるシリーズ",
  "ネットワークはなぜつながるのか　第２版",
  "ネスペの基礎力　－プラス20点の午後対策",
  "ネスペR4 －本物のネットワークスペシャリストになるための最も詳しい過去問解説 情報処理技術者試験",
  "ネスペR3 －本物のネットワークスペシャリストになるための最も詳しい過去問解説 情報処理技術者試験",
  "ネスペR1 －本物のネットワークスペシャリストになるための最も詳しい過去問解説 情報処理技術者試験",
  "ネスペ30　知－ネットワークスペシャリストの最も詳しい過去問解説",
  "エンジニアが学ぶ在庫管理システムの「知識」と「技術」",
  "ITエンジニアのための【業務知識】がわかる本 第5版",
  "情報処理教科書 データベーススペシャリスト 2023年版",
  "スッキリわかるSQL入門 第3版 ドリル256問付き！ スッキリわかるシリーズ",
  "徹底攻略 データベーススペシャリスト教科書 令和5年度 徹底攻略シリーズ",
  "マスタリングTCP/IP　入門編（第6版）",
  "Linuxで動かしながら学ぶTCP/IPネットワーク入門",
  "図解入門TCP/IP　仕組み・動作が見てわかる",
  "一番伝わる説明の順番",
  "はじめてさわるReact & JavaScript with TypeScript: たった3時間でわかる\"超\"ビギナー入門書",
  "徹底攻略 AWS認定 ソリューションアーキテクト − アソシエイト教科書 第3版［SAA-C03］対応 徹底攻略シリーズ",
  "AWSの基本・仕組み・重要用語が全部わかる教科書 (見るだけ図解)",
  "2023　応用情報技術者　午後問題の重点対策",
  "キタミ式イラストIT塾 応用情報技術者 令和04年",
  "令和04年【春期】【秋期】 応用情報技術者 合格教本",
  "AWS認定資格 ソリューションアーキテクトアソシエイトの教科書: 合格へ導く虎の巻",
  "徹底攻略 基本情報技術者の午後対策 Python編 第2版 徹底攻略シリーズ",
  "TypeScriptとReact/Next.jsでつくる実践Webアプリケーション開発",
  "AWSコンテナ設計・構築［本格］入門",
  "1冊ですべて身につくHTML ＆ CSSとWebデザイン入門講座",
  "良いコード／悪いコードで学ぶ設計入門―保守しやすい　成長し続けるコードの書き方",
  "エンジニアリング組織論への招待　～不確実性に向き合う思考と組織のリファクタリング",
  "キタミ式イラストIT塾 基本情報技術者 令和03年",
  "仕組みと使い方がわかる Docker＆Kubernetesのきほんのきほん (Compass Booksシリーズ)",
  "Web APIの設計",
  "Web API: The Good Parts",
  "体系的に学ぶ 安全なWebアプリケーションの作り方 第2版［リフロー版］　脆弱性が生まれる原理と対策の実践",
  "３分間コーチ ひとりでも部下のいる人のための世界一シンプルなマネジメント術",
  "マンガでわかるプロジェクトマネジメント",
  "Amazon Web Services 業務システム設計・移行ガイド　一番大切な知識と技術が身につく",
  "ドメイン駆動設計入門 ボトムアップでわかる！ドメイン駆動設計の基本",
  "現場で役立つシステム設計の原則 ~変更を楽で安全にするオブジェクト指向の実践技",
  "リーダブルコード ―より良いコードを書くためのシンプルで実践的なテクニック",
  "ゲームプログラマのためのコーディング技術"
]

const mountains = [
  "五竜岳", "唐松岳", "雲取山", "塔ノ岳", "蛭ヶ岳", "達磨山", "剱岳", "北岳", 
  "間ノ岳", "硫黄岳", "赤岳", "瑞牆山", "金峰山", "谷川岳", "槍ヶ岳", "燕岳", 
  "天狗岳", "石割山", "三浦富士", "陣馬山", "高尾山", "大菩薩嶺", "那須岳", "奥穂高岳"
]

const games = [
  "ブルーアーカイブ (制約解除決戦109くらい)", "学園アイドルマスター", "聖剣伝説2 (SFC)", 
  "聖剣伝説3 (SFC)", "ロマンシングサガ3 (SFC)", "ロマンシングサガ2 (SFC、未クリア)", 
  "ロマンシングサガ ミンストレルソング", "ヴィジランテ8", "サガフロ1 (未クリア)", 
  "サガフロ2 (未クリア)", "PUBG", "Tree of Savior", "ドラクエ3", "ドラクエ8", 
  "FFタクティクス", "タクティクスオウガ", "ジャストブリード", "キングダムハーツ1", 
  "キングダムハーツ2", "Downwell", "Undertale", "逆転裁判1", "逆転裁判2", 
  "逆転裁判3", "スプラトゥーン2", "Celeste", "ぷよぷよフィーバー2 (鍵積みしかできない)", 
  "ポケモン 金", "ポケモン 剣盾", "バイオハザード2~5"
]

const manga = [
  "ぼざろ 1巻", "スローループ 1巻", "ステラのまほう 全巻", "ゆるキャン 10巻くらいまで", 
  "スロウスタート 8巻", "NEW GAME! 全巻", "進撃の巨人 実家にあった数巻", 
  "特攻の拓 実家にあった数巻", "ホーリーランド 全巻", "鬼滅の刃 アニメ1期 + ラスト10巻くらい", 
  "3月のライオン 15巻くらいまで", "ワールドトリガー レプリカさんいなくなるところあたりまで", 
  "ヒナまつり 全巻", "棺担ぎのクロ 全巻", "灰と幻想のグリムガム 小説いくつか", 
  "少女終末旅行 全巻", "しめじシュミレーション 2巻くらい"
]

const interestsData = [
  {
    title: "技術",
    items: techSkills,
    colStart: "col-start-2",
    colSpan: "col-span-2"
  },
  {
    title: "趣味",
    items: hobbies,
    colStart: "col-start-4",
    colSpan: "col-span-2"
  }
]

export default function ProfilePage() {
  const [showAllBooks, setShowAllBooks] = useState(false);
  const [showAllMountains, setShowAllMountains] = useState(false);
  const [showAllGames, setShowAllGames] = useState(false);
  const [showAllManga, setShowAllManga] = useState(false);
  
  const displayedBooks = showAllBooks ? books : books.slice(0, 3);
  const displayedMountains = showAllMountains ? mountains : mountains.slice(0, 5);
  const displayedGames = showAllGames ? games : games.slice(0, 5);
  const displayedManga = showAllManga ? manga : manga.slice(0, 5);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex flex-1 items-center justify-between">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Button variant="ghost" className="text-lg font-bold">
              <Link href="/">
                TOP
              </Link>
            </Button>
          </nav>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <Image src={link.icon} width={20} height={20} alt={link.alt} />
              </a>
            ))}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-24">
          <div className="w-full px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Image
                src="/avator.jpeg"
                width={200}
                height={200}
                alt="こーひーあーる"
                className="rounded-full"
              />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  こーひーあーる
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  気まぐれITエンジニア
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>自己紹介</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    事業会社でWebサービスの開発を仕事としています、こーひーあーると申します。
                    大学時代にラテアート作りを嗜んでたんでこの名前になってますが、最近はコーヒー愛薄れてきてます、すまんな...。
                    ものづくりが好きで、気が向いたときには個人開発にもチャレンジしています。
                    最近のマイブームは登山とキャンプです。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-16 md:px-32">
            <div className="flex flex-col items-center space-y-4">
              <Image
                src="/yarigatake.jpeg"
                width={1200}
                height={900}
                alt="登山の風景"
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">興味や関心があるもの</h2>
            <div className="grid gap-6 lg:grid-cols-6">
              {interestsData.map((category, index) => (
                <Card key={index} className={`${category.colStart} ${category.colSpan}`}>
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.items.map((item, itemIndex) => (
                      <Badge key={itemIndex}>{item}</Badge>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">個人開発したもの</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                    <Button className="mt-4" variant="outline">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        {project.linkText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">あそびの広さと深さ</h2>
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* 登頂した山々 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">登頂した山々</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {displayedMountains.map((mountain, index) => (
                      <Badge key={index} variant="secondary">{mountain}</Badge>
                    ))}
                  </div>
                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowAllMountains(!showAllMountains)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      {showAllMountains ? '閉じる' : `すべて見る (${mountains.length}座)`}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 遊んだゲーム */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">遊んだゲーム</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {displayedGames.map((game, index) => (
                      <li key={index} className="py-1 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                        {game}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowAllGames(!showAllGames)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      {showAllGames ? '閉じる' : `すべて見る (${games.length}作品)`}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 読んだ漫画・小説 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">読んだ漫画・小説</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {displayedManga.map((item, index) => (
                      <li key={index} className="py-1 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setShowAllManga(!showAllManga)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      {showAllManga ? '閉じる' : `すべて見る (${manga.length}作品)`}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">買った本</h2>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <ul className="grid gap-2 text-gray-500 dark:text-gray-400">
                    {displayedBooks.map((book, index) => (
                      <li key={index} className="py-1 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
                        {book}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-center">
                    <Button 
                      variant="ghost" 
                      onClick={() => setShowAllBooks(!showAllBooks)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      {showAllBooks ? '閉じる' : `すべて見る (${books.length}冊)`}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">リンク</h2>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <Button key={index} asChild variant="outline">
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Image src={link.icon} width={20} height={20} alt={link.alt} /> {link.label}
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400 my-6">採用ご担当様はレジュメをご覧ください。</p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link href="/resume">
                  レジュメ
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 こーひーあーる
        </p>
      </footer>
    </div>
  )
}