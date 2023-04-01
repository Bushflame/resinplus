<div class="grid">
	<div class="item one"><img src="/img/boxed-path.jpeg" alt="" /></div>
	<div class="item two"><img src="/img/boxed-drive.jpeg" alt="" /></div>
	<div class="item three"><img src="/img/boxed-patio.jpeg" alt="" /></div>
</div>

<style lang="stylus">
.grid  
    //border 1px solid red
    display grid
    gap 16px
    grid-template-columns 1fr 1fr 
    grid-template-areas '. one' 'two two' 'three .'
    height 400px
    margin 0 0 0 auto
    //margin-right -62px
    max-width 400px
    //position absolute
    left 0 
    //bottom -60%
    //transform translate(0,60%)
    width 400px
</style>
