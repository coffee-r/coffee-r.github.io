<template>

<div>
	<main class="flex flex-col md:flex-row justify-between mt-4 md:mt-10 leading-8">

		<SideMenu class="md:w-1/4" />

		<article class="px-4 md:mr-24 md:w-3/4">

			<h2 class="font-semibold text-4xl">ビンゴ大会終了時間計算シュミレーター</h2>
			<p>
				パーティーや宴会などの催しで、ビンゴをやるときにかかる時間をシュミレーションします。
			</p>

			<form class="mt-8">
				<div class="mb-4 md:mb-6">
					<label for="personCount" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">参加人数</label>
					<select id="personCount" v-model="personCount" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
						<option v-for="(value, key) in 500" :key="key">{{ value }}</option>
					</select>
				</div>
				<div class="mb-4 md:mb-6">
					<label for="winningItemCount" class="block font-medium text-gray-900 dark:text-gray-300">景品数</label>
					<label for="winningItemCount" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">景品数は参加人数以下にしてください</label>
					<select id="winningItemCount" v-model="winningItemCount" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
						<option v-for="(value, key) in 500" :key="key">{{ value }}</option>
					</select>
				</div>
				<div class="mb-4 md:mb-6">
					<label for="lotteryTime" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">1回の番号抽選にかける秒数</label>
					<select id="lotteryTime" v-model="lotteryTime" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
						<option v-for="(value, key) in 120" :key="key">{{ value }}</option>
					</select>
				</div>
				<div class="mb-4 md:mb-6">
					<label for="winningTime" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">1回の当選にかける秒数</label>
					<select id="winningTime" v-model="winningTime" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
						<option v-for="(value, key) in 120" :key="key">{{ value }}</option>
					</select>
				</div>
				<div class="text-center">
					<button type="button" v-on:click="simulate" class="bg-black hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full">
						計算する
					</button>
				</div>
			</form>

			

			<section id="simulation-result" v-show="isDisplaySimulationMessage" class="mt-2">
				<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
					<strong class="font-bold">{{simulationMessage}}</strong>
				</div>
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
			isDisplaySimulationMessage: false
		}
  },
  computed: {
    personCountAndWinningItemCount() {
      return [this.$data.personCount, this.$data.winningItemCount];
    }
  },
  watch: {
	personCountAndWinningItemCount(value, oldValue) {
		this.personCount = this.personCountLimit(value[0]);
		this.winningItemCount = this.winningItemCountLimit(value[1]);

		// 賞品数を変えた時
		if(value[1] !== oldValue[1]){
			if(this.personCount < this.winningItemCount){
				this.personCount = this.winningItemCount;
			}
		}

		// 参加人数を変えた時
		if(value[0] !== oldValue[0]){
			if(this.winningItemCount > this.personCount){
				this.winningItemCount = this.personCount;
			}
		}
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
		if(input > 500) {return 500;}
		return input;
	},
	winningItemCountLimit(input){
		if(input < 1) {return 1;}
		if(input > 500) {return 500;}
		return input;
	},
	timeLimit(input){
		if(input < 1) {return 1;}
		return input;
	},
	simulate(){
		let bingoTournamentCollection = new BingoTournamentCollection([]);
		for(let i=0; i<100; i++){
			bingoTournamentCollection = bingoTournamentCollection.add(new BingoTournament(BingoSheetFactory, new LotteryBingoNumberStack(), this.personCount, this.winningItemCount, this.lotteryTime, this.winningTime));
		}
		const result = bingoTournamentCollection.calculatePlayTime();
		this.simulationMessage = "所要時間 " + Math.floor(result.minEndTimeSeconds / 60)+ " ~ " + Math.floor(result.maxEndTimeSeconds / 60) +"分 前後";
		this.isDisplaySimulationMessage = true;
    },
  },
}

</script>
