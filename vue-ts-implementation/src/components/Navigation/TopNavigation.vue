<template>
	<nav class="navbar">
		<ul class="navbar-nav">
			<li class="nav-item">Home</li>
			<li class="nav-item">About</li>
			<!-- Dropdown -->
			<li class="nav-item has-dropdown">
				<a href="#">Theme</a>
				<ul class="dropdown">
					<li class="dropdown-item">
						<a
							class="preview-color light"
							href="#"
							@click="changeTheme('light')">
							Light
						</a>
					</li>
					<li class="dropdown-item">
						<a
							class="preview-color dark"
							href="#"
							@click="changeTheme('dark')">
							Dark
						</a>
					</li>
				</ul>
			</li>
			<li class="nav-item">Login</li>
		</ul>
	</nav>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "HelloWorld",
	props: {
		msg: String
	},
	methods: {
		changeTheme(theme: string) {
			console.log(theme);
		}
	}
});
</script>
