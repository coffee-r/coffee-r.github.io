import Head from "next/head"
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import LinkButton from "@/components/LinkButton";

export default function Index() {
  return (
	<>
		<Head>
			<title>こーひーあーる</title>
			<meta name="description" content="Web&Game開発者こーひーあーるのポートフォリオサイト" />
		</Head>

		<main className="flex flex-col md:flex-row justify-between mt-4 md:mt-10 leading-8">

		<Menu />

			<article className="px-4 md:mr-24 md:w-3/4">

				<div className="mb-10">
					<h2 className="font-semibold text-4xl">Web App</h2>
				</div>

				<div className="mb-10">
					<h3 className="font-semibold text-2xl">ビンゴ大会終了時間計算シュミレーター</h3>
					<p>パーティーや宴会などでタイムスケジュールを立てる際にビンゴの所要見込み時間をシュミレーションするもの。宴会の主催者が時間を予測するのに困っていたの作ってみた。</p>
					<LinkButton url="https://bingo-time-simulator.vercel.app" text="ブラウザで見る" />
				</div>

				<div className="mb-10">
					<h3 className="font-semibold text-2xl">あにまるにゃ〜ん</h3>
					<p>動物の言葉でしか呟けないSNS風Webアプリ。Laravelの学習を兼ねて作成。</p>
					<LinkButton url="https://animal-meow.com" text="ブラウザで見る" />
				</div>

				<div className="mt-16 mb-10">
					<h2 className="font-semibold text-4xl">Game (With Unity)</h2>
				</div>

				<div className="mb-10">
					<h2 className="font-semibold text-2xl">Re Painter</h2>
					<iframe className="w-full" style={{aspectRatio: 16/9}} src="https://www.youtube.com/embed/EuoIQ7YWto0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>			
					<p>
						親しみやすい見下ろし視点のスクロールアクションに描いたイラストが必殺技になるシステムを加えた、短編アクションゲーム。
						開発に会社員として勤めながらの1年間と無職の1年間の計2年間かけて作りました。
					</p>
					<LinkButton url="https://store.steampowered.com/app/1096420/Re_Painter/?l=japanese" text="Steamのストアサイトを見る" />
				</div>

				<div className="mb-10">
					<h2 className="font-semibold text-2xl">Yozora Maker</h2>
					<img src="/games/yozoramaker.jpeg" alt="yozoramaker"/>
					<p>ゲームジャムに参加して1週間くらいで作った、自分で星を作って星を避け続けるゲームです。</p>
					<LinkButton url="https://unityroom.com/games/coffee-r-202002" text="PCブラウザでプレイする" />
				</div>

				<div className="mb-10">
					<h2 className="font-semibold text-2xl">ぱりんぱりん惑星</h2>
					<img src="/games/parinparin.jpeg" alt="parinparin"/>
					<p>ゲームジャムに参加して1週間くらいで作った、クリックで爆弾を仕掛けてぱりんぱりんするタワーディフェンス系ゲームです。</p>
					<LinkButton url="https://unityroom.com/games/parinparin" text="PCブラウザでプレイする" />
				</div>

				<div className="mb-10">
					<h2 className="font-semibold text-2xl">その他</h2>
					<p>フリーゲーム投稿サイト unityroomにいくつか投稿をしています。</p>
					<LinkButton url="https://unityroom.com/users/3cr10wv7fsuxmag8h594" text="投稿ゲーム一覧を見る" />
				</div>

				<Footer />

			</article>

		</main>
	</>
  )
}
