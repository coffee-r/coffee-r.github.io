/**
 * 配列シャッフル関数
 */
export const shuffleArray =  function(array) {
	for(let i = array.length - 1; i > 0; i--){
		const r = Math.floor(Math.random() * (i + 1));
		const tmp = array[i];
		array[i] = array[r];
		array[r] = tmp;
    }
    return array;
}

/**
 * ビンゴのマス目を表現するクラス
 */
export class BingoSquare{
    constructor(number, isOpen){
        if (typeof number !== 'number') {throw new TypeError('type error');}
        if (typeof isOpen !== 'boolean') {throw new TypeError('type error');}
        if (number < 1) {throw new RangeError('number between 1 ~ 75');}
        if (number > 75) {throw new RangeError('number between 1 ~ 75');}

		this.number = number;
        this.isOpen = isOpen;
	}

    open(){
        return new BingoSquare(this.number, true);
    }
}

/**
 * ビンゴシートのファクトリ
 * ビンゴシートの番号の割り振りには列ごとに規則がある
 * 1列目 1~15
 * 2列目 16~30
 * 3列目 31~45
 * 4列目 46~60
 * 5列目 61~75
 */
export const BingoSheetFactory = function(){

    const row1bingoSquares = shuffleArray([...Array(15)].map((_, i) => new BingoSquare(i + 1, false))).slice(0, 5);
    const row2bingoSquares = shuffleArray([...Array(15)].map((_, i) => new BingoSquare(i + 16, false))).slice(0, 5);
    const row3bingoSquares = shuffleArray([...Array(15)].map((_, i) => new BingoSquare(i + 31, false))).slice(0, 5);
    const row4bingoSquares = shuffleArray([...Array(15)].map((_, i) => new BingoSquare(i + 46, false))).slice(0, 5);
    const row5bingoSquares = shuffleArray([...Array(15)].map((_, i) => new BingoSquare(i + 61, false))).slice(0, 5);

    const bingoSquares = [];
    bingoSquares[0] = row1bingoSquares;
    bingoSquares[1] = row2bingoSquares;
    bingoSquares[2] = row3bingoSquares;
    bingoSquares[3] = row4bingoSquares;
    bingoSquares[4] = row5bingoSquares;
    
    return new BingoSheet(bingoSquares);
}

/**
 * ビンゴシートのテスト用ファクトリ
 */
export const BingoSheetFactoryForTest =  function(){

    const row1bingoSquares = [...Array(15)].map((_, i) => new BingoSquare(i + 1, false)).slice(0, 5);
    const row2bingoSquares = [...Array(15)].map((_, i) => new BingoSquare(i + 16, false)).slice(0, 5);
    const row3bingoSquares = [...Array(15)].map((_, i) => new BingoSquare(i + 31, false)).slice(0, 5);
    const row4bingoSquares = [...Array(15)].map((_, i) => new BingoSquare(i + 46, false)).slice(0, 5);
    const row5bingoSquares = [...Array(15)].map((_, i) => new BingoSquare(i + 61, false)).slice(0, 5);

    const bingoSquares = [];
    bingoSquares[0] = row1bingoSquares;
    bingoSquares[1] = row2bingoSquares;
    bingoSquares[2] = row3bingoSquares;
    bingoSquares[3] = row4bingoSquares;
    bingoSquares[4] = row5bingoSquares;
    
    return new BingoSheet(bingoSquares);
}

/**
 * 抽選ビンゴ番号のキュークラス
 */
export class LotteryBingoNumberStack{
	constructor(){
		this.queue = shuffleArray([...Array(75)].map((_, i) => i + 1))
	}

	dequeue(){
        if(this.queue.length <= 0) {throw new Error('empty queue');}        
		return this.queue.shift();
	}

	count(){
		return this.queue.length;
	}
}

/**
 * テスト用の抽選ビンゴ番号のキュークラス
 */
export class LotteryBingoNumberStackForTest{
	constructor(){
		this.queue = [...Array(75)].map((_, i) => i + 1)
	}

	dequeue(){
        if(this.queue.length <= 0) {throw new Error('empty queue');}        
		return this.queue.shift();
	}

	count(){
		return this.queue.length;
	}
}


/**
 * ビンゴシート
 */
export class BingoSheet{
	constructor(bingoSquares){
        this.bingoSquares = bingoSquares;
		this.bingoSquares[2][2] = this.bingoSquares[2][2].open();
	}

	open(bingoNumber){
        for(let line=0; line<5; line++){
            for(let row=0; row<5; row++){
                if(this.bingoSquares[line][row].number === bingoNumber){
                    this.bingoSquares[line][row] =this.bingoSquares[line][row].open();
                }
            } 
        }     
	}

	isBingo(){
		if (this.bingoSquares[0][0].isOpen && this.bingoSquares[1][1].isOpen && this.bingoSquares[2][2].isOpen && this.bingoSquares[3][3].isOpen && this.bingoSquares[4][4].isOpen){
			return true;
		}

		if (this.bingoSquares[0][4].isOpen && this.bingoSquares[1][3].isOpen && this.bingoSquares[2][2].isOpen && this.bingoSquares[3][1].isOpen && this.bingoSquares[4][0].isOpen){
			return true;
		}

		// 縦横斜めを判定
		for (let i = 0; i < this.bingoSquares.length; i++)
		{
			if(this.bingoSquares[i][0].isOpen && this.bingoSquares[i][1].isOpen && this.bingoSquares[i][2].isOpen && this.bingoSquares[i][3].isOpen && this.bingoSquares[i][4].isOpen){
				return true;
			}

			if (this.bingoSquares[0][i].isOpen && this.bingoSquares[1][i].isOpen && this.bingoSquares[2][i].isOpen && this.bingoSquares[3][i].isOpen && this.bingoSquares[4][i].isOpen){
				return true;
			}
		}
		return false;
	}
}

/**
 * ビンゴ大会クラス
 */
export class BingoTournament{
    /**
     * @param {*} bingoSheetFactory ビンゴシートのファクトリ
     * @param {*} personCount 参加人数
     * @param {*} winningItemCount 当選商品数
     * @param {*} lotteryTime 1回の抽選にかける時間
     * @param {*} winningTime 1回の当選にかける時間
     */
	constructor(bingoSheetFactory, lotteryBingoNumberStack, personCount, winningItemCount, lotteryTime, winningTime){

        this.lotteryBingoNumberStack = lotteryBingoNumberStack;
		this.winningItemCount = winningItemCount;
		this.lotteryTime = lotteryTime;
		this.winningTime = winningTime;

		if(personCount < winningItemCount){
			throw new Error("当選商品の個数が参加者を上回っています。");
        }

		// ビンゴシート
		const bingoSheets = [];

		// ビンゴシート配布
		for(let i = 0; i < personCount; i++){
			bingoSheets.push(bingoSheetFactory());
		}

		// ビンゴに穴を空けていく
		let isEnd = false;
		while(isEnd === false){
			for(let queueCount = 0; queueCount < 75; queueCount++){

				// 番号取り出し
				const lotteryBingoNumber = this.lotteryBingoNumberStack.dequeue();

				// 全員のピースを開ける
				for(let c = 0; c < personCount; c++){
					bingoSheets[c].open(lotteryBingoNumber);
				}

				// ビンゴ数を取得
				let bingoCount = 0;
				for(let c = 0; c < personCount; c++){
					if(bingoSheets[c].isBingo() === true){
						bingoCount++;
					}
				}

				// 一定数当選したら終了
				if(bingoCount >= winningItemCount){
					isEnd = true;
					break;
				}
			}
		}
	}

	// 終了秒数を取得します
	getEndSeconds(){
		return this.winningItemCount * this.winningTime + (75 - this.lotteryBingoNumberStack.count()) * this.lotteryTime;
	}
}

/**
 * ビンゴ大会のコレクションクラス
 */
export class BingoTournamentCollection{
    constructor(bingoTournaments){
        if (typeof bingoTournaments !== 'object') {throw new TypeError('type error');}
        this.bingoTournaments = bingoTournaments;
    }

    add(bingoTournament){
        const result = this.bingoTournaments.concat(bingoTournament);
        return new BingoTournamentCollection(result);
    }

    calculatePlayTime(){
         // 返却値の初期化
         let averageEndTimeSeconds = 0;
         let minEndTimeSeconds = 99999999999;
         let maxEndTimeSeconds = 0;
 
         // 平均値計算用のビンゴ終了時間合計
         let totalEndTimeSecond = 0;

         // 開催回数だけループし、終了時間をシュミレーションする
         for(let i = 0; i < this.bingoTournaments.length; i++){

            if(minEndTimeSeconds > this.bingoTournaments[i].getEndSeconds()){
                minEndTimeSeconds = this.bingoTournaments[i].getEndSeconds();
            }

             if(maxEndTimeSeconds < this.bingoTournaments[i].getEndSeconds()){
                 maxEndTimeSeconds = this.bingoTournaments[i].getEndSeconds();
             }
 
             totalEndTimeSecond += this.bingoTournaments[i].getEndSeconds();            
         }
 
         averageEndTimeSeconds = Math.round(totalEndTimeSecond / this.bingoTournaments.length);
 
         return {
             averageEndTimeSeconds,
             minEndTimeSeconds,
             maxEndTimeSeconds,
         }
    }
}