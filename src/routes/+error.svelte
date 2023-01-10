<!-- Adapted from: https://codepen.io/remid/pen/YOVawm -->

<script lang="ts">
	import { ffLoading } from '$lib/stores';
</script>

<div class="fourOhFour flex flex-1">
    {#each [...Array(20).keys()] as i}
        <span class="particle text-quarternary">4</span>
    {/each}

    {#each [...Array(20).keys()] as i}
        <span class="particle text-secondary">0</span>
    {/each}

    
    {#each [...Array(20).keys()] as i}
        <span class="particle text-primary">4</span>
    {/each}
    
    <div class="content text-secondary">
        <p>Damnit stranger,</p>
        <p>You got lost in the 404 galaxy.</p>
        <a href="/" on:click={() => ffLoading.set(true)}>go back to earth.</a>
    </div>
</div>

<style lang="scss">
    $anims: float, floatReverse,float2, floatReverse2;
$easeSmooth: cubic-bezier(0.39,0.575,0.28,0.995);
$color: #595959;

* {box-sizing: border-box;}

.fourOhFour {
	position: relative;
	display: flex;
	justify-content: center;
	font-family: arial, sans-serif;
	overflow: hidden;
    align-self: stretch;
}

.content {
    @apply bg-tertiary;
	position: relative;
	width: 600px;
	max-width: 100%;
	margin: 20px;
	padding: 60px 40px;
	text-align: center;
    max-height: 30%;
    margin:auto;
	box-shadow: -10px 10px 67px -12px rgba(0,0,0,0.2);
	opacity: 0; 
	animation: apparition 0.8s 1.2s $easeSmooth forwards;
	
	p {
		font-size: 1.3rem;
		margin-top: 0;
		margin-bottom: 0.6rem;
		letter-spacing: 0.1rem;
		color: $color;
        @apply text-secondary;
		
		&:last-child{margin-bottom: 0;}
	}
	
	a {
		display: inline-block;
		margin-top: 2rem;
		padding: 0.5rem 1rem;
		border: 3px solid $color;
		background: transparent;
		font-size: 1rem;
		color: $color;
		text-decoration: none;
		cursor: pointer;
		font-weight: bold;
        @apply text-secondary;
	}
}

.particle {
	position: absolute;
	display: block;
	pointer-events: none;
	
	@for $i from 1 through 80 {
		&:nth-child(#{$i}){
			$size: random(20) + 10;
			$blur: $i * 0.02;
			$speed: random(20)+20; 
			$delay: random(10)*0.1;
			$anim: nth($anims, random(length($anims)));
			
			top: calc(random(100) / (100 + $size/8) * 100%);
			left: calc(random(100) / (100 + $size/10) * 100%);
			font-size: $size + px;
			filter: blur( (#{$blur}) + px);
			animation: $speed+s  $anim infinite;
		}
	}
}

@keyframes apparition {
	from {
		opacity: 0;
		transform: translateY(100px);
	}
	
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes float {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(180px);
	}
}

@keyframes floatReverse {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(-180px);
  }
}
	
@keyframes float2 {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(28px);
	}
}

@keyframes floatReverse2 {
  0%,100% {
    transform: translateY(0);
	}
  50% {
    transform: translateY(-28px);
	}
}

@mixin animation ($delay, $duration, $animation) {
  animation-delay: $delay;
  animation-duration: $duration;
  animation-name: $animation;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
}
</style>