<script>
	export let txt = 'hello world';
</script>

<div class="grid">
	<div class="one">
		<p>The UK's N<sup>o</sup>1 domestic resurfacing material</p>
	</div>
	<div class="two"><slot /></div>
</div>

<style lang="stylus">
.grid 
	display grid 
	gap 1rem
	grid-template-columns 1fr
	margin auto
	max-width 1020px
	padding 1rem
	width 100%
p
	//border 1px solid red
	color var(--alpha-mid)
	font-size 2rem
	font-style italic
	font-weight 800
	margin auto
	position relative
	text-align center
	width fit-content
// p::before 
// 	content '\201C'
// 	font-size 3rem
// 	position absolute
// 	top 6px
// 	left -25px
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
	p 
		font-size 3rem

</style>
