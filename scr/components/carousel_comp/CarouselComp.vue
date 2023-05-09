<template>
	<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
		<carousel-item :counter="numberOfSlides"></carousel-item>
		<div class="carousel-inner">
			<div v-for="itemForCarousel in listForCarousel" class="carousel-item " :class="{ active: itemForCarousel.isAcive }"
				:key="itemForCarousel.id">
				<svg class="bd-placeholder-img" width="100%" height="100%" xmlns:="itemForCarousel.linkImgSVG" aria-hidden="true"
					preserveAspectRatio="xMidYMid slice" focusable="false">
					<rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
				</svg>
				<div class="container">
					<div class="carousel-caption text-start">
						<h1>{{ itemForCarousel.article }}</h1>
						<!-- <p>Some representative placeholder content for the first slide of the carousel.</p>
              <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>  -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import carouselItem from "./Indicacator.vue";

const carousel = {
	components: {
		carouselItem,
	},
	data() {
		return {
			listForCarousel: [
				{ id: 1, linkImgSVG: "http://www.w3.org/2000/svg", article: "Картинка 1", isAcive: true },
				{ id: 2, linkImgSVG: "http://www.w3.org/2000/svg", article: "Картинка 2", isAcive: false },
				{ id: 3, linkImgSVG: "http://www.w3.org/2000/svg", article: "Картинка 3", isAcive: false },
			]
		}
	},
	computed: {
		numberOfSlides() {
			return this.listForCarousel.length;
		}
	}
}

export default carousel;
</script>