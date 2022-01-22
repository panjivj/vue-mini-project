<template>
	<div class="mx-auto max-w-2xl text-center">
		<div class="header mx-auto" id="myHeader">
			<h1 class="text-lg text-indigo-500 font-bold">Image Gallery</h1>
			<p>Click on the buttons to change the grid view.</p>
			<button :class="btnActive" :onclick="change4">4 image</button>
			<button :class="btnActive" :onclick="change2">2 image</button>
			<button :class="btnActive" :onclick="change1">1 image</button>
		</div>
		<div class="text-center">
			<div :class="myStyle">
				<div v-for="index in 16" :key="index" class="px-2">
					<img
						src="https://picsum.photos/800"
						alt="photo"
						class="bg-white rounded-xl shadow-md m-3 mx-auto"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from "vue";

var myStyle = ref({ wd50: true });
var btnActive = ref({ btn: true });

function change4() {
	myStyle.value = { wd25: true };
	// btnActive.value = { active: true };
}
function change2() {
	myStyle.value = { wd50: true };
	// btnActive.value = { active: true };
}
function change1() {
	myStyle.value = { wd100: true };
	// btnActive.value = { active: true };
}
</script>
<style scoped>
/* * {
	outline: 1px solid red;
} */

.wd25 {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
}
.wd50 {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
}
.wd100 {
	display: grid;
	grid-template-columns: repeat(1, 1fr);
}

/* Button */
.btn {
	border: none;
	outline: none;
	padding: 10px 16px;
	background-color: #f1f1f1;
	cursor: pointer;
	font-size: 18px;
}

.btn:hover {
	background-color: #ddd;
}

/* .active {
	border: none;
	outline: none;
	padding: 10px 16px;
	cursor: pointer;
	font-size: 18px;
	background-color: #666;
	color: white;
} */
</style>
