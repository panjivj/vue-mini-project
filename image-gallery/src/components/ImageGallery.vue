<template>
	<div class="mx-auto max-w-2xl text-center mt-10">
		<div class="header mx-auto" id="myHeader">
			<h1 class="text-lg text-violet-600 font-bold">Image Gallery</h1>
			<p class="text-gray-800">Click on the buttons to change the grid view.</p>
			<button class="my-button" v-on:click="changeColumn(4)">4 columns</button>
			<button class="my-button" v-on:click="changeColumn(2)">2 columns</button>
			<button class="my-button" v-on:click="changeColumn(1)">1 column</button>
		</div>
		<div class="text-center">
			<div :class="myStyle">
				<div v-for="index in 16" :key="index" class="px-2">
					<transition name="bounce">
						<img
							v-if="show"
							src="https://picsum.photos/800"
							alt="photo"
							class="bg-white rounded-xl drop-shadow-xl m-3 mx-auto"
						/>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";

const show = ref(true);

var myStyle = ref({ column2: true });

function changeColumn(c) {
	if (c === 1) {
		myStyle.value = { column1: true };
	} else if (c === 4) {
		myStyle.value = { column4: true };
	} else {
		myStyle.value = { column2: true };
	}
}
</script>
<style scoped>
.column4 {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
}
.column2 {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}
.column1 {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
}

/* * {
	outline: 1px solid red;
} */
</style>
