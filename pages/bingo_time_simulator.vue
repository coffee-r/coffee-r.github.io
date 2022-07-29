<template>

<div>
	<main class="flex flex-col md:flex-row justify-between mt-4 md:mt-10 leading-8">

		<SideMenu class="md:w-1/4" />

		<article class="px-4 md:mr-24 md:w-3/4">

			<h2 class="font-semibold text-4xl">ビンゴ計算シュミレーター</h2>
			<p>
				パーティーや宴会などの催しで、ビンゴをやるときにかかる時間をシュミレーションします。
			</p>

			<form class="mt-8">
				<div class="mb-4 md:mb-6">
					<label for="personCount" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">参加人数</label>
					<input type="number" id="personCount" v-model="personCount" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
				</div>
				<div class="mb-4 md:mb-6">
					<label for="winningItemCount" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">景品数</label>
					<input type="number" id="winningItemCount" v-model="winningItemCount" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
				</div>
				<div class="mb-4 md:mb-6">
					<label for="lotteryTime" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">1回の番号抽選にかける秒数</label>
					<input type="number" id="lotteryTime" v-model="lotteryTime" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
				</div>
				<div class="mb-4 md:mb-6">
					<label for="winningTime" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">1回の当選にかける秒数</label>
					<input type="number" id="winningTime" v-model="winningTime" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
				</div>
				<div class="text-center">
					<button type="button" v-on:click="simulate" class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
						計算する
					</button>
				</div>
			</form>

			<section id="simulation-result">
				{{simulationMessage}}
			</section>

			<h2 class="text-xl mt-12">細かいこと</h2>

			<ul class="list-disc list-inside">
				<li>100回開催を試した時の最短・最長の時間を計算</li>
				<li>5×5マスのビンゴを想定</li>
				<li>参加者1人に最大1個の景品を想定</li>
			</ul>

			<CustomFooter />
		</article>
	</main>
</div>
		

</template>

<script>
 import {
 	BingoSheetFactory,
 	LotteryBingoNumberStack,
 	BingoTournament,
 	BingoTournamentCollection
 } from '~/plugins/bingo.js';

export default {
	data(){
		return {
			personCount: 100,
			winningItemCount: 20,
			lotteryTime: 30,
			winningTime: 60,
			simulationMessage: "",
		}
  },
  watch: {
	personCount(input) {
		this.personCount = this.personCountLimit(input);
	},
	winningItemCount(input) {
		this.winningItemCount = this.pwinningItemCountLimit(input);
	},
	lotteryTime(input) {
		this.lotteryTime = this.timeLimit(input);
	},
	winningTime(input) {
		this.winningTime = this.timeLimit(input);
	},

  },
  methods: {
	personCountLimit(input){
		if(input < 1) {return 1;}
		if(input > 999) {return 999;}
		if(input < this.winningItemCount) {return this.winningItemCount;}
		return input;
	},
	pwinningItemCountLimit(input){
		if(input < 1) {return 1;}
		if(input > 999) {return 999;}
		if(input > this.personCount) {return this.personCount;}
		return input;
	},
	timeLimit(input){
		if(input < 1) {return 1;}
		return input;
	},
	simulate(){
		try{
			let bingoTournamentCollection = new BingoTournamentCollection([]);
			for(let i=0; i<100; i++){
				bingoTournamentCollection = bingoTournamentCollection.add(new BingoTournament(BingoSheetFactory, new LotteryBingoNumberStack(), this.personCount, this.winningItemCount, this.lotteryTime, this.winningTime));
			}
			const result = bingoTournamentCollection.calculatePlayTime();
			this.simulationMessage = "ビンゴ終了に " + Math.floor(result.minEndTimeSeconds / 60)+ " ~ " + Math.floor(result.maxEndTimeSeconds / 60) +"分ほどかかります。";

		}catch (error){
			this.simulationMessage = error;
		}
    },
  },
}

</script>
