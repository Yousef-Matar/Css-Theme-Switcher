<template>
	<TopNavigation
		:theme="currentTheme"
		@changeTheme="(newTheme) => (currentTheme = newTheme)" />
	<main>
		<RouterView />
	</main>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import TopNavigation from "@/components/Navigation/TopNavigation.vue";
export default defineComponent({
	name: "App",
	components: { TopNavigation },
	data() {
		return {
			currentTheme: ""
		};
	},
	created() {
		this.currentTheme = localStorage.getItem("theme") || "light";
	},
	watch: {
		currentTheme: {
			handler(newTheme: string) {
				const bodyElement = document.body;
				this.currentTheme = newTheme;
				switch (this.currentTheme) {
					case "light":
						bodyElement.classList.replace("dark", this.currentTheme);
						break;
					case "dark":
						bodyElement.classList.replace("light", this.currentTheme);
						break;
				}
			},
			immediate: true
		}
	}
});
</script>

<style lang="scss"></style>
