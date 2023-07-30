<script>
</script>
hello world
<h1>hello world</h1>
<slot />

<style lang="stylus" global>
h1 {
    color:red;
}
html,body,div,img, section, h1, p, input, textarea, form, img
    box-sizing border-box
    margin 0
    padding 0
    max-width 100%
html
    scroll-behavior smooth

body 
    //background var(--gamma-lgtr)
    position relative
:root  
    --alpha-drkr #074745 // 7 61 69
    --alpha-drk #0a605c // 10 96 92
    --alpha-mid #0D7873
    --alpha-lgt #55a09d
    --alpha-lgtr #9ec9c7

    --beta-drkr #48070a // 72 7 10
    --beta-drk #600a0e
    --beta-mid #780d12
    --beta-lgt #933d41
    --beta-lgtr #bb8688

    --gamma-lgtst #f6f6f6;
    --gamma-lgtr #ececec;
    --gamma-lgt #bbbbbb;
    --ganmma-mid #808080;
    --gamma-drk #6c6c6c;
    --gamma-drkr #595959;
    --gamma-drkst #454545;
.grid 
    display grid
img  
    display block
    max-width 100%
    object-fit cover
    width 100%
    height 100%
p 
    color var(--gamma-drk)
    margin-bottom 1rem
h2 
    color var(--alpha-mid)
h3 
    color var(--alpha-drk)
.one 
    grid-area one
.two 
    grid-area two
.three  
    grid-area three
.four  
    grid-area four
</style>
