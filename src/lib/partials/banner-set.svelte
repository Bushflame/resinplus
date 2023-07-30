<script>
	import List from '$lib/partials/list.svelte';
	import ImgMosaic from '$lib/partials/img-mosaic.svelte';
	let bannerList = [
		'No planning permission needed',
		'UV protection',
		'Non-slip coating',
		'SuDS compliant',
		'Over 30 colors'
	];
</script>

<div class="top-bar">01709 252159 | 0753 8743 890<br />info@resinplus.co.uk</div>
<div class="wrap">
	<div class="wrap-liner">
		<div class="grid">
			<div class="headings one">
				<img src="/img/svg/logo.svg" alt="" class="logo" />
				<h1>RESIN<br /><span>GRAVEL</span></h1>
				<p>Driveways<br />Paths<br />Patios</p>
				<a href="#contact" class="a-one">Message</a>
			</div>
			<div class="list two">
				<ImgMosaic />
			</div>
		</div>
	</div>
	<div class="foot">
		<div class="foot-liner grid">
			<List
				--list-color="var(--gamma-lgtr)"
				--li-bg="transparent"
				--li-bdr="1px solid var(--gamma-lgtr)"
				arr={bannerList}
			/>
			<div class="address">
				<p>Contact</p>
				<p>01709 252159<br />01709 252159<br />info@resinplus.co.uk</p>
			</div>
		</div>
	</div>
</div>

<style lang="stylus">
.top-bar  
    background var(--alpha-mid)
    color #fff
    margin auto
    padding 12px 1rem
    position fixed 
    top 0 
    left 50%
    text-align right
    transform translate(-50%, 0)
    width 100%
    z-index 4
.wrap
    padding-top 4rem
.wrap-liner 
    background var(--alpha-mid)
    //padding 68px 16px 32px
    position relative


.wrap-liner::before 
    background #fff //var(--gamma-lgtr) // #fff //rgba(10,96,92, 1)
    border-radius   0 0  100% 0
    content ''
    //display none
    height 100%
    position absolute 
    top 0 
    left 0 
    width 100%
.grid 
    //background #fff
    display grid 
    align-items center
    gap 4rem
    grid-template-columns 1fr
    grid-template-areas 'one' 'two'
    //justify-content space-between //center
    margin 0 auto
    padding  0 32px
    position relative
    //margin auto
    //max-width 1280px
    width 100%
    z-index 3
.two 
    //border 1px solid blue
    display none
    justify-content right
    margin  0 auto
    padding-top 20px
    //padding-left 64px
    position relative
.foot 
    background var(--alpha-mid)
    display flex
    //justify-content left //center
    //max-width 1280px
    padding-bottom 2rem
    width 100%
.foot-liner
    //border 1px solid red
    //display none
    justify-content space-between
    margin auto
    max-width 900px
    width 100%
.headings  
    //border 1px solid red
    //position relative
    margin auto
    text-align center
    width fit-content

.address  
    display none
.logo
    margin  32px auto
    //padding-top 4rem
    //width 200px
    //height 150px
img 
    height 112px
    width 192px

h1  
    color var(--gamma-lgt)
    font-size 32px
h1 span 
    color var(--gamma-lgt)
    font-size 62px
p 
    color var(--gamma-lgt)
    font-size 24px
    line-height 1.5
    margin-bottom 0
.list  
    margin 2rem auto
    width fit-content
a  
    background var(--gamma-lgtr)
    border 0 //1px solid var(--gamma-lgt)
    border-radius 4px
    color var(--alpha-mid)
    display block
    //margin 2rem auto
    padding 8px 32px
    text-decoration none
    width fit-content
    margin 1rem auto 0

@media(min-width 780px)
    a 
        //display none
        margin 1rem auto 0 0
    .top-bar 
        position absolute
        //display none
    .wrap 
        //height 100vh
        padding-top 0
    .wrap-liner 
        //height calc(100vh - 12rem) //520px 
        //height 100vh
        //background-image url('/img/desktop.png')
        margin-left 0
        padding-left 300px
        padding-right 250px
        //max-width 1280px
        
    .grid 
        //background #fff
        grid-template-columns 1fr 1fr
        grid-template-areas 'one two'
        max-width 1080px
        //width fit-content
        //justify-content space-between
    .headings 
        margin-left 0
        //padding-left 250px
        text-align left
    .two 
        display flex
    a.a-one  
        display block

    .logo
        margin 32px 0 16px
    // .foot  
    //     padding-left 350px
    .foot-liner
        display flex
</style>
