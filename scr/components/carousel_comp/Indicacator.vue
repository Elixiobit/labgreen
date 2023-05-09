<template>
	<div class="carousel-indicators">
		<template v-for="n in counter" :key="n">
			<button v-if="(n - 1) === 0" class="active" type="button" data-bs-target="#myCarousel" :data-bs-slide-to="n - 1"
				aria-current="true" :aria-label="'Slide ' + (n - 1)"></button>
			<button v-else type="button" data-bs-target="#myCarousel" :data-bs-slide-to="n - 1"
				:aria-label="'Slide ' + (n - 1)"></button>
		</template>
	</div>
</template>

<script>

export default {
	name: "carouselItem",
	props: ['counter']
};




//     const carouselItem = {
//         props: ['counter']
//     };
//     export { carouselItem };
</script>




