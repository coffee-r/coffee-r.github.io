import {
  shuffleArray,
  BingoSquare,
  BingoSheetFactory,
  BingoSheetFactoryForTest,
  LotteryBingoNumberStack,
  LotteryBingoNumberStackForTest,
  BingoSheet,
  BingoTournament,
  BingoTournamentCollection,
} from '~/plugins/bingo.js';

describe("shuffleArray", () => {
  test("shuffleArray array containing", () => {
    let array1 = [1,2,3];
    let array2 = [1,2,3];
    let shuffledArray = shuffleArray(array1);
    expect(shuffledArray).toEqual(expect.arrayContaining(array2));
  });

  test("shuffleArray shuffle", () => {
    let array1 = [];
    let array2 = [];
    // 確率的に100要素ほどあれば十分にテストできるはず
    for (let i = 0; i < 100; i++) {
      array1.push(i)
      array2.push(i)
    }
    shuffleArray(array1);
    expect(array1).not.toStrictEqual(array2);
  });
});

describe("BingoSquare", () => {
  test("constructor arg type", () => {
    const bingoNumber = new BingoSquare(1, true);
    expect(() => { new BingoSquare('test', false)}).toThrow();
    expect(() => { new BingoSquare(1, 'test')}).toThrow();
  });

  test("Bingo Number Range", () => {
    const lower = new BingoSquare(1, false);
    const higher = new BingoSquare(75, false);
    expect(() => { new BingoSquare(0, false)}).toThrow();
    expect(() => { new BingoSquare(76, false)}).toThrow();
  });
});



describe("Bingo Sheet", () => {

  // non shuffle
  // 1 2 3 4 5
  // 16 17 18 19 20
  // 31 32 33 34 35
  // 46 47 48 49 50
  // 61 62 63 64 65
  
  test("isBingo", () => {

    for(let i=1; i<=5; i++){
      let bingoSheet = BingoSheetFactoryForTest();
      for(let j=1; j<=5; j++){
        bingoSheet.open(j + (i - 1) * 15);
        if(j != 5){
          expect(bingoSheet.isBingo()).toBe(false);
        }else{
          expect(bingoSheet.isBingo()).toBe(true);
        }
      }
    }
    for(let i=1; i<=5; i++){
      let bingoSheet = BingoSheetFactoryForTest();
      for(let j=1; j<=5; j++){
        bingoSheet.open(i + (j - 1) * 15);
        if(j != 5){
          expect(bingoSheet.isBingo()).toBe(false);
        }else{
          expect(bingoSheet.isBingo()).toBe(true);
        }
      }
    }

    // 斜め
    const bingoSheetCross1 = BingoSheetFactoryForTest();
    bingoSheetCross1.open(1);
    expect(bingoSheetCross1.isBingo()).toBe(false);
    bingoSheetCross1.open(17);
    expect(bingoSheetCross1.isBingo()).toBe(false);
    bingoSheetCross1.open(49);
    expect(bingoSheetCross1.isBingo()).toBe(false);
    bingoSheetCross1.open(65);
    expect(bingoSheetCross1.isBingo()).toBe(true);

    const bingoSheetCross2 = BingoSheetFactoryForTest();
    bingoSheetCross2.open(5);
    expect(bingoSheetCross2.isBingo()).toBe(false);
    bingoSheetCross2.open(19);
    expect(bingoSheetCross2.isBingo()).toBe(false);
    bingoSheetCross2.open(47);
    expect(bingoSheetCross2.isBingo()).toBe(false);
    bingoSheetCross2.open(61);
    expect(bingoSheetCross2.isBingo()).toBe(true);

  });
  
});

describe("BingoTournament", () => {
  test("getEndSeconds", () => {

    // 5回の抽選、2回の当選
    const bingoTournament = new BingoTournament(BingoSheetFactoryForTest, new LotteryBingoNumberStackForTest(), 2, 2, 10,20);
    expect(bingoTournament.getEndSeconds()).toBe(90);

  });

});


describe("BingoTournamentCollection", () => {
  test("calculatePlayTime", () => {

    const tournamentMock1 = { getEndSeconds: () => 10 };
    const tournamentMock2 = { getEndSeconds: () => 20 };
    const tournamentMock3 = { getEndSeconds: () => 60 };

    let bingoTournamentCollection = new BingoTournamentCollection([]);
    bingoTournamentCollection = bingoTournamentCollection.add(tournamentMock1);
    bingoTournamentCollection = bingoTournamentCollection.add(tournamentMock2);
    bingoTournamentCollection = bingoTournamentCollection.add(tournamentMock3);

    const result = bingoTournamentCollection.calculatePlayTime();

    expect(result.averageEndTimeSeconds).toBe(30);
    expect(result.minEndTimeSeconds).toBe(10);
    expect(result.maxEndTimeSeconds).toBe(60);

  });

});