<template>

<div>
	<main class="flex flex-col md:flex-row justify-between mt-4 md:mt-10 leading-8">

	<SideMenu class="md:w-1/4" />

	<article class="px-4 md:mr-24 md:w-3/4">

		<div class="mb-10">
			<h2 class="font-semibold text-4xl">Re Painter</h2>
			<iframe class="w-full" style="aspect-ratio: 16/9" src="https://www.youtube.com/embed/EuoIQ7YWto0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>			
			<p>
				親しみやすい見下ろし視点のスクロールアクションに描いたイラストが必殺技になるシステムを加えた、短編アクションゲーム。
				開発に会社員として勤めながらの1年間と無職の1年間の計2年間かかってしまいました。
			</p>
			<div class="text-center">
				<a href="https://store.steampowered.com/app/1096420/Re_Painter/?l=japanese" target="_blank" >
					<button class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
						Steamのストアサイトを見る
					</button>
				</a>
			</div>
		</div>

		<div class="mb-10">
			<h2 class="font-semibold text-4xl">Yozora Maker</h2>
			<img src="/games/yozoramaker.jpeg" alt="yozoramaker"/>
			<p>ゲームジャムに参加して1週間くらいで作った、自分で星を作って星を避け続けるゲームです。</p>
			<div class="text-center">
				<a href="https://unityroom.com/games/coffee-r-202002" target="_blank" >
					<button class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
						unityroomでプレイする
					</button>
				</a>
			</div>
		</div>

		<div class="mb-10">

			<h2 class="font-semibold text-4xl">ぱりんぱりん惑星</h2>
			<img src="/games/parinparin.jpeg" alt="parinparin"/>
			<p>ゲームジャムに参加して1週間くらいで作った、クリックで爆弾を仕掛けてぱりんぱりんするタワーディフェンス系ゲームです。</p>
			<div class="text-center">
				<a href="https://unityroom.com/users/3cr10wv7fsuxmag8h594" target="_blank" >
					<button class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
						unityroomでプレイする
					</button>
				</a>
			</div>
		</div>

		<div class="mb-10">

			<h2 class="font-semibold text-4xl">その他</h2>
			<p>フリーゲーム投稿サイト unityroomにいくつか投稿をしています。</p>
			<div class="text-center">
				<a href="https://unityroom.com/users/3cr10wv7fsuxmag8h594" target="_blank" >
					<button class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
						投稿ゲーム一覧を見る
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
	name: 'GamePage',
}
</script>
