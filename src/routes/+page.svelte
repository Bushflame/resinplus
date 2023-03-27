<script>
	import Banner from '$lib/partials/banner.svelte';
	import Header from '$lib/partials/header.svelte';
	import List from '$lib/partials/list.svelte';
	import TopBar from '$lib/partials/top-bar.svelte';
	import Trio from '$lib/partials/trio.svelte';
	import TwoHeadFoot from '$lib/partials/two-head-foot.svelte';
	import TwoGridQuoted from '$lib/partials/two-grid-quoted.svelte';
	import ContactForm from '$lib/partials/contact-form.svelte';
	import Address from '$lib/partials/address.svelte';
	import Curve from '$lib/partials/curve.svelte';
	import Footer from '$lib/partials/footer.svelte';
	let bannerList = [
		'The eco-friendly solution',
		'No planning permission required',
		'All year round surface',
		'SuDS compliant'
	];
	let sudsList = [
		'Flash floods',
		'Damage to the local biome',
		'Damage to the infrastructure',
		'Damage to local property'
	];
	let sudsGuides = [
		'A management train – using a number of SuDS components in series and characterising areas into land use and drainage type.',
		'Source control – managing runoff as close as possible to where it falls as rain.',
		'Managing water on the surface – wherever possible, runoff should be managed on the surface.',
		'Early and effective engagement – consider the use of SuDS at the earliest stages of site selection and design.'
	];
</script>

<TopBar txt_1="0123 456 789 &nbsp;&nbsp; 01709 888110 &nbsp;&nbsp; info@resinplus.co.uk" />

<Header />
<Banner
	title={'RESIN GRAVEL SURFACING'}
	txt={'Drives, Paths and Patios'}
	linkTo={'/#contact'}
	linkTxt={'Contact'}
>
	<List
		--list-color="var(--alpha-mid)"
		--li-bg="transparent"
		--li-bdr="1px solid var(--alpha-mid)"
		arr={bannerList}
	/>
</Banner>
<section>
	<TwoGridQuoted>
		<Trio
			img_1="/img/boxed-drive.jpeg"
			img_2="/img/boxed-patio.jpeg"
			img_3="/img/boxed-path.jpeg"
		/>
	</TwoGridQuoted>
</section>
<section style="background: var(--gamma-lgtr">
	<TwoHeadFoot>
		<h2 slot="head">Sustainable Drainage Systems (SuDS)</h2>
		<span slot="one">
			<h3>Why We Need Them</h3>
			<p>
				Regulations, implemented in 2008, are designed to allow rainwater a natural run off as
				possible. When applied correctly they will help prevent...
			</p>

			<List
				--list-color="var(--gamma-drk)"
				--li-bg="transparent"
				--li-bdr="1px solid #000"
				arr={sudsList}
			/>
		</span>
		<span slot="two">
			<h3>Key Principles</h3>
			<List
				--list-color="var(--gamma-drk)"
				--li-bg="transparent"
				--li-bdr="1px solid #000"
				arr={sudsGuides}
			/>
		</span>
		<span slot="foot">
			<p>
				Please remember that these are rules, not suggestions. Failure to comply could prove costly.
			</p>
			<p>
				<strong>Tip:</strong> All resin gravel specialists should be fully aware of SuDS. When getting
				quotes, always ask how they plan to comply with it.
			</p>
		</span>
	</TwoHeadFoot>
</section>
<section>
	<TwoHeadFoot>
		<h2 slot="head">Resin Bound & Resin Bonded: The Difference</h2>
		<span slot="one">
			<h3>Resin Bound</h3>
			<p>Prior to laying, the gravel and resin are mixed together in a specially designed mixer.</p>
			<p>
				Resin bound gravel is porous, allowing rain water to soak through, making it SuDS compliant.
			</p>
			<p>Once dried, there is no loose gravel</p>
		</span>
		<span slot="two">
			<h3>Resin Bonded</h3>
			<p>A thin layer of resin is applied to the surface before the gravel is applied.</p>
			<p>Resin bonded gravel is not porous and therefore none SuDS compliant.</p>
			<p>
				While some of the gravel will stick to the surface, much of it remains loose and will need
				replacing.
			</p>
		</span>
	</TwoHeadFoot>
</section>
<Footer>
	<Address />
	<ContactForm />
</Footer>

<style lang="stylus">
section 
	padding 6rem 1rem 4rem
</style>
