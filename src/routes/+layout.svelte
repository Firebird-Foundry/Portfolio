<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	let title = 'Firebird Foundry';
	onMount(() => {
		title = !document ? 'Firebird Foundry' : document.title;
	});
</script>

<div id="navBar" class="shadow-md bg-senary flex h-[6vh]">
	<div class="w-1/12 my-auto">
		<a href="/">
			<svg
				class="h-14 pl-32 m-auto fill-current text-tertiary hover:text-secondary"
				viewBox="0 0 1520 1520"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				xml:space="preserve"
				style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
			>
				<g transform="matrix(1,0,0,1,-8340,-300)">
					<g transform="matrix(1,0,0,1,1660,-140)">
						<path
							d="M7440,440C7859.45,440 8200,780.545 8200,1200C8200,1619.45 7859.45,1960 7440,1960C7020.55,1960 6680,1619.45 6680,1200C6680,780.545 7020.55,440 7440,440ZM8030,901.41L8030,1200C8030,1349.46 7974.3,1486.02 7882.5,1590.02C7882.5,1590.02 7881.73,1590.9 7881.73,1590.9C7865.57,1609.14 7848.31,1626.39 7830.03,1642.5C7830.03,1642.5 7828.8,1643.58 7828.8,1643.58C7721.45,1737.81 7581.45,1790.37 7438.6,1790L7438.6,1790L7141.41,1790C7231.15,1835.54 7332.6,1861.2 7440,1861.2C7804.93,1861.2 8101.2,1564.93 8101.2,1200C8101.2,1092.6 8075.54,991.151 8030,901.41ZM7100.65,1767.47C7007.14,1711.38 6928.61,1632.86 6872.53,1539.35L6979.98,1431.9C6979.77,1379.6 6979.56,1327.29 6979.65,1274.98L6979.66,1265L7895.43,1265L7893.51,1276.63C7890.15,1296.9 7885.45,1316.95 7879.3,1336.72C7834.9,1479.63 7719.63,1594.9 7576.72,1639.3C7532.5,1653.04 7486.3,1660 7440,1660C7440,1660 7239.61,1660 7208.12,1660L7100.65,1767.47ZM7738.59,610C7648.85,564.461 7547.4,538.8 7440,538.8C7075.07,538.8 6778.8,835.074 6778.8,1200C6778.8,1307.4 6804.46,1408.85 6850,1498.59L6850,1200C6850,1050.54 6905.7,913.984 6997.5,809.981C6997.5,809.981 6998.27,809.104 6998.27,809.104C7014.43,790.855 7031.69,773.612 7049.97,757.504C7049.97,757.504 7051.2,756.419 7051.2,756.419C7158.55,662.191 7298.55,609.631 7441.4,610.002C7441.4,610.002 7441.4,610 7441.4,610L7738.59,610ZM7779.35,632.53C7872.86,688.62 7951.39,767.144 8007.47,860.649L7900.02,968.101C7900.23,1020.4 7900.44,1072.71 7900.36,1125.02L7900.34,1135L6984.57,1135L6986.49,1123.37C6989.85,1103.1 6994.55,1083.05 7000.7,1063.28C7045.1,920.372 7160.37,805.096 7303.28,760.696C7347.5,746.957 7393.7,740 7440,740C7440,740 7671.88,740 7671.88,740L7779.35,632.53Z"
							fill="currentColor"
						/>
					</g>
				</g>
			</svg>
		</a>
	</div>
	<div class="w-11/12 flex text-right text-5xl">
		<h1 class="text-tertiary m-auto mr-32">{title}</h1>
	</div>
</div>
<div id="viewport" class="min-h-[89vh] p-4 sm:p-8 md:p-12 text-white">
	<slot />
</div>
<div id="footer" class="shadow-md bg-senary flex h-[5vh]">
	<div class="flex w-10/12 pl-32">
		<p class="my-auto text-tertiary">
			Website Created by Sonja Hanekom in Collaboration with Renton Mc Intyre
		</p>
	</div>
	<div class="w-2/12 pr-32 flex">
		<a
			href="mailto:firebirdfoundry@gmail.com"
			class="bg-quinary hover:bg-secondary rounded-2xl my-auto ml-auto h-12 w-12  flex"
		>
			<Icon icon="zondicons:at-symbol" class="h-9 w-9 m-auto text-senary" />
		</a>
		<a
			href="https://github.com/FirebirdFrankie/Portfolio"
			target="_blank"
			rel="noopener noreferrer"
			class="bg-quinary hover:bg-secondary rounded-xl my-auto mx-8 h-12 w-12  fflex"
		>
			<Icon icon="line-md:github-loop" class="h-10 w-10 m-auto text-senary" />
		</a>
		<a
			href="https://www.instagram.com/sonja_creates_/"
			target="_blank"
			rel="noopener noreferrer"
			class="bg-quinary hover:bg-secondary rounded-xl my-auto h-12 w-12 flex"
		>
			<Icon icon="ph:instagram-logo-bold" class="h-10 w-10 m-auto text-senary" />
		</a>
	</div>
</div>
