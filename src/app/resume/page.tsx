import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

function CareerItem({ year, title, company, description, achievements, systemDiagramsSrc } : {year: string, title: string, company: string, description: string, achievements: Array<string>, systemDiagramsSrc: string}) {
    return (
      <Card className="mb-6">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
          <p className="text-sm text-muted-foreground">{company}</p>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{description}</p>
          {achievements.length > 0 && <h4 className="font-semibold mb-2">主な成果:</h4>}
          <ul className="list-disc pl-5 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
          {systemDiagramsSrc && <div className="mt-4">
            <h4 className="font-semibold mb-2">サーバ構成図</h4>
            <Image className="" src={systemDiagramsSrc} alt='システムダイアグラム' width={3000} height={200}></Image>
            </div>
          }
        </CardContent>
      </Card>
    )
  }

export default function ResumePage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
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
            <h2 className="text-3xl font-bold mb-4">職務経歴 要約</h2>
            <ul className="list-decimal pl-5 space-y-2">
              <li>株式会社テンダにて、ブラウザソーシャルゲームのテスターおよびLAMP系エンジニアとして従事。</li>
              <li>Unityを使った個人ゲーム制作に注力し、遊びの設計・グラフィックス・プログラミング・宣伝・販売を独りぼっちで行う。</li>
              <li>ブルックスグループ 株式会社Gnzoにて、PHPメインのバックエンドエンジニアとして従事。</li>
              <li>一時期、健康上の理由のため休職するも、再び同社に復帰しPHPメインのバックエンドエンジニアとして安定して従事。</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">スキルセット</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>言語</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>PHP: 7年の実務経験 + 1年の個人開発経験</li>
                    <li>Python: Seleniumを用いたE2Eテストの作成経験あり</li>
                    <li>Shell: サーバ運用手順を自動化し、1コマンドで実行できるスクリプトを作成</li>
                    <li>C# (Unity): 2年の個人開発経験</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>フレームワーク & ツール</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>CodeIgniter: 4年の実務経験</li>
                    <li>Laravel: 半年の実務経験 + 1年の個人開発経験</li>
                    <li>Podman: 半年の実務経験</li>
                    <li>Unity: 2年の個人開発経験</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>インフラストラクチャ & クラウド</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>オンプレミス: 4年の実務経験（ハイパーバイザ上での仮想マシンを用いたWebサービス構築）</li>
                    <li>AWS: 半年の実務経験（Route53、S3、CloudFrontを利用した構築）</li>
                    <li>CentOS: 6年の使用経験</li>
                    <li>AlmaLinux: 半年の使用経験</li>
                    <li>Apache: 6年の使用経験</li>
                    <li>NGINX: 6年の使用経験</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>データベース</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5">
                    <li>MySQL: 3年の実務経験（ソーシャルゲームにおけるスロークエリの改善実績あり）</li>
                    <li>OracleDB: 3年の実務経験</li>
                    <li>SQL Server: 1年の実務経験</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

        <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">職務経歴</h2>
            <div className="relative">
              <div className="space-y-12">
                <CareerItem
                  year="2023年9月 - 現在"
                  title="バックエンドエンジニア"
                  company="株式会社Gnzo"
                  description="主にECWebアプリケーションの追加開発・保守業務に従事。"
                  achievements={[
                    "自社ECサイトにGMOペイメントゲートウェイの決済サービスを利用したd払いの設計および実装を担当し、ECサイトの利便性を向上。",
                    "3DS2.0の決済サービスをECサイトに実装し、セキュリティ向上を図る。",
                    "社内LTを主催し、1ヶ月に1回のペースでLTを実施。チーム内でのナレッジ共有を促進。",
                  ]}
                  systemDiagramsSrc=''
                />
                <CareerItem
                  year="2022年5月 - 2023年8月"
                  title="休職"
                  company="所属なし"
                  description="精神疾患のため療養し、回復に専念。療養中に個人Webサービスを開発し、技術的なスキルアップも図りました。"
                  achievements={[]}
                  systemDiagramsSrc=''
                />
                <CareerItem
                  year="2019年7月 - 2022年4月"
                  title="バックエンドエンジニア"
                  company="株式会社Gnzo"
                  description="主にECWebアプリケーションの追加開発・保守業務に従事。"
                  achievements={[
                    "自社ECサイト向けのRESTishなAPIの設計・実装を担当し、類似のビジネスモデルのサービスを容易に作れるようにした。",
                    "BtoBtoCサイトの画像配信システムをAWS S3とCloudFrontで構築し、ストレージ容量を気にせずスケーラブルな配信を実現。",
                    "オンプレミスのDNSサーバーからAWS Route53への移行を完了し、可用性を向上。",
                    "SeleniumやPHPUnitを用いたテスト自動化を主体的に導入し、品質向上に貢献。",
                    "自社で使用しているOracleDBのバージョンアップに合わせて、自社ECサイトのPHPバージョンアップ（5系→7系）、CodeIgniterバージョンアップ（2系→3系）を実施。",
                  ]}
                  systemDiagramsSrc='/systemdiagram2.png'
                />
                <CareerItem
                  year="2015年4月 - 2018年6月"
                  title="LAMP系エンジニア"
                  company="株式会社テンダ"
                  description="フィーチャーフォン向けソーシャルゲームの追加開発・保守業務に従事。"
                  achievements={[
                    "ユーザーデータ調査とカスタマーサポート業務を担当し、ユーザー対応を円滑に実施。",
                    "新規イベント・キャンペーンのWebシステム開発を行い、サービス向上に貢献。",
                    "パフォーマンスチューニングを行い、クエリの最適化を実現。",
                  ]}
                  systemDiagramsSrc='/systemdiagram1.png'
                />
              </div>
            </div>
          </section>

          

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">関わった主なプロジェクト</h2>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>SOAP WebAPIのリプレイス</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 現在2名 (内、部長1名)</p>
                <p className="mb-2">役割: メインエンジニア</p>
                <p className="mb-2">期間: 2024年9月 - 現在</p>
                <p className="mb-4">概要: 10年以上前に協力会社により作成された、ERPと各種アプリケーションを連携させているSOAPプロトコルのWebAPIを内製化し、RESTishなWebAPIにリプレイスするプロジェクト。エラーレートの削減による機会損失の低減、機能要件に自社で対応できるようにすることを目的としています。</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>タスクの洗い出しおよび進捗管理</li>
                  <li>IISのアクセスログより現状の使用状況やボトルネックの特定</li>
                  <li>Podmanを用いたコンテナ技術、AlmaLinux、PHP8系、Laravelなどの技術選定およびそれらを用いたプロトタイプの作成</li>
                  <li>REST APIのエンドポイントおよびIN/OUT設計</li>
                  <li>10年ほど前に作っていただいたC#製アプリケーションのプログラムの解析</li>
                  <li>C#プログラムの解析を元にLaravelで再実装</li>
                  <li>OpenAPI仕様書と実装が乖離していないかのPHPUnit実装</li>
                  <li>GitLab CI/CDパイプラインの構築</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>d払いの導入</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 3名 (内、部長1名、サービス契約担当1名)</p>
                <p className="mb-2">役割: メインエンジニア</p>
                <p className="mb-2">期間: 2024年6月 - 2024年8月</p>
                <p className="mb-4">概要: 自社ECサイトでGMOペイメントゲートウェイの決済サービスを利用したd払いの導入。</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>タスクの洗い出しおよび進捗管理</li>
                  <li>自社ECサイトの決済周りのプログラム解読および影響範囲調査</li>
                  <li>GMOペイメントゲートウェイのモジュールを用いた決済機能呼び出し実装</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>3Dセキュア2.0対応</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 3名 (内、部長1名、サービス契約担当1名)</p>
                <p className="mb-2">役割: メインエンジニア</p>
                <p className="mb-2">期間: 2024年3月 - 2024年5月</p>
                <p className="mb-4">概要: 自社ECサイトでGMOペイメントゲートウェイの決済サービスを利用したクレジット決済に3Dセキュア2.0を対応。</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>タスクの洗い出しおよび進捗管理</li>
                  <li>自社ECサイトの決済周りのプログラム解読および影響範囲調査</li>
                  <li>GMOペイメントゲートウェイのモジュールを用いた決済機能呼び出し実装</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>自社ECサイト向けRESTishなAPI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 4名 (内、部長1名、エンジニア2名)</p>
                <p className="mb-2">役割: エンジニア</p>
                <p className="mb-2">期間: 2021年頃 - 2022年5月</p>
                <p className="mb-4">概要: ビジネスモデルが同じ複数のECサイトで利用できるWebAPIを開発し、ECサイトを横展開できるようにする。</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>Stoplight Studioを用いたOpenAPI仕様書の作成</li>
                  <li>自社ECアプリケーションのプログラムの解読</li>
                  <li>CodeIgniter3を用いたRESTishなWebAPIの設計・開発</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>BtoBtoCの新規コミュニティサイトの開発</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 6名 (内、部長1名、エンジニア2名、Webデザイナー1名、その他1名)</p>
                <p className="mb-2">役割: AWS担当</p>
                <p className="mb-2">時期: 2021年</p>
                <p className="mb-4">概要: ヘルスケアなどのメーカーと一般消費者を繋ぐコミュニティサイトの開発</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>AWSのS3とCloudFrontを用いた静的コンテンツ配信の仕組みの構築</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>オンプレミスの公開DNSサーバのクラウド移行</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 2名 (内 部長1名)</p>
                <p className="mb-2">役割: 移行計画・移行作業担当</p>
                <p className="mb-2">時期: 2020年</p>
                <p className="mb-4">概要: 可用性向上のため、オンプレミスのBINDサーバで管理していたゾーンファイルをAWSのRoute53に移行</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>仮のドメインを用いた移行方法の検証・手順の作成</li>
                  <li>AWSのマネジメントコンソールからRoute53でゾーンファイル作成</li>
                  <li>名前解決の委譲先をRoute53にして移行実施</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>自社ECアプリケーションのPHPおよびCodeIgniterのバージョンアップ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 2名 (内 部長1名)</p>
                <p className="mb-2">役割: 移行計画・移行作業担当</p>
                <p className="mb-2">時期: 2020年</p>
                <p className="mb-4">概要: 自社で使用しているOracleDBのバージョンアップに合わせて、自社ECサイトのPHPバージョンアップ（5系→7系）、CodeIgniterバージョンアップ（2系→3系）を実施</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>先行して別のECサイトでバージョンアップされた方がいたので進め方を教えてもらう</li>
                  <li>同じ手法でバージョンアップ作業を実施</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle>ブラウザソーシャルゲームの追加開発・保守</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">チーム規模: 5名 (内 ディレクター1名、プランナー1名、Webデザイナー1名、プログラマ1名)</p>
                <p className="mb-2">役割: プログラマ</p>
                <p className="mb-2">期間: 2016年 - 2018年</p>
                <p className="mb-4">概要: 版権ソーシャルゲームの追加開発・保守業務</p>
                <h4 className="font-bold mb-2">担当工程:</h4>
                <ul className="list-disc pl-5">
                  <li>新規イベント・キャンペーンのWebシステム追加開発</li>
                  <li>既存イベント・キャンペーンのWebシステム保守と改修</li>
                  <li>MySQLサーバーのスロークエリ解消と負荷軽減</li>
                  <li>排他制御未実装によるデータ不整合の軽減</li>
                  <li>ユーザーデータ調査からエンドユーザーへの返信メール作成までのカスタマーサポート業務</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">個人開発</h2>
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
                  使用技術: Unity
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">資格</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>IPA ネットワークスペシャリスト試験 (2024/7 合格)</li>
              <li>IPA 応用情報技術者試験 (2023/6 合格)</li>
              <li>IPA 基本情報技術者試験 (2022/11 合格)</li>
              <li>AWS Certified Solutions Architect - Associate (2020/4,2023/4 合格)</li>
              <li>PHP5初級技術者 (2017/5 合格)</li>
              <li>OSS-DB Silver (2015/8 合格)</li>
              <li>LPICレベル1 (2015/7 合格)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">これからできるようになりたいこと</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>PHP以外のバックエンド言語を1つ以上商業的に使いこなせる</li>
              <li>パブリッククラウドでWebサービスの環境構築ができる</li>
              <li>IPA 高度情報技術者試験に4つ合格している</li>
              <li>週1出社程度のリモートワーク</li>
              <li>技術ブログ執筆の促進</li>
              <li>OSSにちょこっと貢献 (数行直すとか翻訳とか)</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  )
}