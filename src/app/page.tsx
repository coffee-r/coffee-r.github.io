import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-10">

        <aside className="text-center hidden md:block md:w-1/4">
          <img className="mx-auto w-24" src="/avator.jpeg" alt="avator"/>
          <div className="md:mt-2 md:mb-6">
              <h1 className="font-bold">こーひーあーる</h1>
              <h1>バックエンドエンジニア</h1>
          </div>
          <nav>
            <ul className="mt-3 flex justify-around flex-col">
              <li className="mb-1"><Link className="underline hover:text-gray-500" href="https://x.com/plus_marumaru" target="_blank" rel="noopener noreferrer">X (旧Twitter)</Link></li>
              <li className="mb-1"><Link className="underline hover:text-gray-500" href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">Github</Link></li>
              <li className="mb-1"><Link className="underline hover:text-gray-500" href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">Zenn</Link></li>
            </ul>
          </nav>
        </aside>

        <div className="flex justify-center mb-8 md:hidden">
          <img className="w-24 h-24" src="/avator.jpeg" alt="avator" />
          <div className="px-2 flex flex-col justify-center leading-normal">
            <h5 className="font-bold text-xl">こーひーあーる</h5>
            <p className="text-xl">バックエンドエンジニア</p>
            <ul className="mt-1 flex justify-between">
              <li className="underline hover:text-gray-500"><Link href="https://x.com/plus_marumaru" target="_blank" rel="noopener noreferrer">X (旧Twitter)</Link></li>
              <li className="underline hover:text-gray-500"><Link href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">Github</Link></li>
              <li className="underline hover:text-gray-500"><Link href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">Zenn</Link></li>
            </ul>
          </div>

        </div>
        
        <article className="prose mx-auto">

          <h3>プロフィール</h3>

          <p>
            工業大学で材料工学を学んでいましたが、就職活動にはあまり力を入れていませんでした。大学の教授にプログラミングを勧められたことで、専攻とは違う分野に興味を持ち、Webシステム開発の道に進みました。ものづくりが好きで、気が向いたときには個人開発にもチャレンジしています。
          </p>

          <h3>キャリア</h3>

          <ul className="timeline timeline-vertical timeline-compact not-prose">
            <li>
              <div className="timeline-start">Webシステム開発会社 (2015/4 ~ 2018/6)</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">モバイルブラウザゲーム事業部でPHPエンジニアとして、Webアプリケーションの保守・追加開発、スロークエリの解消、カスタマーサポート業務を担当しました。</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">個人プロジェクト (2018/7 ~ 2019/6)</div>
              <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">Unityを使って個人ゲームの開発に取り組み、ゲームの設計からグラフィックス、プログラミング、宣伝、販売まで一手に行いました。</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">嗜好品・健康品 通販会社 (2019/7 ~ 2022/4)</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">情報システム部門でPHPエンジニアとして、Webシステムの改修や機能移植、テストの導入、AWSへの移行などを担当しました。</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">休職 (2022/5 ~ 2023/8)</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">精神疾患のため療養し、回復に専念しました。</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">嗜好品・健康品 通販会社 (2023/9 ~)</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">情報システム部門でPHPエンジニアとして復帰し、システムの保守・改善に取り組んでいます。</div>
            </li>
          </ul>

          <h3>仕事でやってきたこと</h3>

          <h4>Webシステム開発会社 モバイルブラウザゲーム事業部</h4>
          <ul>
            <li>既存イベント・キャンペーンのWebシステム保守と改修</li>
            <li>不具合発生時の補填作業や運用対応</li>
            <li>MySQLサーバーのスロークエリ解消と負荷軽減</li>
            <li>排他制御未実装によるデータ不整合の軽減</li>
            <li>ゲームプランナー向けCMSのWebシステム開発</li>
            <li>新規イベント・キャンペーンのWebシステム追加開発</li>
            <li>ユーザーデータ調査からエンドユーザーへの返信メール作成までのカスタマーサポート業務</li>
            <li>テスター協力会社の工数管理</li>
          </ul>
          <img className="w-full" src="/systemdiagram1.png" alt="systemdiagram1"/>
          
          <h4>嗜好品・健康品 通販会社 情報システム部門</h4>
          <ul>
            <li>関連会社のHPをWordPressで制作</li>
            <li>LINEソーシャルログイン、クーポン機能、商品レビュー機能を別のECサイトへ移植</li>
            <li>法定停電時のオンプレミスサーバー保守</li>
            <li>自社ECサイトのPHPバージョンアップ（5系→7系）、CodeIgniterバージョンアップ（2系→3系）</li>
            <li>Seleniumを用いたE2Eテストの導入</li>
            <li>オンプレミスのDNSサーバーからAWS Route53への移行</li>
            <li>BtoBtoCサイトの画像配信システムをAWS S3とCloudFrontで構築</li>
            <li>自社ECサイト向けREST APIの新規実装とPHPUnit導入</li>
            <li>GMOペイメントゲートウェイを利用したクレジットカード決済に3DS2.0を追加実装</li>
          </ul>
          <img className="w-full" src="/systemdiagram2.png" alt="systemdiagram2"/>

          <h3>仕事でやっていきたいこと</h3>
          <p>
            ソーシャルゲームのプロジェクトではバグ修正を後回しにして売り上げだけを追求するチームにいました。
            カスタマーサポートもやっていたこともあり、エンドユーザーから厳しい意見を毎日頂いていました。<br/>
            通販会社のシステムでは20年前から稼働しているPHP製Webアプリケーションがあり、複雑なコードと仕様に圧倒され、修正や追加開発に疲弊していました。<br/><br/>
            このような経験から、
            <ul>
              <li>自分がユーザーだとしてもお金を払って安心して使用できる</li>
              <li>長期的にメンテナンスしやすい</li>
            </ul>
            システムを提供できるような提案や行動をしたいです。<br/>
          </p>

          <h3>資格</h3>

          <ul>
            <li>IPA ネットワークスペシャリスト試験 (2024/7 合格)</li>
            <li>IPA 応用情報技術者試験 (2023/6 合格)</li>
            <li>IPA 基本情報技術者試験 (2022/11 合格)</li>
            <li>AWS Certified Solutions Architect - Associate (2020/4,2023/4 合格)</li>
            <li>PHP5初級技術者 (2017/5 合格)</li>
            <li>OSS-DB Silver (2015/8 合格)</li>
            <li>LPICレベル1 (2015/7 合格)</li>
          </ul>

          <h3>個人開発</h3>

          <ul>
            <li>
              <Link className="hover:text-gray-500" href="https://godotplayer.com" target="_blank" rel="noopener noreferrer">フリーゲーム投稿サイト GodotPlayer</Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="https://bingo-time-simulator.vercel.app" target="_blank" rel="noopener noreferrer">ビンゴ大会終了時間計算シュミレーター</Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="https://store.steampowered.com/app/1096420/Re_Painter" target="_blank" rel="noopener noreferrer">PCゲーム Re Painter</Link>
            </li>
            <li>
              <Link className="hover:text-gray-500" href="https://unityroom.com/users/3cr10wv7fsuxmag8h594" target="_blank" rel="noopener noreferrer">ブラウザで遊べるミニゲーム集</Link>
            </li>
          </ul>

          <h3>趣味</h3>

          <p>
            自然と触れ合うアウトドアが好きです。
          </p>

          <img className="w-full" src="/yarigatake.jpeg" alt="yarigatake"/>

        </article>

      </div>

      <footer className="mt-12 mb-4 text-center">
        <p>&copy; 2024 coffee-r</p>
      </footer>

    </div>
  );
}
