<script>
	export let txt = 'hello world';
</script>

<div class="grid">
	<div class="one">
		<h3>The UK's N<sup>o</sup>1 domestic resurfacing material</h3>
	</div>
	<div class="two"><slot /></div>
</div>

<style lang="stylus">
.grid 
	gap 1rem
	grid-template-areas 'one' 'two'
	grid-template-columns 1fr
	margin auto
	max-width 1020px
	padding 1rem
	width 100%
h3
	//border-bottom 1px solid red
	color var(--alpha-mid)
	font-size 2rem
	font-style italic
	font-weight 800
	margin auto
	position relative
	text-align center
	width fit-content
// h3:before 
// 	background var(--beta-mid)
// 	content ''
// 	height 16px
// 	position absolute
// 	bottom -16px
// 	left 50%
// 	transform translate(-50%)
// 	width 160px

.one 
	display flex
	align-items center
span  
	//border 1px solid red
	display inline-block
	font-size 4rem
.first 
	padding-top 2rem
	transform rotate(180deg)
@media(min-width 780px)
	.grid  
		grid-template-columns 1fr 1fr	
		grid-template-areas 'one two'
	h3 
		font-size 3rem

</style>
