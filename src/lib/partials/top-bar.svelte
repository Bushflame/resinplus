<script>
	export let txt_1 = 'bollox';
</script>

<div class="headline">
	<p>{txt_1} &nbsp;</p>
</div>

<!-- <div class="top">
	<img src="/img/svg/logo.svg" alt="" />
</div> -->

<style lang="stylus">
.headline 
    background var(--alpha-drk)
    color #fff
    padding 16px 8px
    //background red
p 
    color #fff
    line-height 1.4
    margin 0 auto
    max-width 1020px
    text-align right
    width 100%
.top  
    border 1px solid blue
    display flex 
    align-items center
    justify-content space-between
    font-size 14px
    margin 0 auto
    padding .6rem
    width 100% //fit-content
img 
    //background rgba(255,255,255,.4)
    //border 1px solid red
    padding .6rem
    margin .5rem auto 0
    max-width 200px
    width 100%
// @media(min-width 720px)
//     .top 
//         //justify-content right
//         //margin-right 60px
//         width 24rem
</style>
