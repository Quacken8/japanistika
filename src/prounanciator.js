export function pronounce(kana) {
    var list = kana.split('');
    var toReturn = [];
    var remembered = 0; // for sokuon doubling of letters

    while (list.length > 0) {
        // first let's see if it's a youon, a two-symbol combo
        let itsTwoSymbols = true;
        let checking = list.slice(0,2); // gets the first two elements
        try {
            toReturn[toReturn.length] = ((hiragana[checking][0]).repeat(remembered) + hiragana[checking]);
        } catch (TypeError) {
            try {
                toReturn[toReturn.length] = ((katakana[checking][0]).repeat(remembered) + katakana[checking]);

            } catch (TypeError) {
                
                itsTwoSymbols = false; // those two symbols aren't hiragana nor katakana 
            }
        }

        if (itsTwoSymbols) {
            list.shift();
            list.shift();    // found the two symbols, next time I won't check them
            remembered = 0;
            continue;
        }

        // ok, so it's probably just one symbol

        checking = list[0];
        try {
            toReturn[toReturn.length] = ((hiragana[checking][0]).repeat(remembered) + hiragana[checking]);
            remembered = 0;
        } catch (TypeError) {
            try {
                toReturn[toReturn.length] = ((katakana[checking][0]).repeat(remembered) + katakana[checking]);
                remembered = 0;
            } catch (TypeError) {
                if (checking === "っ" || checking === "ッ") { // is it small tsu for sokuon?
                    remembered = 1;
                }
                else {
                    
                    remembered = 0;
                    toReturn[toReturn.length] = ("?");   // didn't find it anywhere, damn
                }
                }
            }
        
        list.shift();  // found the symbol, next time I won't check it
    }

    return toReturn.join("");
}

const sokuon = ["っ", "ッ"];

const katakana = {
"ア" : "a",  
"イ" : "i", 
"ウ" : "u", 
"エ" : "e", 
"オ" : "o", 
"カ" : "ka",
"ガ" : "ga",
"キ" : "ki",
"ギ" : "gi",
"ク" : "ku",
"グ" : "gu",
"ケ" : "ke",
"ゲ" : "ge",
"コ" : "ko",
"ゴ" : "go",
"サ" : "sa",
"ザ" : "za",
"シ" : "si",
"ジ" : "zi",
"ス" : "su",
"ズ" : "zu",
"セ" : "se",
"ゼ" : "ze",
"ソ" : "so",
"ゾ" : "zo",
"タ" : "ta",
"ダ" : "da",
"チ" : "ti",
"ヂ" : "di",
"ツ" : "tu",
"ヅ" : "du",
"テ" : "te",
"デ" : "de",
"ト" : "to",
"ド" : "do",
"ナ" : "na",
"ニ" : "ni",
"ヌ" : "nu",
"ネ" : "ne",
"ノ" : "no",
"ハ" : "ha",
"バ" : "ba",
"パ" : "pa",
"ヒ" : "hi",
"ビ" : "bi",
"ピ" : "pi",
"フ" : "hu",
"ブ" : "bu",
"プ" : "pu",
"ヘ" : "he",
"ベ" : "be",
"ペ" : "pe",
"ホ" : "ho",
"ボ" : "bo",
"ポ" : "po",
"マ" : "ma",
"ミ" : "mi",
"ム" : "mu",
"メ" : "me",
"モ" : "mo",
"ヤ" : "ya",
"ユ" : "yu",
"ヨ" : "yo",
"ラ" : "ra",
"リ" : "ri",
"ル" : "ru",
"レ" : "re",
"ロ" : "ro",
"ヮ" : "wa",
"ワ" : "wa",
"ヰ" : "wi",
"ヱ" : "we",
"ヲ" : "wo",
"ン" : "n", 
"ヴ" : "vu",
"ヷ" : "va",
"ヸ" : "vi",
"ヹ" : "ve",
"ヺ" : "vo",
"キャ" : "kya",
"キュ" : "kyu",
"キョ" : "kyo",
"シャ" : "sha",
"シュ" : "shu",
"ショ" : "sho",
"チャ" : "cha",
"チュ" : "chu",
"チョ" : "cho",
"ニャ" : "nya",
"ニュ" : "nyu",
"ニョ" : "nyo",
"ヒャ" : "hya",
"ヒュ" : "hyu",
"ヒョ" : "hyo",
"ミャ" : "mya",
"ミュ" : "myu",
"ミョ" : "myo",
"リャ" : "rya",
"リュ" : "ryu",
"リョ" : "ryo",
"ギャ" : "gya",
"ギュ" : "gyu",
"ギョ" : "gyo",
"ジャ" : "ja",
"ジュ" : "ju",
"ジョ" : "jo",
"ビャ" : "bya",
"ビュ" : "byu",
"ビョ" : "byo",
"ピャ" : "pya",
"ピュ" : "pyu",
"ピョ" : "pyo",
};

const hiragana = {
    "あ" : "a",
    "い" : "i",  
    "う" : "u",  
    "え" : "e",  
    "お" : "o",  
    "ら" : "ra", 
    "り" : "ri" ,
    "る" : "ru" ,
    "れ" : "re" ,
    "ろ" : "ro" ,
    "わ" : "wa" ,
    "を" : "wo" ,
    "ん" : "n" ,
    "か" : "ka" ,
    "き" : "ki" ,
    "く" : "ku" ,
    "け" : "ke" ,
    "こ" : "ko" ,
    "さ" : "sa" ,
    "し" : "shi",
    "す" : "su" ,
    "せ" : "se" ,
    "そ" : "so" ,
    "た" : "ta" ,
    "ち" : "chi",
    "つ" : "tsu",
    "て" : "te" ,
    "と" : "to" ,
    "な" : "na" ,
    "に" : "ni" ,
    "ぬ" : "nu" ,
    "ね" : "ne" ,
    "の" : "no" ,
    "は" : "ha" ,
    "ひ" : "hi" ,
    "ふ" : "fu" ,
    "へ" : "he" ,
    "ほ" : "ho" ,
    "ま" : "ma" ,
    "み" : "mi" ,
    "む" : "mu" ,
    "め" : "me" ,
    "も" : "mo" ,
    "や" : "ya" ,
    "ゆ" : "yu" ,
    "よ" : "yo" ,
    "が" : "ga",
    "ぎ" : "gi",
    "ぐ" : "gu",
    "げ" : "ge",
    "ご" : "go",
    "ざ" : "za",
    "じ" : "ji",
    "ず" : "zu",
    "ぜ" : "ze",
    "ぞ" : "zo",
    "だ" : "da",
    "ぢ" : "ji",
    "づ" : "zu",
    "で" : "de",
    "ど" : "do",
 	"ば" : "ba",
    "び" : "bi",
    "ぶ" : "bu",
    "べ" : "be",
    "ぼ" : "bo",
    "ぱ" : "pa",
    "ぴ" : "pi",
    "ぷ" : "pu",
    "ぺ" : "pe",
    "ぽ" : "pe",
    "きゃ" : "kya",
    "きゅ" : "kyu",
    "きょ" : "kyo",
    "しゃ" : "sha",
    "しゅ" : "shu",
    "しょ" : "sho",
    "ちゃ" : "cha",
    "ちゅ" : "chu",
    "ちょ" : "cho",
    "にゃ" : "nya",
    "にゅ" : "nyu",
    "にょ" : "nyo",
    "ひゃ" : "hya",
    "ひゅ" : "hyu",
    "ひょ" : "hyo",
    "みゃ" : "mya",
    "みゅ" : "myu",
    "みょ" : "myo",
    "りゃ" : "rya",
    "りゅ" : "ryu",
    "りょ" : "ryo",
    "ぎゃ" : "gya",
    "ぎゅ" : "gyu",
    "ぎょ" : "gyo",
    "じゃ" : "ja",
    "じゅ" : "ju",
    "じょ" : "jo",
    "びゃ" : "bya",
    "びゅ" : "byu",
    "びょ" : "byo",
    "ぴゃ" : "bya",
    "ぴゅ" : "byu",
    "ぴょ" : "byo"
};