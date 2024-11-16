"use client";

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function ResumePage() {

  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => 
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  };

  const projects = [
    {
      title : "SOAP WebAPIのリプレイス",
      team : "チーム規模: 現在2名 (内、部長1名)",
      role : "役割: メインエンジニア",
      time : "期間: 2024年9月 - 現在",
      description : "概要: 10年以上前に協力会社により作成された、ERPと各種アプリケーションを連携させているSOAPプロトコルのWebAPIを内製化し、RESTishなWebAPIにリプレイスするプロジェクト。エラーレートの削減による機会損失の低減、機能要件に自社で対応できるようにすることを目的としています。",
      roleTasks : [
        "タスクの洗い出しおよび進捗管理",
        "IISのアクセスログより現状の使用状況やボトルネックの特定",
        "Podmanを用いたコンテナ技術、AlmaLinux、PHP8系、Laravelなどの技術選定およびそれらを用いたプロトタイプの作成",
        "REST APIのエンドポイントおよびIN/OUT設計",
        "10年ほど前に作っていただいたC#製アプリケーションのプログラムの解析",
        "プログラムの解析を元にLaravelで再実装",
        "OpenAPI仕様書と実装が乖離していないかのPHPUnit実装",
        "GitLab CI/CDパイプラインの構築",
      ]
    },
    {
      title : "d払いの導入",
      team : "チーム規模: 3名 (内、部長1名、サービス契約担当1名)",
      role : "役割: メインエンジニア",
      time : "期間: 2024年6月 - 2024年8月",
      description : "概要: 自社ECサイトでGMOペイメントゲートウェイの決済サービスを利用したd払いの導入。",
      roleTasks : [
        "タスクの洗い出しおよび進捗管理",
        "自社ECサイトの決済周りのプログラム解読および影響範囲調査",
        "GMOペイメントゲートウェイのモジュールを用いた決済機能呼び出し実装",
      ]
    },
    {
      title : "3Dセキュア2.0対応",
      team : "チーム規模: 3名 (内、部長1名、サービス契約担当1名)",
      role : "役割: メインエンジニア",
      time : "期間: 2024年3月 - 2024年5月",
      description : "概要: 自社ECサイトでGMOペイメントゲートウェイの決済サービスを利用したクレジット決済に3Dセキュア2.0を対応。",
      roleTasks : [
        "タスクの洗い出しおよび進捗管理",
        "自社ECサイトの決済周りのプログラム解読および影響範囲調査",
        "GMOペイメントゲートウェイのモジュールを用いた決済機能呼び出し実装",
      ]
    },
    {
      title : "社内LTの主催",
      team : "チーム規模: 10名程度 (内、部長1名、ITエンジニア8名)",
      role : "役割: メインエンジニア",
      time : "期間: 2023年10月 - 2024年9月",
      description : "概要: チームの技術力を上げて高品質なサービスを提供するため、社内LTを主催。",
      roleTasks : [
        "月に1回のペースでLTとして発表をした",
      ]
    },
    {
      title : "自社ECサイト向けRESTishなAPI",
      team : "チーム規模: 4名 (内、部長1名、エンジニア2名)",
      role : "役割: 設計・実装・テスト 主担当",
      time : "期間: 2021年頃 - 2022年5月",
      description : "概要: 複数のECサイトで利用できるWebAPIを開発し、ビジネスモデルが同じECサイトを横展開できるようにする。",
      roleTasks : [
        "エンドポイントの設計、Stoplight Studioを用いたOpenAPI仕様書の作成",
        "自社ECアプリケーションのプログラムの解読",
        "CodeIgniter3を用いたRESTishなWebAPIの実装",
      ]
    },
    {
      title : "BtoBtoCの新規コミュニティサイトの開発",
      team : "チーム規模: 6名 (内、部長1名、エンジニア2名、Webデザイナー1名、その他1名)",
      role : "役割: AWS担当",
      time : "時期: 2021年",
      description : "概要: ヘルスケアなどのメーカーと一般消費者を繋ぐコミュニティサイトの開発。",
      roleTasks : [
        "AWSのS3とCloudFrontを用いた静的コンテンツ配信の仕組みの構築",
      ]
    },
    {
      title : "オンプレミスの公開DNSサーバのクラウド移行",
      team : "チーム規模: 2名 (内 部長1名)",
      role : "役割: 移行計画・移行作業 主担当",
      time : "時期: 2020年",
      description : "概要: 可用性向上のため、オンプレミスのBINDサーバで管理していたゾーンファイルをAWSのRoute53に移行。",
      roleTasks : [
        "仮のドメインを用いた移行方法の検証・手順の作成",
        "AWSのマネジメントコンソールからRoute53でゾーンファイル作成",
        "名前解決の委譲先をRoute53にして移行実施",
      ]
    },
    {
      title : "自社ECアプリケーションのPHPおよびCodeIgniterのバージョンアップ",
      team : "チーム規模: 2名 (内 部長1名)",
      role : "役割: 実装・テスト者",
      time : "時期: 2020年",
      description : "概要: 自社で使用しているOracleDBのバージョンアップに合わせて、自社ECサイトのPHPバージョンアップ（5系→7系）、CodeIgniterバージョンアップ（2系→3系）を実施。",
      roleTasks : [
        "先行して別のECサイトでバージョンアップされた方がいたので進め方を教えてもらう",
        "同じ手法でバージョンアップ作業を実施",
      ]
    },
    {
      title : "ブラウザソーシャルゲームの追加開発・保守",
      team : "チーム規模: 5名 (内 ディレクター1名、プランナー1名、Webデザイナー1名、プログラマ1名)",
      role : "役割: プログラマ",
      time : "期間: 2016年 - 2018年",
      description : "概要: 版権ソーシャルゲームの追加開発・保守業務。",
      roleTasks : [
        "新規イベント・キャンペーンのWebシステム追加開発",
        "MySQLサーバーのスロークエリ解消と負荷軽減",
        "排他制御未実装によるデータ不整合の軽減",
        "ユーザーデータ調査からエンドユーザーへの返信メール作成までのカスタマーサポート業務",
      ]
    },
  ];

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
            <a href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" width={20} height={20} alt="GitHub" />
            </a>
            <a href="https://x.com/plus_marumaru" target="_blank" rel="noopener noreferrer">
              <Image src="/x.svg" width={20} height={20} alt="X" />
            </a>
            <a href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">
              <Image src="/zenn.svg" width={20} height={20} alt="Zenn" />
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <section className="w-full py-12">
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
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                    こーひーあーる
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Webサービスを支えるバックエンドエンジニア
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">職務経歴</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>2023年9月 - 現在 / 株式会社Gnzo / ECサイトの決済機能改良、RESTishなWebAPI、テスト自動化など</li>
              <li>2022年6月 - 2023年8月 / 休職 / 回復に専念</li>
              <li>2019年7月 - 2022年5月 / 株式会社Gnzo / ECサイトの開発・運用、RESTishなWebAPI、BtoBtoCサイト開発、DNSサーバ移行</li>
              <li>2018年7月 - 2019年6月 /  個人ゲーム開発者 / Unityを使用したゲーム制作および販売</li>
              <li>2015年4月 - 2018年6月 / 株式会社テンダ / ブラウザソーシャルゲームの開発・運用</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">スキルセット</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>言語: PHP (7年), Python, Shell, C# (Unity)</li>
              <li>フレームワーク: CodeIgniter (4年), Laravel (1年), Unity (2年)</li>
              <li>インフラ: AWS (半年), CentOS, AlmaLinux, Apache, NGINX</li>
              <li>データベース: MySQL (3年), OracleDB (3年), SQL Server (1年)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">関わった主なプロジェクト (クリックで詳細)</h2>
            {projects.map((project, index) => (
              <Card key={index} className="mb-4">
                <CardHeader onClick={() => toggleCard(index)} className="flex flex-row items-center justify-between">
                  <CardTitle>{project.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleCard(index)}
                    aria-expanded={expandedCards.includes(index)}
                  >
                    {expandedCards.includes(index) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {expandedCards.includes(index) ? 'Collapse' : 'Expand'}
                    </span>
                  </Button>
                </CardHeader>
                {expandedCards.includes(index) && (
                  <CardContent>
                    <p className="mb-2">{project.team}</p>
                    <p className="mb-2">{project.role}</p>
                    <p className="mb-2">{project.time}</p>
                    <p className="mb-4">{project.description}</p>
                    <h4 className="font-bold mb-2">担当工程:</h4>
                    <ul className="list-disc pl-5">
                      {project.roleTasks.map((roletask, taskIndex) => (
                        <li key={taskIndex}>{roletask}</li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
            <details>
              <summary>ECシステムのサーバ構成図 (クリックで詳細)</summary>
                <Image src="/systemdiagram2.png" width={3000} height={3000} alt="システム構成図" />
            </details>
            <details>
              <summary>ブラウザソーシャルゲームのサーバ構成図 (クリックで詳細)</summary>
                <Image src="/systemdiagram1.png" width={3000} height={3000} alt="システム構成図" />
            </details>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">個人開発</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <a className="hover:text-gray-500" target="_blank" rel="noopener noreferrer" href="https://godotplayer.com">
                  フリーゲーム投稿サイト GodotPlayer
                </a>
                <p className="text-sm text-gray-600">
                  使用技術: Laravel、React、TailwindCSS
                </p>
              </li>
              <li>
                <a className="hover:text-gray-500" target="_blank" rel="noopener noreferrer" href="https://bingo-time-simulator.vercel.app">
                  ビンゴ大会終了時間計算シュミレーター
                </a>
                <p className="text-sm text-gray-600">
                  使用技術: JavaScript
                </p>
              </li>
              <li>
                <a className="hover:text-gray-500" target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/1096420/Re_Painter">
                  PCゲーム Re Painter
                </a>
                <p className="text-sm text-gray-600">
                  使用技術: Unity, C#
                </p>
              </li>
              <li>
                <a className="hover:text-gray-500" target="_blank" rel="noopener noreferrer" href="https://unityroom.com/users/3cr10wv7fsuxmag8h594">
                  ブラウザで遊べるミニゲーム集
                </a>
                <p className="text-sm text-gray-600">
                  使用技術: Unity, C#
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">資格</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>IPA ネットワークスペシャリスト試験 (2024/7 合格)</li>
              <li>IPA 応用情報技術者試験 (2023/6 合格)</li>
              <li>IPA 基本情報技術者試験 (2022/11 合格)</li>
              <li>AWS Certified Solutions Architect - Associate (2020/4,2023/4 合格)</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">学歴</h2>
            <p>芝浦工業大学 材料工学専攻 学部卒（2015年）</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">今後の展望</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>チームメンバーの成長や成果を後押しする存在。プロマネやテックリードのポジションではなくとも、積極的に知識共有やサポートを行い、メンバーのスキル向上や業務効率化を促進。</li>
              <li>PHP以外のバックエンド言語を1つ以上商業的に使いこなせる。 (Go、サーバーサイドKotlinなど)</li>
              <li>パブリッククラウドでWebサービスの環境構築ができる。</li>
              <li>レガシーなシステムをよしなに改良できる。</li>
              <li>IPA 高度情報技術者試験に4つ合格している。</li>
              <li>週1出社程度のリモートワークを実現。 (家族との時間を大切にしたい)</li>
              <li>自他ともにメンタルヘルスのケアができる人物。</li>
              <li>技術ブログを定期的に執筆し、ナレッジ共有を促進。</li>
              <li>OSSにちょこっと貢献。 (翻訳プロジェクトや小規模なコード修正を通じて)</li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 こーひーあーる
        </p>
      </footer>
    </div>
  )
}