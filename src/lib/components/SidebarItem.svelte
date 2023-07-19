<script>
    export let href = "/";
</script>
<a href="{href}"><li><slot></slot></li></a>

<style>
    li {
    padding: 0.5rem 1rem;
    background-color: transparent;
    margin: 0.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.2s ease-in-out;
    }

    li:hover {
    background-color: var(--color-primary);
    }

    .active {
    background-color: var(--color-primary);
    }

    a {
    text-decoration: none;
    color: var(--color-text);
    }


</style>

