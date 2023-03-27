<script>
	export let img_1;
	export let img_2;
	export let img_3;
</script>

<div class="trio-grid">
	<img src={img_1} alt="" class="trio-1" />
	<img src={img_2} alt="" class="trio-2" />
	<img src={img_3} alt="" class="trio-3" />
</div>

<style lang="stylus">
img 
    height 200px
    max-height 200px
    max-width 300px
    width 300px
.trio-1, .trio-2, .trio-3
    grid-area 1 / 1
.trio-1
    // max-width 60%
    justify-self right
    align-self self-start
    width 100%
    max-width 80%
    height fit-content 
.trio-2
    justify-self center
    align-self center
    width 100%
    height fit-content
    max-width 80%
.trio-3
    justify-self left
    align-self end
    max-width 80%
    width 100%
    height fit-content 
.trio-grid
    //border 1px solid red
    display grid
    grid-template-columns 1fr
    margin auto
    // height 100%
    //height 32rem
    width 400px
    //max-width 100%
    padding 0 1rem
// @media(min-width 900px)
.trio-grid 
    width 100%
    max-width 400px
    height 500px

</style>
