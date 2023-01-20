<template>
	<nav class="navbar">
		<ul class="navbar-nav">
			<RouterLink
				:to="{ name: 'HomeView' }"
				class="nav-item">
				Home
			</RouterLink>
			<RouterLink
				:to="{ name: 'AboutView' }"
				class="nav-item">
				About
			</RouterLink>
			<RouterLink
				:to="{ name: 'LoginView' }"
				class="nav-item">
				Login
			</RouterLink>
			<a
				v-if="theme == 'light'"
				class="color-preview theme--dark"
				href="#"
				@click="changeTheme('dark')">
				Dark
			</a>
			<a
				v-if="theme == 'dark'"
				class="color-preview theme--light"
				href="#"
				@click="changeTheme('light')">
				Light
			</a>
		</ul>
	</nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "TopNavigation",
	props: {
		theme: String
	},
	methods: {
		changeTheme(theme: string) {
			localStorage.setItem("theme", theme);
			this.$emit("changeTheme", theme);
		}
	}
});
</script>
<style scoped lang="scss">
.navbar {
	height: 70px;
	width: 100%;
	ul {
		&.navbar-nav {
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			height: 100%;
			gap: 0.5rem;
			a {
				display: flex;
				align-items: center;
				width: 100%;
				height: 100%;
				size: 0.7rem;
				font-weight: bold;
			}
			.color-preview {
				gap: 0.25rem;
				&::before {
					content: " ";
					border-width: 2px;
					border-style: solid;
					border-radius: 50%;
					width: 2rem;
					height: 2rem;
					display: inline-block;
					vertical-align: middle;
				}
			}
		}
	}
}
</style>
