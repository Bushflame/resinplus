<div class="curved">x</div>

<style lang="stylus">
.curved 
    background green //var(--beta-lgtr) // put on html
    height 12rem
    position relative
    width 100% 
    max-width 100%
    border-radius  0 0  100% 0
    // left 0 //1rem //0//.5rem
    // right 0 ///.5rem
    // top 0
    margin auto
    z-index -10
.curved::after
    content ''
    background red //#fff
    //border-radius  0 0  100% 0
    position absolute
    height 100%
    width 100%
    z-index -10
</style>
