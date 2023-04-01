<div class="grid main">
	<div class="inner-grid grid">
		<img src="/img/boxed-path.jpeg" alt="" class="tall" />
		<img src="/img/boxed-drive.jpeg" alt="" />
	</div>
	<div class="inner-grid grid">
		<img src="/img/boxed-patio.jpeg" alt="" />
		<img src="/img/drive-2.png" alt="" class="tall" />
	</div>
</div>

<style lang="stylus">
@media(min-width 780px)
    .main
        //background red
        gap 32px
        grid-template-columns 1fr 1fr
        padding-top 64px
        position relative
        width 500px
    img 
        //height 300px
        width 100%
        //width 200px
    .tall 
        height 250px
    .inner-grid
        //border 2px solid yellow
        display grid
        gap 32px
        grid-template-columns 1fr
        position relative
        width 100%

</style>
