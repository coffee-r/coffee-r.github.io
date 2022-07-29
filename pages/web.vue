<template>

<div>
	<main class="flex flex-col md:flex-row justify-between mt-4 md:mt-10 leading-8">

	<SideMenu class="md:w-1/4" />

	<article class="px-4 md:mr-24 md:w-3/4">

		<div class="mb-10">
			<h2 class="font-semibold text-4xl">coffee-r.github.io</h2>
			<p>今見ているこのサイト。Vue.jsとTailwind CSSの学習を兼ねて作成。</p>
		</div>

		<div class="mb-10">

			<h2 class="font-semibold text-4xl">ビンゴ大会終了時間計算シュミレーター</h2>
			<p>パーティーや宴会などでタイムスケジュールを立てる際にビンゴの所要見込み時間をシュミレーションするもの。宴会の主催者が時間を予測するのに困っていたの作ってみた。</p>

			<div class="text-center">
				<a href="/bingo_time_simulator" target="_blank" >
					<button class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
						ブラウザで見る
					</button>
				</a>
			</div>
		</div>

		<CustomFooter />
	</article>
</main>
</div>
		

</template>

<script>
export default {
	name: 'WebPage',
}
</script>
