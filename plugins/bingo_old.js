// 配列シャッフル
function shuffle(array) {
	for(var i = array.length - 1; i > 0; i--){
		var r = Math.floor(Math.random() * (i + 1));
		var tmp = array[i];
		array[i] = array[r];
		array[r] = tmp;
	}
}

// 最後の要素を取得する拡張関数
Array.prototype.getLastVal = function (){
	return this[this.length -1];
}

function padZero(v) {
	if (v < 10) {
		return "0" + v;
	} else {
		return v;
	}
}

// 時間変換
function toHms(t) {
	var hms = "";
	var h = t / 3600 | 0;
	var m = t % 3600 / 60 | 0;
	var s = t % 60;

	if (h != 0) {
		hms = h + "時間" + padZero(m) + "分" + padZero(s) + "秒";
	} else if (m != 0) {
		hms = m + "分" + padZero(s) + "秒";
	} else {
		hms = s + "秒";
	}

	return hms;

	function padZero(v) {
		if (v < 10) {
			return "0" + v;
		} else {
			return v;
		}
	}
}

// 1マスの状態
class Piece{
	constructor(number){
		this.number = number;
		this.isOpen = false;
	}
}


// ビンゴの1縦に入る数字
class RowNumberQueue {
	constructor(countRow) {
		if(countRow < 0 || countRow > 4){
			throw new Error("ビンゴ列番号が想定外の値です" . countRow);
		}

		this.queue = [];

		// 下限番号を取得
		// 1,16,31,46,61
		var lower = 1 + (countRow * 15)

		// 上限番号を取得
		// 15,30,45,60,75
		var upper = 15 + (countRow * 15);

		// 下限〜上限までの番号を配列に入れる
		for(var i = lower; i <= upper; i++){
			this.queue.push(i);
		}

		// 配列をシャッフルする
		shuffle(this.queue);
	}
	
	Dequeue(){
		// 末尾を取得
		var last = this.queue.getLastVal();

		// 末尾を削除
		this.queue.pop();

		// 末尾の値を返却
		return last;
	}
}

// 当選番号キュー
class WinningNumberQueue{

	constructor(){
		this.queue = [];

		for(var i = 1; i <= 75; i++){
			this.queue.push(i);
		}

		shuffle(this.queue);
	}

	Dequeue(){
		// 末尾を取得
		var last = this.queue.getLastVal();

		// 末尾を削除
		this.queue.pop();

		// 末尾の値を返却
		return last;
	}

	Count(){
		return this.queue.length;
	}
}

// ビンゴシート
class BingoSheet{
	constructor(){

		this.sheet = [];
		for (var row = 0; row < 5;row++){

			var pieceList = [];
			var rowNum = new RowNumberQueue(row);

			for(var line = 0; line < 5; line++){
				var pieceObject = new Piece(rowNum.Dequeue());
				pieceList.push(pieceObject);
			}

			this.sheet.push(pieceList);
		}

		// 真ん中に穴を開ける。
		this.sheet[2][2].isOpen = true;
	}

	OpenPiece(number){
		for(var row = 0; row < this.sheet.length; row++){
			for(var line = 0; line < this.sheet.length; line++){
				if(this.sheet[row][line].number == number){
					this.sheet[row][line].isOpen = true;
                }
			}
		}       
	}

	IsBingo(){

		if (this.sheet[0][0].isOpen && this.sheet[1][1].isOpen && this.sheet[2][2].isOpen && this.sheet[3][3].isOpen && this.sheet[4][4].isOpen){
			return true;
		}

		if (this.sheet[0][4].isOpen && this.sheet[1][3].isOpen && this.sheet[2][2].isOpen && this.sheet[3][1].isOpen && this.sheet[4][0].isOpen){
			return true;
		}

		//縦横斜めを判定
		for (var i = 0; i < this.sheet.length; i++)
		{
			if(this.sheet[i][0].isOpen && this.sheet[i][1].isOpen && this.sheet[i][2].isOpen && this.sheet[i][3].isOpen && this.sheet[i][4].isOpen){
				return true;
			}

			if (this.sheet[0][i].isOpen && this.sheet[1][i].isOpen && this.sheet[2][i].isOpen && this.sheet[3][i].isOpen && this.sheet[4][i].isOpen){
				return true;
			}
		}
		return false;
	}

	WriteLog(){
		console.log("ビンゴ状態");
		for(var i = 0; i < 5; i++){
			var line = "";
			for(var j = 0; j < 5; j++){
				if(this.sheet[j][i].isOpen){
					line += "◾◾" + " ";
				}else if(this.sheet[j][i].number < 10){
					line += "0" + this.sheet[j][i].number + " ";
				}else{
					line += this.sheet[j][i].number + " ";
				}
			}
			console.log(line);
		}
	}
}

class BingoManager{
	
	// playerCount : 参加人数
	// winningItemCount : 当選商品数
	// lotteryTime : 1回の抽選にかける時間
	// winningTime : 1回の当選にかける時間
	constructor(playerCount, winningItemCount, lotteryTime, winningTime){

		this.winningItemCount = winningItemCount;
		this.lotteryTime = lotteryTime;
		this.winningTime = winningTime;

		if(playerCount < winningItemCount){
			throw new Error("商品の個数が参加者を上回っている");
		}

		// 当選番号キュー
		this.winningNumberQueue = new WinningNumberQueue();

		// ビンゴシート
		var bingoSheets = [];

		// ビンゴシート配布
		for(var i = 0; i < playerCount; i++){
			bingoSheets.push(new BingoSheet());
		}

		// ビンゴに穴を空けていく
		var isEnd = false;
		while(isEnd == false){
			for(var queueCount = 0; queueCount < 75; queueCount++){

				// 番号取り出し
				var nextNum = this.winningNumberQueue.Dequeue();

				if(nextNum == null){
					alert("予期せぬエラーが発生しました。");
					break;
				}

				// 全員のピースを開ける
				for(var c = 0; c < playerCount; c++){
					bingoSheets[c].OpenPiece(nextNum);
				}

				// ビンゴ数を取得
				var bingoCount = 0;
				for(var c = 0; c < playerCount; c++){
					if(bingoSheets[c].IsBingo() == true){
						bingoCount++;
					}
				}

				// 一定数当選したら終了。
				if(bingoCount >= winningItemCount){
					isEnd = true;
					break;
				}
			}
		}	
	}

	// 終了時間を返します。
	EndTimeSeconds(){
		return this.winningItemCount * this.winningTime + (75 - this.winningNumberQueue.Count()) * this.lotteryTime;
	}

	// 終了回数
	EndCount(){
		return 75 - this.winningNumberQueue.Count();
	}
}

// workerで行う処理
onmessage = function(event) {

	var time_max = 0;
	var time_min = 99999999999;

	var count_lottery_average = 0;
	var count_lottery_total_by_cal = 0;
	var count_lottery_max = 0;
	var count_lottery_min = 99999999999;


	for(var tryCount = 1; tryCount <= event.data["count_try"]; tryCount++){
		var bingo = new BingoManager(
			event.data["count_player"],
			event.data["count_item"],
			event.data["time_lottery"],
			event.data["time_winning"]
		);

		var endTime = bingo.EndTimeSeconds();
		var endCount = bingo.EndCount();

		if(endTime > time_max){
			time_max = endTime;
		}
		if(endTime < time_min){
			time_min = endTime;
		}
		if(endCount > count_lottery_max){
			count_lottery_max = endCount;
		}
		if(endCount < count_lottery_min){
			count_lottery_min = endCount;
		}

		count_lottery_total_by_cal += endCount;

		if(tryCount % 100 == 0){
			var progress = {
				"progress" : Math.round((tryCount / event.data["count_try"]) * 100) + "%"
			}
			postMessage(progress);
		}
	}

	count_lottery_average = count_lottery_total_by_cal / event.data["count_try"];

	var result = {
		"time_average"  : toHms(Math.round(count_lottery_average) * event.data["time_lottery"] + event.data["count_item"] * event.data["time_winning"]),
		"time_max"      : toHms(time_max),
		"time_min"      : toHms(time_min),

		"count_average" : Math.round(count_lottery_average),
		"count_max"     : count_lottery_max,
		"count_min"     : count_lottery_min,

		"count_try"     : event.data["count_try"]
	}

    // app_Bingo.htmlに値を返す
    postMessage(result);
}