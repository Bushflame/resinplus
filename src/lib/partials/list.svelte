<script>
	export let arr = ['item 1', 'item 2', 'item 3', 'item 4'];
</script>

<ul>
	{#each arr as item}
		<li>{item}</li>
	{/each}
</ul>

<style lang="stylus">
ul
    color var(--list-color)
    display grid
    gap .6rem
    grid-template-columns 1fr
    height fit-content
    list-style none
li 
    position relative  
   // border 1px solid red
li::after 
    background var(--li-bg)
    border var(--li-bdr)
    content ''
    height 1rem 
    position absolute 
    left -2rem
    top 50%
    transform translate(0, -50%)
    width 1rem
</style>
