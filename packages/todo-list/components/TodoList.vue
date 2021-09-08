<template>
	<div class="todo-list">
		<h1>{{ msg }}</h1>
		<form @submit.prevent="add()">
			<input v-model="task" type="text" />
			<button type="submit">Add Todo</button>
		</form>
		<ul>
			<li v-for="(item, index) in tasks" :key="index">{{ item }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data() {
		return {
			task: '',
			tasks: [],
		};
	},
	methods: {
		add() {
			if (this.task.trim()) {
				this.tasks.push(this.task);
				this.task = '';
			}
		},
	},
};
</script>

<style scoped>
.todo-list {
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #282c34;
}

.todo-list input {
	height: 34px;
	outline: none;
	border: none;
	font-size: 20px;
	padding: 5px;
	border-radius: 5px;
}

.todo-list button {
	height: 44px;
	border-radius: 5px;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: #ffffff;
	color: #000000;
	font-weight: bold;
	padding: 10px;
	user-select: none;
	margin-left: 10px;
	transition: all 0.3s;
}

.todo-list form {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.todo-list ul {
	margin-right: auto;
}
</style>
