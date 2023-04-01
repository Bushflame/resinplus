<script>
	import { onMount } from 'svelte';

	onMount(async () => {
		var d = new Date();
		var currentTime = d.toLocaleTimeString();
		var now = (document.getElementById('time').value = currentTime);
		var form = document.getElementById('myForm');
		var twat = () => {
			document.getElementById('myForm').reset();
			setTimeout(() => [(document.getElementById('toast').style = 'height: 0; padding: 0 ')], 2000);
		};
		form.addEventListener('submit', (e) => {
			e.preventDefault();
			fetch(form.action, {
				method: 'POST',
				body: new FormData(document.getElementById('myForm'))
			})
				.then((response) => response.json())
				.then((html) => {
					document.getElementById('toast').style = 'height: 100%; padding 0';
					twat();
				});
		});
	});
</script>

<div class="message-form-wrap">
	<form
		action="https://script.google.com/macros/s/AKfycbzd54YeHi5lUAF3J_FaRYPDwTEkGZ4g3seGNvKofJMrVq8boAC8bLljBFSWLc5YHm-eiQ/exec"
		method="post"
		target="hidden_iframe"
		onsubmit="submitted=true;"
		id="myForm"
		class="myForm"
	>
		<div class="set one">
			<span>Name</span>
			<input type="text" name="Name" class="input" />
		</div>
		<div class="set two">
			<span>Email</span>
			<input type="email" name="Email" class="input" required placeholder="required" />
		</div>
		<div class="set three">
			<span>Message</span>
			<textarea
				name="Message"
				cols="30"
				rows="6"
				resize="none"
				placeholder="Required"
				required
				class="txt-area"
			/>
		</div>
		<div class="set four send">
			<input type="submit" value="Submit" />
			<input type="text" name="Time" id="time" />
		</div>
	</form>

	<div id="toast">
		<h3>
			Success<br />Your message has been sent and you will be contacted shortly
		</h3>
	</div>
</div>

<style lang="stylus">
#toast 
    display flex
    align-items center
    height 0
    width 100%
    background rgba(0,0,0,.4) //var(--beta-lgt)
    // padding 2rem
    overflow hidden
    max-width 100%
    color blue //#fff
    text-align center
    transition height .5s
    z-index 6
#time 
    display none
.message-form-wrap 
    background rgba(255,255,255,.1)
    display grid 
    grid-template-columns: 1fr
    width 100%
    max-width 400px
    padding 32px auto
    #toast, form 
        grid-area 1 / 1
.one 
    grid-area one 
.two 
    grid-area two
.three 
    grid-area three
.four 
    grid-area four
.myForm 
    display grid 
    grid-template-columns: 1fr 
    grid-template-areas: 'one' 'two' 'three' 'four'
    gap 1rem
    width 100% 
    max-width 600px

    padding 1rem
    // position relative
    z-index 5
    .input, .txt-area 
        display block
        font-size 1rem
        width 100%
        background rgba(255,255,255, .1)
        border 0
        color #fff
        padding .6rem
        // border-bottom 1px solid red
        outline none 
    textarea 
        border 1px solid #fff
        resize none
        width 100%
    .input 
        min-height 2rem
    .send        
        color #fff
        margin-left auto
        width 100%
        max-width 10rem
        // padding .6rem 
        input 
            background rgba(255,255,255, .1) 
            border 0
            color #fff
            cursor pointer
            font-size 1.4rem
            font-weight 400
            padding .6rem
            width 100%
            height 100%
            min-height 2rem
            outline none

    span  
        color #fff
@media(min-width 660px)
    .myForm 
        grid-template-columns: 1fr 1fr
        grid-template-areas: 'one two' 'three three' 'four four'
</style>
