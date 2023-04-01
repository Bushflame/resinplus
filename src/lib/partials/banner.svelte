<script>
	export let title = 'title';
	export let txt = 'some bollox';

	export let linkTo = '';
	export let linkTxt = '';
</script>

<div class="wrap">
	<img src="/img/svg/logo.svg" alt="" />
	<div class="grid main">
		<div class="item one">
			<h1>{title}</h1>
			<p>{txt}</p>
			<a href={linkTo}>{linkTxt}</a>
		</div>

		<div class="two">
			<slot />
		</div>
	</div>
</div>

<style lang="stylus">

.wrap 
    background var(--alpha-drk)
    //background transparent
    display flex 
    align-items center
    flex-direction column
    justify-content center
    padding 32px 16px
    position relative
    z-index 2
 .wrap::after
    background var(--beta-drkr) //#fff
    border-radius 0 0 100% 0 
    content ''
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    z-index -1
img 
    width 160px
h1
    //border 1px solid red
    color var(--gamma-lgt)
    font-size 3rem
    padding 16px 0

a 
    //background var(--beta-mid)
    border 1px solid var(--gamma-lgt)
    color var(--gamma-lgt)
    display block
    font-size 16px
    margin  2rem auto 
    padding 6px 24px
    text-decoration none
.one 
    //border 1px solid #fff
    //color #fff
    display flex
    flex-direction column
    justify-content center
    grid-area one
    text-align center
    padding 1rem
    p 
        color var(--gamma-lgt)
        font-size 1.6rem
.two 
    //border 1px solid #fff
    display grid
    grid-template-columns 1fr
    grid-area two
    align-items center
    

.grid
    display grid 
    column-gap 2rem
    //row-gap 4rem
    grid-template-columns 1fr
    grid-template-areas 'one' 'two' 
    max-width 400px
    width 100%
@media(min-width 720px) 
    .grid
        grid-template-columns 1fr 1fr
        grid-template-areas 'one two ' 
        max-width 960px
        width fit-content
    .one 
        text-align left
@media(min-width 960px) 
    a  
        margin-left 0
</style>
