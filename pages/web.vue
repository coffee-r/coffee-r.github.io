<template>

<div>
	<main class="mt-10 flex flex-col md:flex-row justify-between ">


	<SideMenu />

	<article class="px-4 md:mr-24 md:w-3/4">

		<div class="mb-10">
			<h2 class="text-4xl">coffee-r.github.io</h2>
			<p>今見ているこのサイト。Tailwind CSSの学習を兼ねて作成。</p>
		</div>

		<div class="mb-10">

			<h2 class="text-4xl">ビンゴ計算シュミレーター</h2>
			<p>パーティーや宴会などでタイムスケジュールを立てる際にビンゴの所要見込み時間をシュミレーションするもの。宴会の主催者が時間を予測するのに困っていたのを見て試しに作ってみた。</p>
			
			<div class="text-center">
			<button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
				所要見込み時間を計算する
			</button>
			</div>
			https://unityroom.com/users/3cr10wv7fsuxmag8h594
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
