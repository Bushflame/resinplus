<script>
</script>

<div class="footer" id="contact">
	<div class="liner">
		<slot />
	</div>
	<div class="foot">
		<a href="#top"> Back to top</a>
		<p>All rights reserved ©resinplus.co.uk(2023)</p>
	</div>
</div>

<style lang="stylus">
.footer
    background var(--alpha-drkr)
    min-height 400px
    padding 4rem 1rem 1rem
    position relative
    width 100%
.foot 
    padding 32px 16px 10px
p 
    color #fff
    text-align center
a  
    //border 1px solid #fff
    color #fff
    display block
    margin 1rem auto
    text-align center
    width 12rem
.liner 
    display grid 
    gap 16px
    grid-template-columns 1fr
    margin auto
    max-width 960px
    width fit-content //100%
@media(min-width 720px)
    .liner 
        grid-template-columns 1fr 1fr
</style>
