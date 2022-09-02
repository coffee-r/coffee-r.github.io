<template>

	<main class="flex flex-col md:flex-row justify-between mt-4 md:mt-10 leading-8">

		<SideMenu class="md:w-1/4" />

		<article class="px-4 md:mr-24 md:w-3/4">

			<div class="mb-10">
				<h2 class="font-semibold text-4xl">あにまるにゃ〜ん</h2>
				<p>動物の言葉でしか呟けないSNS風Webアプリ。Laravelの学習を兼ねて作成。</p>

				<div class="text-center lg:text-left">
					<a href="https://animal-meow.com" target="_blank" >
						<button class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
							ブラウザで見る
						</button>
					</a>
				</div>
			</div>

			<div class="mb-10">

				<h2 class="font-semibold text-4xl">ビンゴ大会終了時間計算シュミレーター</h2>
				<p>パーティーや宴会などでタイムスケジュールを立てる際にビンゴの所要見込み時間をシュミレーションするもの。宴会の主催者が時間を予測するのに困っていたの作ってみた。</p>

				<div class="text-center lg:text-left">
					<a href="https://bingo-time-simulator.vercel.app" target="_blank" >
						<button class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
							ブラウザで見る
						</button>
					</a>
				</div>
			</div>

			<div class="mb-10">
				<h2 class="font-semibold text-4xl">coffee-r.github.io</h2>
				<p>今見ているこのサイト。Vue.jsとTailwind CSSの学習を兼ねて作成。</p>
			</div>

			<CustomFooter />
		</article>
	</main>

</template>

<script>
export default {
	name: 'WebPage',
}
</script>
