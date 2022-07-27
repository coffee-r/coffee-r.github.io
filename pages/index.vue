<template>

<div>
	<main class="mt-10 flex flex-col md:flex-row justify-between ">


	<SideMenu />

	<article class="px-4 md:mr-24 md:w-3/4">

	<div class="mb-10">
		<h2 class="text-4xl">About</h2>
		<p class="mt-3">
			こーひーあーるという名前でインターネット上を活動しています。
			釣りや登山などの自然が好きです。心の病気があり人と関わることが苦手です。
			工業大学で材料や化学系を専攻していましたが就活に失敗して気づいたらWEB開発系の会社に入社していました。
			気まぐれで業務外にたまに何かを開発します。
		</p>
	</div>

	<div class="mb-10 ">
		<h2 class="text-4xl">Work</h2>

		<h3 class="mt-3 text-xl">2019.07 ~ 嗜好・健康品 通販会社</h3>
		<p>
			システム開発を行なっている事業部で、LAMP系エンジニアとして携わる。
		</p>
		<ul class="list-disc list-inside">
			<li>関連会社のHPをWordpressで制作</li>
			<li>ソーシャルログイン機能を同社別ECサイトから移植</li>
			<li>クーポン機能を同社別ECサイトから移植</li>
			<li>商品レビュー機能を同社別ECサイトから移植</li>
			<li>法定停電時のオンプレミスサーバーの保守</li>
			<li>自社ECサイトのPHPバージョンアップ 5系→7系</li>
			<li>自社ECサイトのCodeigniterバージョンアップ 2系→3系</li>
			<li>PHPやCodeigniterのバージョンアップのデグレ防止としてE2Eテストを導入(Selenium)</li>
			<li>自社のDNSサーバーで公開しているホストゾーンをAWS Route53に移行</li>
			<li>新規BtoBtoCサイトの画像配信サーバーをAWS S3とCloudFrontで構築</li>
			<li>自社ECサイトのREST APIを新規実装</li>
			<li>自社ECサイトのREST API開発にPHPUNITを導入(conposer入れるところからスタート)</li>
		</ul>

		<h3 class="mt-3 text-xl">2018.07 ~ 2019.06 無職</h3>
		<p>
			個人ゲーム開発に打ち込む
		</p>

		<h3 class="mt-3 text-xl">2015.04 ~ 2018.06 中堅システム開発会社</h3>
		<p>
			モバイルブラウザゲーム事業部の版権ソーシャルゲームを扱うチームで、LAMP系エンジニアとして携わる。
		</p>
		<ul class="list-disc list-inside">
			<li>既存のイベント・キャンペーンの改修における開発</li>
			<li>既存イベント・キャンペーンの運用 不具合時の補填作業など</li>
			<li>MySQLサーバーの負荷軽減 スロークエリや大量発行しているクエリの軽減</li>
			<li>トランザクション未実装のために起こる不整合データの軽減</li>
			<li>たまにゲームプランナー向けCMSの開発</li>
			<li>たまに新規イベント・キャンペーンの開発</li>
			<li>カスタマーサポート業務 ユーザーデータ調査 エンドユーザーへの返信メール作成</li>
			<li>テスター外注管理の補佐</li>
		</ul>
	</div>

	<div class="mb-10">
		<h2 class="text-4xl">Certifications</h2>
		<p>
			<ul class="list-disc list-inside">
			<li>LPICレベル1(2015/7)</li>
			<li>オープンソースデータベース技術者認定資格(OSS-DB) Silver (2015/8)</li>
			<li>PHP5初級技術者 (2017/5)</li>
			<li>AWS Certified Solutions Architect (2020/4)</li>
		</ul>
		</p>
	</div>

	<CustomFooter />
	</article>
</main>
</div>
		

</template>

<script>
export default {
	name: 'IndexPage',
}
</script>
