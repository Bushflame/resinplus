<script>
</script>

<div class="grid">
	<div class="head"><slot name="head" /></div>
	<div class="one"><slot name="one" /></div>
	<div class="two"><slot name="two" /></div>
	<div class="foot"><slot name="foot" /></div>
</div>

<style lang="stylus">
.head 
    grid-area head
    text-align center
.one 
    grid-area one 
.two 
    grid-area two
.foot
    grid-area foot
    text-align center
.grid  
    display grid
    gap 1rem
    grid-template-areas 'head' 'one' 'two''foot'
    grid-template-columns 1fr 
    margin auto
    max-width 400px
    width 100%
@media(min-width 720px)
    .grid 
        grid-template-columns 1fr 1fr
        grid-template-areas 'head head' 'one two' 'foot foot'
        max-width 960px
</style>
