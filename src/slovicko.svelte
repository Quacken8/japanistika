<script>
    let expanded = false;
    let kanaDiv;
    import { pronounce } from "./prounanciator.js";
    let useless = pronounce("ヒラガナ")
</script>


<button aria-expanded={expanded} on:click={() => expanded = !expanded}>
    <div class="kanji" style:display = "{$$slots.kanji ? '' : 'none'}" class:bigkanji = "{expanded === true}" >
        <slot name = "kanji">
        </slot>
    </div>

    <div class = "kana" class:bigkana = "{expanded === true}"  hidden = "{expanded === !true && $$slots.kanji}" bind:this={kanaDiv}>
        <slot name = "kana">
            <missing>chybí kana</missing>
        </slot>
    </div>

    <div style="text-align:justify">
        <div class = "vyslovnost" hidden = "{expanded === !true}">
            {#if kanaDiv}
                [{pronounce(kanaDiv.innerText)}]
            {/if}
        </div>

        <div class = "preklad">
            <slot name = "preklad">
                <missing>chybí překlad</missing>
            </slot>
        </div>
    </div>
</button>


<style>
    
    missing{
        color: red;
        font-size: larger;
    }
    .kanji {
        font-size: 20px;
        text-align: justify;
        text-justify: inter-character;
        padding-right: 10px;
        width: 100px;
    }
    .bigkanji {
        writing-mode: tb-rl;
        font-size: 80px;
    }

    .kana {
        font-size: 20px;
        text-align: justify;
        text-justify: inter-character;
        padding-right: 10px;
        width: 100px;
    }
    .bigkana {
        width: fit-content;
        display: flex;
        align-content: center;
        writing-mode: tb-rl;
        text-align: left;
        text-justify: inter-character;
        font-size: 40px;
    }

    .preklad {
        width: 100%;
         padding-right: 10px;
    }

    .vyslovnost{
         padding-right: 10px;
         font-style: italic;
    }

    button {
        display: flex;
        flex-grow: 1;
        background-color: inherit;
        flex-direction: row;
        border-right: none;
        border-left: none;
        border-top: none;
        border-radius: 4px;
        padding: 10px;
        margin: 4px;
        font-size: 20px;
        font-weight: 400;
        width: 100%;

    }

    button[aria-expanded = false]:hover {
        background-color: gray;
    }
    button[aria-expanded = true]:hover {
        background-color: lightgray;
    }

</style>