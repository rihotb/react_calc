# react_calc

### 計算メモ

[再考案]

- (1) storedNumber は isCalculated が false のタイミングで空にする。

  - 訂正。isCalculated が true であれば次に保存する値を number と同じとする
  - 上記処理の後、calculated は false に戻す

- (2) １つ前の operator を使う必要がある。
  - numberProvider.js で、useNumberGroup.setSumNumber(x => eval(`${x} ${op} ${useNumberGroup.storedNumber}`))

1. [100]
   L number: 0
   L storedNumber: 100
   L sumNumber: 0
   L isNumberActived: true
   L isCalculated: false

2. [100+]
   L number: ""
   L storedNumber: 100
   L sumNumber: 100
   L isNumberActived: false
   L isCalculated: true

3. [100+2]
   L number: 2
   L storedNumber: 2 (1)
   L sumNumber: 100
   L isNumberActived: true
   L isCalculated: false (1)

4. [100+200]
   L number: 0
   L storedNumber: 200
   L sumNumber: 100
   L isNumberActived: true
   L isCalculated: false

5. [100+200+]
   L number: ""
   L storedNumber: 200
   L sumNumber: sumNumber(100) op(+) storedNumber(200) (2)
   L isNumberActived: false
   L isCalculated: true

6. [100+200+-]
   L number: ""
   L storedNumber: 200
   L sumNumber: 300 | 既に isCalculated が true の為、計算しない
   L isNumberActived: false
   L isCalculated: true

[1~9]
1~9を押した時
　AC→Cになる
   L number: 1 ○
   L storedNumber: 1　○
   L sumNumber: 0
   L isNumberActived: true　○
   L isCalculated: false
   L beforeOperator: ""
   L isOperatorActived: false
   L isOperatorClicked: false
   L operator: ""

Cを押した時
　C→ACに戻る
　表示が1→0になる
   L number: 0　○
   L storedNumber: 0　○
   L sumNumber: 0
   L isNumberActived: false  ○
   L isCalculated: false
   L beforeOperator: ""
   L isOperatorActived: false
   L isOperatorClicked: false
   L operator: ""

ACを押した時
   L number: 0
   L storedNumber: 0
   L sumNumber: 0
   L isNumberActived: false
   L isCalculated: false
   L beforeOperator: ""
   L isOperatorActived: false
   L isOperatorClicked: false
   L operator: ""

[0と数値以外のボタン]
　ACのまま
　isNumberActived: false

[1+]
1+を押した時
　Cのまま
　　L number: 1　
   L storedNumber: 0　○
   L sumNumber: 1　○
   L isNumberActived: false　○
   L isCalculated: true　○
   L beforeOperator: ""
   L isOperatorActived: true　○ 
   L isOperatorClicked: false
   L operator: "+"　○
   isNumberActivedかisOperatorActivedがtrueであればC？？　

Cを押した時
　表示が1→0になる
　+のボタンは反転したまま
　C→ACに戻る
　　L number: 0　○
   L storedNumber: 0
   L sumNumber: 1 
   L isNumberActived: false
   L isCalculated: true
   L beforeOperator: ""
   L isOperatorActived: true
   L isOperatorClicked: false
   L operator: "+"
   isNumberActivedかisOperatorActivedがtrueであればC？？　←だめ

ACを押した時
　　L number: 0
   L storedNumber: 0
   L sumNumber: 0 ○
   L isNumberActived: false
   L isCalculated: false
   L beforeOperator: ""
   L isOperatorActived: false ○
   L isOperatorClicked: false
   L operator: "" ○

[1+2]
1+2を押した時
　Cのまま
　　L number: 2 ○
   L storedNumber: 2 ○
   L sumNumber: 1
   L isNumberActived: true ○
   L isCalculated: false ○
   L beforeOperator: "+" ○
   L isOperatorActived: false ○
   L isOperatorClicked: false
   L operator: "+"

Cを押した時
　表示が2→0になる
　+のボタンは反転する
　C→ACに戻る
　　L number: 0 ○
   L storedNumber: 0 ○
   L sumNumber: 1
   L isNumberActived: false ○  //演算子ボタンが有効になってるからfalse
   L isCalculated: false
   L beforeOperator: "+"
   L isOperatorActived: true ○
   L isOperatorClicked: false
   L operator: "+"

ACを押した時
　　L number: 0
   L storedNumber: 0
   L sumNumber: 0 ○
   L isNumberActived: false
   L isCalculated: false
   L beforeOperator: "" ○
   L isOperatorActived: false ○
   L isOperatorClicked: false
   L operator: "" ○


ACかCを判別するための条件

   ACを押したらnumberを""にする
   storedNumber("")
   sumNumber("")

   Cを押したらnumberを""にする
   storedNumber("")

   空文字以外であればCボタンで表示

　