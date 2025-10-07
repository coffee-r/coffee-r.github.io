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
      title : "ECモールのフルフィルメント化",
      team : "チーム規模: 6名 (内、部長1名、要件定義・サービス設計1名、フロントエンド1名、バックエンド2名) ※企画部門や倉庫部門含めると数十名",
      role : "役割: バックエンド 機能開発担当",
      time : "期間: 2025年7月 - 現在",
      description : "概要: Yahoo/楽天型の自社ECモールを、AmazonライクなECモールにする",
      challenge : [
        "開発担当としてアサインされたもののシステム全体像が不明瞭で何を開発すればいいかわからない状態だった",
        "ERPシステムの制約（仕様変更すると在庫管理・販売管理が影響を受け、部門業務の変更が必要になる）",
        "業務フローは存在したが、開発可能な粒度まで落とし込まれていない"
      ],
      actions : [
        "既存の業務フロー図を分析し、開発可能な粒度まで再整理",
        "企画・倉庫・カスタマー・販売管理・経理など、関係部門を網羅した業務フロー図を作成",
        "業務フローからシステム接点を抽出し、ユースケース図を作成",
        "ユースケース図から開発が必要な機能一覧を作成し、スケジュール表に落とし込み",
        "ERPパッケージ運用担当にヒアリングし、制約条件を明確化",
        "WebAPI経由でERPの受注データを取得する仕様を設計（ERP変更を回避）",
        "商品登録・変更の仕様叩き作成",
        "倉庫保管手数料算出のための記録仕様を作成",
        "ECモールWebアプリ・管理アプリのバックエンド実装（初期フェーズ）"
      ],
      results : [
        "業務フロー・ユースケース図により、システム全体像を可視化",
        "開発スコープを明確化し、「何をすれば完了か」をチーム全体で共有",
        "ERP制約を整理し、既存業務への影響を最小化した",
        "納品計画登録画面のバックエンド実装を完了",
      ],
      learnings : [
        "曖昧な要件を図解で可視化することで、関係者の認識を揃えられることを実感",
        "既存のシステムを活用する際には制約条件を確認しておく必要性を学んだ",
      ]
    },
    {
      title : "SOAP WebAPIのリプレイス",
      team : "チーム規模: 4名 (内、部長1名、別機能担当エンジニア2名)",
      role : "役割: メインエンジニア",
      time : "期間: 2024年9月 - 2025年6月 (内7ヶ月間稼働)",
      description : "概要: 10年以上前に協力会社により作成された、ERPと各種アプリケーションを連携させているSOAPプロトコルのWebAPIを内製化し、RESTishなWebAPIにリプレイスするプロジェクト。エラーレートの削減による機会損失の低減、機能要件に自社で対応できるようにすることを目的としています。",
      challenge : [
        "ERPとその他のアプリケーションとで不整合がしばしば発覚することはわかっていたが、何が原因かはチームでわかっていなかった",
        "ERPが稼働し続ける限りAPIも同様に稼働させ続ける必要があったので、メンテナンスしやすいアプリ構成にする必要があると感じた",
        "これまで活用していたCodeIgniter3がメンテナンス切れていたため、バージョンを上げるかフレームワークを変える必要があった",
        "CentOSのサポートも切れていたため、今回改めて開発するアプリの構成や実績が他でも流用される可能性があった",
        "チームがテストコードを書く文化がなかったので、この機に布教できないかを考えていた"
      ],
      actions : [
        "現行サーバのIISからアクセスログを取得し分析",
        "AlmaLinux + Podman + NGINX + PHPFPMをベースに、いくつかプロトタイプを作り技術構成案を作成",
        "AlmaLinuxから社内DBサーバ(Oracle、SQLServer)にCRUDできるアプリをいくつか作成",
        "タスクの洗い出しおよび進捗管理",
        "REST APIのエンドポイントおよびIN/OUT設計",
        "10年ほど前に作っていただいたC#製アプリケーションのプログラムの解析",
        "プログラムの解析を元にLaravelで再実装",
        "OpenAPI仕様書と実装が乖離していないかのPHPUnit実装",
        "GitLab CI/CDパイプラインの構築",
        "LaravelPintとLarastanとPHPUnitをgit precommitで検証するスクリプトを作成",
        "各種クライアントで、旧APIから作ったAPIへ呼び出しを切り替える作業"
      ],
      results : [
        "ログ分析より、決まった時間のERPの日時処理におけるデータベースインデックス再作成のタイミングでAPIエラーが多発することを特定",
        "CodeIgniter4かLaravelで迷ったものの、学習リソースがより充実していてメンバーがついて行きやすいだろうLaravelを選択",
        "コンテナでもVMでもAlmaLinuxからDB接続を確認したことで、他のアプリでも構成を真似できるようにした",
        "構成をコンテナファイル化することで部分的にIaCを実践し、オープンソースやミドルウェアのバージョンアップをしやすくした",
        "OpenAPI仕様書と実装との差異を減らし、仕様書を信じられる状況にした",
        "テストコードを敷くことにより世間一般で標準的な開発に寄せた",
      ],
      learnings : []
    },
    {
      title : "d払いの導入",
      team : "チーム規模: 3名 (内、部長1名、サービス契約担当1名)",
      role : "役割: メインエンジニア",
      time : "期間: 2024年6月 - 2024年8月",
      description : "概要: 自社ECサイトでGMOペイメントゲートウェイの決済サービスを利用したd払いの導入。",
      challenge : [],
      actions : [
        "タスクの洗い出しおよび進捗管理",
        "自社ECサイトの決済周りのプログラム解読および影響範囲調査",
        "GMOペイメントゲートウェイのモジュールを用いた決済機能呼び出し実装",
      ],
      results : [
        "d払い決済を無事リリース、決済手段の選択肢を拡大"
      ],
      learnings : []
    },
    {
      title : "3Dセキュア2.0対応",
      team : "チーム規模: 3名 (内、部長1名、サービス契約担当1名)",
      role : "役割: メインエンジニア",
      time : "期間: 2024年3月 - 2024年5月",
      description : "概要: 自社ECサイトでGMOペイメントゲートウェイの決済サービスを利用したクレジット決済に3Dセキュア2.0を対応。",
      challenge : [
        "サーバに入っている決済用PHPモジュールが古くて3DS2.0に対応していない",
        "クレカ決済の注文を当日中にキャンセルしたい要望が別途あった",
        "注文は完了しているが決済が未完了などの不整合をマンパワー運用でカバーしている"
      ],
      actions : [
        "タスクの洗い出しおよび進捗管理",
        "自社ECサイトの決済周りのプログラム解読および影響範囲調査",
        "決済用PHPモジュールを入れ替え",
        "GMOペイメントゲートウェイのモジュールを用いた決済機能呼び出し実装",
        "キャンセルするための一部決済データをDBに追加記録し、注文キャンセル時に読み取る"
      ],
      results : [],
      learnings : [
        "シーケンス図の読み方などを習得",
        "結果整合性を保つための、決済結果通知方式があることを知る"
      ]
    },
    {
      title : "社内LTの主催",
      team : "チーム規模: 10名程度 (内、部長1名、ITエンジニア8名)",
      role : "役割: 企画・主担当",
      time : "期間: 2023年10月 - 2024年9月",
      description : "概要: チームの技術力を上げて高品質なサービスを提供するため、社内LTを主催。",
      challenge : [
        "いいビジネスをするためによりよくソフトウエアを作りたいが、そのためにチームメンバー全体のスキルアップが必要だと感じた"
      ],
      actions : [
        "月に1回のペースでLTとして発表をした",
      ],
      results : [
        "1年間12回、スライド資料を作って発表するのをやり遂げた"
      ],
      learnings : [
        "何かしらの文化を導入すること自体は楽だが、メンバーが誰一人発表しなかったので浸透させることの困難さを知った"
      ]
    },
    {
      title : "自社ECサイト向けRESTishなAPI",
      team : "チーム規模: 4名 (内、部長1名、エンジニア2名)",
      role : "役割: 設計・実装・テスト 主担当",
      time : "期間: 2021年頃 - 2022年5月",
      description : "概要: 複数のECサイトで利用できるWebAPIを開発し、ビジネスモデルが同じECサイトを横展開できるようにする。",
      challenge : [
        "共通の顧客テーブルを参照している複数のECサイトで、全く同じ機能を実装したり運用する人的コストが高い状態だった",
        "WebAPIの開発は当時のメンバーで経験者がいなかった",
        "WebAPIとして切り出す現行ECの機能実装が複雑怪奇で解析が困難"
      ],
      actions : [
        "WebAPIの作り方について学習",
        "現行ECサイトのPHPコードを読み、Excelに仕様を書き出していく",
        "エンドポイントの設計、Stoplight Studioを用いたOpenAPI仕様書の作成",
        "CodeIgniter3を用いたRESTishなWebAPIの実装",
      ],
      results : [
        "注文フォーム画面用に最適化したWebAPIを担当してリリースした"
      ],
      learnings : [
        "CodeIgniter3でのRESTAPI開発が辛かったので、もう少し技術的に調べて提案すればよかったと反省",
      ]
    },
    {
      title : "BtoBtoCの新規コミュニティサイトの開発",
      team : "チーム規模: 6名 (内、部長1名、エンジニア2名、Webデザイナー1名、その他1名)",
      role : "役割: AWS担当",
      time : "時期: 2021年",
      description : "概要: ヘルスケアなどのメーカーと一般消費者を繋ぐコミュニティサイトの開発。",
      challenge : [
        "動画コンテンツを取引先企業が無制限に登録される可能性が要件として上がったため、スケーラブルな容量を持つサーバが必要だった"
      ],
      actions : [
        "AWSのS3とCloudFrontを用いた静的コンテンツ配信の仕組みの構築",
        "AWS S3のWebAPIをPHPを使ってCALLするデモスクリプトを作って他開発者に展開"
      ],
      results : [],
      learnings : []
    },
    {
      title : "オンプレミスの公開DNSサーバのクラウド移行",
      team : "チーム規模: 2名 (内 部長1名)",
      role : "役割: 移行計画・移行作業 主担当",
      time : "時期: 2020年",
      description : "概要: 可用性向上のため、オンプレミスのBINDサーバで管理していたゾーンファイルをAWSのRoute53に移行。",
      challenge : [
        "社内にAWSに詳しい人材がおらず、手探りでの作業",
        "移行失敗時は数十時間のダウンタイムが予測され、ミスが許されない",
        "オンプレミスのリンク負荷分散構成を、Route53で再現する必要"
      ],
      actions : [
        "AWSの学習・調査",
        "DNSの仕組みについて学習・調査",
        "会社のルートアカウントがMFA対応していなかったのを対応",
        "仮押さえしているドメインを用いた移行方法の検証・手順の作成、練習",
        "AWSのマネジメントコンソールからRoute53でゾーンファイル作成",
        "名前解決の委譲先をRoute53にして、売上規模の少ないドメインから移行実施",
        "nslookupやdigコマンドでネームサーバが変わったことを確認",
      ],
      results: [
        "全ドメインを障害なく移行完了、可用性向上を実現",
        "Route53のフェイルオーバールーティング&ヘルスチェックで、リンク負荷分散を再現",
        "AWS SAA（Solutions Architect Associate）試験に合格"
      ],
      learnings : [
        "サービス数は少ないもののAWSを使った実務経験を通してAWSの知識獲得",
      ]
    },
    {
      title : "自社ECアプリケーションのPHPおよびCodeIgniterのバージョンアップ",
      team : "チーム規模: 2名 (内 部長1名)",
      role : "役割: 実装・テスト",
      time : "時期: 2020年",
      description : "概要: OracleDBバージョンアップに合わせ、自社ECサイトのPHP（5系→7系）、CodeIgniter（2系→3系）をバージョンアップ",
      challenge : [
        "PHP5→7、CodeIgniter2→3で非推奨関数や仕様変更が多数",
        "自動テストがなく、影響範囲の調査や共通関数修正時のデグレ検知が困難"
      ],
      actions : [
        "先行して別ECサイトでバージョンアップした担当者から手法をヒアリング",
        "grep検索を駆使し、非推奨関数の使用箇所を全件洗い出し",
        "PHP5→7、CodeIgniter2→3の仕様変更に対応したコード修正",
        "手動テストにより、主要機能の動作確認を実施",
        "本番環境へのリリース作業"
      ],
      results : [
        "ログインから注文までの主要導線については大きな障害なく移行完了"
      ],
      learnings : [
        "レガシーシステムのバージョンアップには、地道な調査と確認が不可欠と学んだ",
      ]
    },
    {
      title : "ブラウザソーシャルゲームの追加開発・保守",
      team : "チーム規模: 5名 (内 ディレクター1名、プランナー1名、Webデザイナー1名、プログラマ1名)",
      role : "役割: サーバサイドのプログラマ",
      time : "期間: 2016年 - 2018年",
      description : "概要: 版権ソーシャルゲームの追加開発・保守業務",
      challenge : [
        "ループ内での大量SQL発行やスロークエリにより、サーバ負荷が高くゲームが重い",
        "排他制御が未実装で、増殖バグなどのデータ不整合が発生",
        "レガシーなコードベースで、変更・追加開発が困難"
      ],
      actions : [
        "新規イベント・キャンペーンのWebシステム追加開発",
        "イベントデータをExcelからSQL化し、本番DBへ投入",
        "MySQLのスロークエリを特定し、インデックス追加やクエリ改善で負荷軽減",
        "排他制御を実装し、データ不整合を軽減",
        "ユーザーデータ調査からエンドユーザーへの返信メール作成まで、カスタマーサポート業務を担当"
      ],
      results : [
        "スロークエリ解消により、ゲームの体感速度が向上",
        "排他制御実装により、データ不整合の発生頻度を削減",
      ],
      learnings : [
        "DB最適化（インデックス、クエリチューニング）がサービス品質に直結することを実感",
        "自分でサービスを使い、体験を改善する重要性を学んだ",
        "本番に近いデータ量でSQL実行速度を検証する必要性を体験",
        "レガシーコードベースでの開発の難しさを学んだ",
        "毎朝DAU・売上の確認を通じて、ビジネス視点でサービスを見る重要性を学んだ",
        "カスタマーサポート対応を通じて、不具合がユーザー体験に与える影響の大きさを実感"
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
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    game.developer.ryo@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">職務経歴</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>2019年7月 - 現在 / 株式会社Gnzo / ECサイトの開発・運用、RESTishなWebAPI、BtoBtoCサイト開発、DNSサーバ移行</li>
              <li>2018年7月 - 2019年6月 /  個人ゲーム開発者 / Unityを使用したゲーム制作および販売</li>
              <li>2015年4月 - 2018年6月 / 株式会社テンダ / ブラウザソーシャルゲームの開発・運用</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">スキルセット</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>言語: PHP (7年), Python, Shell, C# (Unity)</li>
              <li>フレームワーク: CodeIgniter3 (4年), Laravel (1年), Unity (2年)</li>
              <li>インフラ: AWS (半年), CentOS, AlmaLinux, Apache, NGINX</li>
              <li>データベース: MySQL (3年), OracleDB (3年), SQL Server (1年)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">関わった主なプロジェクト (クリックで詳細)</h2>
            {projects.map((project, index) => (
              <Card key={index} className="mb-4">
                <CardHeader onClick={() => toggleCard(index)} className="flex flex-row items-center justify-between cursor-pointer">
                  <CardTitle>{project.title}</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
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
                    
                    {project.challenge && project.challenge.length > 0 && (
                      <>
                        <h4 className="font-bold mb-2">背景・課題:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {project.challenge.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {project.actions && project.actions.length > 0 && (
                      <>
                        <h4 className="font-bold mb-2">担当工程:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {project.actions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {project.results && project.results.length > 0 && (
                      <>
                        <h4 className="font-bold mb-2">成果:</h4>
                        <ul className="list-disc pl-5 mb-4">
                          {project.results.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {project.learnings && project.learnings.length > 0 && (
                      <>
                        <h4 className="font-bold mb-2">学び:</h4>
                        <ul className="list-disc pl-5">
                          {project.learnings.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
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
                <a className="hover:text-gray-500" target="_blank" rel="noopener noreferrer" href="https://tsumiki-kichi.com">
                  Webゲーム置き場 TsumikiKichi
                </a>
                <p className="text-sm text-gray-600">
                  使用技術: Laravel、React、TailwindCSS、Golang (Echo)　※開発に際して生成AI(Claude)を活用しています
                </p>
              </li>
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
              <li>IPA データベーススペシャリスト試験 (2024/12 合格)</li>
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
              <li>無理せず長く働き続けたい</li>
              <li>神奈川にある実家近くに住み、定期的に両親や兄弟とコミュニケーションを取りたい</li>
              <li>テックリード的な存在を目指しており、現場の課題を踏まえた設計をしたい</li>
              <li>IPA システムアーキテクト・情報処理安全確保支援士 試験合格</li>
              <li>PHP以外にバックエンド言語を1つ使いこなせるように</li>
              <li>TypeScriptベースのWebフロントエンドを最低限触れるように</li>
              <li>パブリッククラウドで簡単なWebサービスの環境構築をできるように</li>
              <li>歴史あるシステムをよしなに改良できるように</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">その他</h2>
            <p className='mb-4'>健康上の理由により、下記期間で休職しております。クリニックに通いながら、安定した就労を目指しています。</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>2025年9月 - 現在</li>
              <li>2025年2月 - 2025年4月</li>
              <li>2022年6月 - 2023年8月</li>
            </ul>
          </section>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="w-full px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">リンク</h2>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <a href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">
                  <Image src="/github.svg" width={20} height={20} alt="GitHub" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://x.com/plus_marumaru" target="_blank" rel="noopener noreferrer">
                  <Image src="/x.svg" width={20} height={20} alt="X" /> X (旧Twitter)
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">
                  <Image src="/zenn.svg" width={20} height={20} alt="Zenn" /> Zenn
                </a>
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
