'use strict'        //エラー検出の設定
const number = process.argv[2] || 0;    //process.argv[2]はNode.jsのデフォルト引数が入った配列
                                        // ||0　で０やnull,undefindなどの値である場合０が代入される
let sum  = 0;
for(let i = 1 ;i <= number ; i++){
    sum = sum + i;
}
console.log(sum);