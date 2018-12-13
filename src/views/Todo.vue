<template>
	<section class="todoapp">
		<div class="wrapper">
			<app-header :heading="todoText[1]"></app-header>
			<input class="new-todo"
			       autofocus autocomplete="off"
			       :placeholder="todoText[0]"
			       v-model="newTodo"
			       @keyup.enter="addTodo"
			       @blur="addTodo">
			<section class="main" v-show="todos.length" v-cloak>
				<ul class="todo-list">
					<li v-for="todo in todos"
					    class="todo"
					    :key="todo.id"
					    :class="{ completed: todo.completed, editing: todo == editedTodo }">
						<div @click="toggleTodoCotrols(todo)" class="view">
							<label class="checkbox-label">
								<input class="toggle" type="checkbox" v-model="todo.completed">
								<span class="toggle-checkbox"></span>
							</label>
							<label class="label-edit">{{ todo.title }}</label>
							<button v-show="todo == selectedTodo" class="edit-btn" @click="editTodo(todo)"></button>
							<button v-show="todo == selectedTodo" class="destroy" @click="removeTodo(todo)"></button>
						</div>
						<input class="edit" type="text"
						       v-show="todo == editedTodo"
						       v-model.lazy="todo.title"
						       v-todo-focus="todo == editedTodo"
						       @blur="doneEdit(todo)"
						       @keyup.enter="doneEdit(todo)"
						       @keyup.esc="cancelEdit(todo)">
					</li>
				</ul>
			</section>
		</div>
	
	</section>
</template>

<script>
	import store from '../store';
	import Header from '../components/Header';
	import { mapState } from 'vuex';

	export default {
		name: 'Todo',

		components: {
			'app-header': Header
		},

		data() {
			return {
				newTodo: '',
				editedTodo: null,
				selectedTodo: null,
				visibility: 'all',
				todos: [],
			}
		},
		
		watch: {
			todos: {
				handler(todos) {
					this.updateSettings();
				},
				deep: true
			}
		},
		
		computed: {
			...mapState([
				'todoText',
				'settingsData'
			]),
		},
		
		methods: {
			addTodo() {
				var value = this.newTodo && this.newTodo.trim()
				if (!value) {
					return
				}
				this.todos.unshift({
					id: this.todos.length + 1,
					title: value,
					completed: false
				});
				this.newTodo = ''
			},
			
			removeTodo(todo) {
				this.todos.splice(this.todos.indexOf(todo), 1)
			},
			
			editTodo(todo) {
				this.beforeEditCache = todo.title
				this.editedTodo = todo
			},
			
			toggleTodoCotrols(todo) {
				if (!this.selectedTodo) {
					this.selectedTodo = todo;
				} else {
					this.selectedTodo = null;
				}
			},
			
			doneEdit(todo) {
				if (!this.editedTodo) {
					return
				}
				this.editedTodo = null
				todo.title = todo.title.trim()
				if (!todo.title) {
					this.removeTodo(todo)
				}
			},
			
			cancelEdit(todo) {
				this.editedTodo = null
				todo.title = this.beforeEditCache
			},

			async updateSettings() {
				const settingsUrl = 'https://istok.hiddenpool.tech/update-settings';
				const currentSettingsData = { settings: Object.assign(this.settingsData, { todos: this.todos}) };
				const requestConfig = {
					params: {
						authKey: localStorage.getItem('Istok-Auth-Key')
					}
				};
				this.$http.post(settingsUrl, currentSettingsData, requestConfig);
			}
		},
		
		directives: {
			'todo-focus'(el, binding) {
				if (binding.value) {
					el.focus()
				}
			}
		},

		created() {
			this.todos = this.settingsData.todos || [];
		},

		beforeDestroy() {
			this.updateSettings();
		},

		destroyed() {
			this.$store.dispatch('getSettingsData');
		}
	}
</script>


<style lang="scss" scoped>
	@import "../scss/mixins";
	
	.new-todo {
		width: get-vw(290px);
		padding: get-vw(9px) get-vw(10px);
		font-size: get-vw(14px);
		font-family: "Geometria", Arial, Helvetica, sans-serif;
		border-radius: get-vw(7px);
		border: none;
		background-color: rgba(#E5E5EE, .3);
		color:  #00bec1;
		margin: get-vw(25px) get-vw(15px) get-vw(2px);
		text-align: center;
		border: get-vw(1px) solid transparent;
		
		&::placeholder {
			color: #00bec1;
		}
		
		&:focus {
			outline: none;
			border: get-vw(1px) solid #00bec1;
			background-color: #fff;
			color: #000;
		}
	}
	
	.todo-list {
		list-style-type: none;
		margin: 0;
		margin-top: get-vw(10px);
		padding: 0 get-vw(15px);
	}
	
	.view {
		position: relative;
		padding: get-vw(10px) 0;
		display: flex;
		border-bottom: get-vw(1px) solid rgba(#000, .05);
	}
	
	.toggle-checkbox {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: get-vw(25px);
		height: get-vw(25px);
		border: get-vw(1px) solid #00bec1;
		border-radius: 50%;
		margin: auto 0;
	}
	
	.toggle {
		margin: 0;
		position: absolute;
		top: -10000vw;
		left: -10000vw;
	}
	
	.toggle:checked + .toggle-checkbox {
		background-color: #00bec1;
	}
	
	.toggle:checked + .toggle-checkbox::after {
		content: "";
		position: absolute;
		left: get-vw(-1px);
		top: get-vw(0px);
		width: get-vw(25px);
		height: get-vw(25px);
		background-image: url('../assets/check.svg');
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: 65%;
	}
	
	.edit {
		position: absolute;
		top: get-vw(8px);
		right: 0;
		width: get-vw(259px);
		padding: get-vw(7px) get-vw(10px) get-vw(7px) get-vw(2px);
		font-size: get-vw(14px);
		font-family: "Geometria", Arial, Helvetica, sans-serif;
	}
	
	.label-edit {
		font-family: "Geometria", Arial, Helvetica, sans-serif;
		margin: 0;
		display: block;
		width: 100%;
		padding: get-vw(7px) get-vw(10px);
		font-size: get-vw(14px);
		flex-grow: 1;
	}
	
	.todo {
		position: relative;
		
		&:last-child .view {
			border: none;
		}
	}
	
	.checkbox-label {
		width: get-vw(28px);
	}
	
	.edit-btn,
	.destroy {
		padding: 0;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
		width: get-vw(30px);
		height: 100%;
		border: none;
		background-color: #fff;
		background-size: 60%;
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
	
	.edit-btn {
		background-size: 70%;
		right: get-vw(29px);
		background-image: url("../assets/pencil.svg");
	}
	
	.destroy {
		background-image: url("../assets/delete.svg");
	}
	
	.editing .label-edit {
		overflow: hidden;
		height: get-vw(32px);
	}
	
	.completed .label-edit {
		opacity: .3;
		text-decoration: line-through;
	}

</style>
