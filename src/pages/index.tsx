import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Index() {
	return (
		<main className="flex flex-col md:flex-row justify-between mt-4 md:mt-10 leading-8">
			<Menu />

			<article className="px-4 md:mr-24 md:w-3/4">

				<div className="mb-10">
				<h2 className="font-semibold text-4xl">About</h2>
				<p className="mt-3">
					「こーひーあーる」という名前で活動しています。
					釣りや登山などの自然が好きです。心の病気があり人と関わることが苦手です。
					工業系の大学で材料・化学系を専攻していましたが就職活動に失敗し、気がついたらWEBシステム開発をしている会社に入社していました。
					気まぐれで仕事以外の時間に何かを個人開発します。
				</p>
				</div>

				<div className="mb-10">

				<h2 className="font-semibold text-4xl">Career</h2>
				
				<h3 className="mt-3 text-xl">2015/04 ~ 2018/06 中小Webシステム開発会社</h3>
				<p>
					モバイルブラウザゲーム事業部の版権ソーシャルゲームを扱うチームで、LAMP系エンジニアとして携わる
				</p>

				<h3 className="mt-3 text-xl">2018/07 ~ 2019/06 無職</h3>
				<p>
					Unityを使った個人ゲーム開発に打ち込む
				</p>

				<h3 className="mt-3 text-xl">2019/07 ~ 2022/04 嗜好・健康品 通販会社</h3>
				<p>
					Webシステム開発を行なっている事業部で、LAMP系エンジニアとして携わる
				</p>

				<h3 className="mt-3 text-xl"> 2022/5 ~ 休職</h3>
				<p>
					精神疾患のため療養
				</p>

				</div>

				<div className="mb-10">
				<h2 className="font-semibold text-4xl">Certification</h2>
				<ul className="mt-3 list-disc list-inside">
					<li>LPICレベル1 (2015/7 合格)</li>
					<li>OSS-DB Silver (2015/8 合格)</li>
					<li>PHP5初級技術者 (2017/5 合格)</li>
					<li>AWS Certified Solutions Architect - Associate (2020/4,2023/4 合格)</li>
					<li>基本情報技術者 (2022/11 取得)</li>
				</ul>
				</div>

				<div className="mb-10">

				<h2 className="font-semibold text-4xl">Work history</h2>

				<h3 className="mt-3 text-xl">中小Webシステム開発会社 モバイルブラウザゲーム事業部にてやったこと</h3>
				<ul className="list-disc list-inside">
					<li>既存のイベント・キャンペーンの改修におけるWebシステム開発</li>
					<li>既存イベント・キャンペーンの運用 不具合時の補填作業など</li>
					<li>MySQLサーバーの負荷軽減 スロークエリや大量発行しているクエリの軽減</li>
					<li>排他制御未実装のために起こる不整合データの軽減</li>
					<li>ゲームプランナー向けCMSのWebシステム追加開発</li>
					<li>新規イベント・キャンペーンのWebシステム開発</li>
					<li>カスタマーサポート業務 ユーザーデータ調査からエンドユーザーへの返信メール作成まで</li>
					<li>テスター外注管理の補佐</li>
				</ul>
				
				<h3 className="mt-3 text-xl">嗜好・健康品 通販会社 Webシステム開発事業部にてやったこと</h3>
				<ul className="list-disc list-inside">
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
					<li>自社ECサイトのREST APIを新規実装 (頓挫気味)</li>
					<li>自社ECサイトのREST API開発にPHPUnitを導入</li>
				</ul>
				
				</div>

				<Footer />

			</article>
		</main>
	)
}
