<head>
    <link rel="stylesheet" href="style.css">
</head>

<script>
    import PageTemplate from '../../pageTemplate.svelte';
    import Slovicko from '../../slovicko.svelte';
</script>

<PageTemplate>
    <div slot = "maintext">
        
        <h1>Slovníček</h1>
        <Slovicko>
            <div slot = "kanji">漢字</div>
            <div slot = "kana">かんじ</div>
            <div slot = "preklad">
                Kanji, 
                znaková abeceda 
            </div>
        </Slovicko>
        <Slovicko>
            <div slot = "kanji">漢</div>
            <div slot = "kana">かん</div>
            <div slot="preklad">
                nemám tucha, 
                lol 
            </div>
        </Slovicko>
        <Slovicko>
            <div slot = "kanji">字</div>
            <div slot="kana">じ</div>
            <div slot="preklad">
                charakter říká google lol, 
                related to school 
            </div>
        </Slovicko>
        <Slovicko>
            <div slot = "kana">ヒラガナ</div>
            <div slot = "preklad">
                hiragana,
                jedna z japonských abeced 
            </div>
        </Slovicko>
        <Slovicko>
            <div slot = "kanji">To do list</div>
            <ul slot = "preklad" style="text-align:left">
                <li>vyhledávání</li>
                <li>ukazovat jen pár překladů if not expanded</li>
                <li>adaptivní velikost fontu: kanji fixně velké, kana tak aby byl přepis stejně vysoký jako, kanji</li>
                <li>cross odkazy jednotlivých znaků kanji</li>
                <li>generic design overhaul, velikosti textů, jejich rozložení etc etc lol</li>
                <li>generátor of dictionary entries aby sem mohli přidávat věci i neprogramátoři</li>
                <li>automatická výslovnost z kany — done ✓</li>
            </ul>
        </Slovicko>
    </div>

</PageTemplate>

<style>
    h1 {
        font-size: 60px;
        font-weight: 700;
    }

</style>