<template>

<div>
	<main class="mt-10 flex flex-col md:flex-row justify-between ">


	<SideMenu />

	<article class="px-4 md:mr-24 md:w-3/4">
		
		<h2 class="text-4xl">Re Painter</h2>
		<img src="/games/repainter.png" alt="repainter"/>
		<iframe src="https://www.youtube.com/embed/EuoIQ7YWto0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<p>親しみやすい見下ろし視点のスクロールアクションに描いたイラストが必殺技になるシステムを加えた、短編アクションゲームです。</p>
		<p>開発期間 無職1年間 + 会社員のあまり1年間</p>
		<button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
			Steamを見る
		</button>

		<h2 class="text-4xl">Yozora Maker</h2>
		<img src="/games/yozoramaker.jpeg" alt="yozoramaker"/>
		<p>自分で星を作って、星を避け続けるゲームです。</p>
		<p>開発期間 1週間くらい</p>
		<button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
			Unityroomでプレイする
		</button>

		<h2 class="text-4xl">ぱりんぱりん惑星</h2>
		<img src="/games/parinparin.png" alt="parinparin"/>
		<p>クリックで爆弾を仕掛けてぱりんぱりんするタワーディフェンス系ゲームです</p>
		<p>開発期間 1週間くらい</p>
		<button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
			Unityroomでプレイする
		</button>

		<h2 class="text-4xl">その他</h2>

		Unityroomに細々とアップロードしています。
		<button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
			一覧を見る
		</button>
		https://unityroom.com/users/3cr10wv7fsuxmag8h594

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
