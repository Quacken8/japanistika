<head>
    <link rel="stylesheet" href="style.css">
</head>

<script>

    import Sidebar from "./sidebar.svelte";
    import Lipsum from "./lipsum.svelte";
</script>

<body>

    <div class="pageContent">
        <div class="sidebar">
            <Sidebar/>
        </div>

        <div class="maintext">
            <slot name = "maintext">
            </slot>
        </div>
    </div>

</body>

<style>
    body {
        font-family: 'Trebuchet MS';
        width: 100vw;
        overflow-x: hidden;
        color: black;
        background-color: rgb(250, 218, 169);
        display: flex;
        justify-content: center;
        height: 100vh;
        margin: 0%;
    }

    .pageContent {
        color: black;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        flex-grow: 1;
        margin-top: 0em;
        margin-left: 20vw;
        margin-right: 20vw;
        min-width: 50em;
        background-color: rgb(255, 255, 255);
    }
    
    .sidebar {
        color: white;
        background-color: rgb(243, 171, 199);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 2%;
        padding-right: 2%;
        padding-left:  2%;
        width: 10%;
    }

    .maintext {
        background-color: none;
        color: black;
        width: 90%;
        left: 100px;
        padding-top: 10em;
        padding-right: 3em;
        padding-left: 3em;
        overflow: scroll;
    }
</style>