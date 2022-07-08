<head>
    <link rel="stylesheet" href="style.css">
</head>

<script>
    import PageTemplate from "../pageTemplate.svelte";

    import Lipsum from "../lipsum.svelte";
</script>


<PageTemplate>
    <span slot="maintext">
        <Lipsum/>
    </span>
</PageTemplate>