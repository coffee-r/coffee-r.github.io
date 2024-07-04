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
              <li className="hover:text-gray-500 mb-1"><Link href="https://twitter.com/plus_marumaru" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
              <li className="hover:text-gray-500 mb-1"><Link href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">Github</Link></li>
              <li className="hover:text-gray-500 mb-1"><Link href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">Zenn</Link></li>
            </ul>
          </nav>
        </aside>

        <div className="flex justify-center mb-8 md:hidden">
          <img className="w-24 h-24" src="/avator.jpeg" alt="avator" />
          <div className="px-2 flex flex-col justify-center leading-normal">
            <h5 className="font-bold text-xl">こーひーあーる</h5>
            <p className="text-xl">バックエンドエンジニア</p>
            <ul className="mt-1 flex justify-between">
              <li className="hover:text-gray-500"><Link href="https://twitter.com/plus_marumaru" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
              <li className="hover:text-gray-500"><Link href="https://github.com/coffee-r" target="_blank" rel="noopener noreferrer">Github</Link></li>
              <li className="hover:text-gray-500"><Link href="https://zenn.dev/coffee_r" target="_blank" rel="noopener noreferrer">Zenn</Link></li>
            </ul>
          </div>

        </div>
        
        <article className="prose mx-auto">

          <h3>プロフィール</h3>

          <p>
            工業系の大学で材料・化学系を専攻していましたが就職活動に失敗し、気がついたらWebシステム開発をしている会社に入社していました。
            気まぐれで仕事以外の時間に何かを個人開発します。
          </p>

          <h3>キャリア</h3>

          <ul className="timeline timeline-vertical timeline-compact not-prose">
            <li>
              <div className="timeline-start">2015/4 ~ 2018/6 Webシステム開発会社</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">モバイルブラウザゲーム事業部の版権ソーシャルゲームを扱うチームで、LAMP系エンジニアとして携わる</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2018/7 ~ 2019/6 無職</div>
              <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">Unityを使った個人ゲーム開発に打ち込む</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2019/7 ~ 2022/4 嗜好品・健康品 通販会社</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">情報システム部門でWebシステムのバックエンドエンジニアとして携わる</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2022/5 ~ 2023/8 休職</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">精神疾患のため療養</div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div className="timeline-start">2023/9 ~ 嗜好品・健康品 通販会社</div>
              <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><circle cx="10" cy="10" r="6" fill="#474e59"></circle></svg>
              </div>
              <div className="timeline-end pb-6">情報システム部門でWebシステムのバックエンドエンジニアとして復帰</div>
            </li>
          </ul>

          <h3>資格</h3>

          <ul>
            <li>LPICレベル1 (2015/7 合格)</li>
            <li>OSS-DB Silver (2015/8 合格)</li>
            <li>PHP5初級技術者 (2017/5 合格)</li>
            <li>AWS Certified Solutions Architect - Associate (2020/4,2023/4 合格)</li>
            <li>基本情報技術者 (2022/11 取得)</li>
            <li>応用情報技術者 (2023/6 取得)</li>
            <li>ネットワークスペシャリスト (2024/7 取得)</li>
          </ul>

          <h3>仕事でやったこと</h3>

          <h4>Webシステム開発会社 モバイルブラウザゲーム事業部にてやったこと</h4>
          <ul>
            <li>既存のイベント・キャンペーンの改修におけるWebシステム保守</li>
            <li>既存イベント・キャンペーンの運用 不具合時の補填作業など</li>
            <li>MySQLサーバーの負荷軽減 スロークエリや大量発行しているクエリの軽減</li>
            <li>排他制御未実装のために起こる不整合データの軽減</li>
            <li>ゲームプランナー向けCMSのWebシステム開発</li>
            <li>新規イベント・キャンペーンのWebシステム開発</li>
            <li>カスタマーサポート業務 ユーザーデータ調査からエンドユーザーへの返信メール作成まで</li>
            <li>テスター外注管理の補佐</li>
          </ul>
          
          <h4>嗜好品・健康品 通販会社 情報システム部門にてやったこと</h4>
          <ul>
            <li>関連会社のHPをWordPressで制作</li>
            <li>ソーシャルログイン機能を同社別ECサイトから新規ECサイトに移植</li>
            <li>クーポン機能を同社別ECサイトから新規ECサイトに移植</li>
            <li>商品レビュー機能を同社別ECサイトから新規ECサイトに移植</li>
            <li>法定停電時のオンプレミスサーバーの保守</li>
            <li>自社ECサイトのPHPバージョンアップ 5系→7系</li>
            <li>自社ECサイトのCodeIgniterバージョンアップ 2系→3系</li>
            <li>自社ECサイトにSeleniumを使ったE2Eテストを導入</li>
            <li>オンプレミスのDNSサーバーで公開しているホストゾーンをAWS Route53に移行</li>
            <li>新規BtoBtoCサイトの画像配信システムをAWS S3とCloudFrontで構築</li>
            <li>自社ECサイト向けREST APIを新規実装</li>
            <li>自社ECサイト向けREST API開発にPHPUnitを導入</li>
            <li>自社ECサイトにGMOペイメントゲートウェイを使って実装されているクレジットカード決済に3DS2.0を追加実装</li>
          </ul>

          <h3>個人開発</h3>

          <ul>
            <li>
              フリーゲーム投稿サイト GodotPlayer<br/>
              <Link href="https://godotplayer.com" target="_blank" rel="noopener noreferrer">https://godotplayer.com</Link>
            </li>
            <li>
              ビンゴ大会終了時間計算シュミレーター<br/>
              <Link href="https://bingo-time-simulator.vercel.app" target="_blank" rel="noopener noreferrer">https://bingo-time-simulator.vercel.app</Link>
            </li>
            <li>
              Re Painter<br/>
              <Link href="https://store.steampowered.com/app/1096420/Re_Painter" target="_blank" rel="noopener noreferrer">https://store.steampowered.com/app/1096420/Re_Painter</Link>
            </li>
            <li>
              ブラウザで遊べるミニゲーム集<br/>
              <Link href="https://unityroom.com/users/3cr10wv7fsuxmag8h594" target="_blank" rel="noopener noreferrer">https://unityroom.com/users/3cr10wv7fsuxmag8h594</Link>
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
