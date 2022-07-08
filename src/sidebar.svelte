<button class="sidebarHeader">猫</button>
<a class="sidebarButton" href = "https://google.com">Lekce</a>
<a class="sidebarButton" href = "slovnicek">Slovníček</a>

<script>
    function redirect(url) {
        window.location.href=url;
    }
</script>
        

<style>
    .sidebarHeader {
        font-size: 100px;
        display: flex;
        font-weight: 700;
        justify-content: center;
        align-content: center;
        margin-bottom: 0.2em;
    }

    .sidebarButton {
        padding-left: 5px;
        width: 100%;
        height: 2em;
        display: flex;
        color: inherit;
        border: none;
        font-size: 15px;
        border-radius: 2px;
        margin-bottom: 5%;
        text-decoration: none;
        justify-content: left;
        align-items: center;
        background-color: inherit;
    }

    .sidebarButton:hover {
        background-color: grey;
    }
</style>

