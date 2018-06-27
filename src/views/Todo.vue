<template>
<section class="todoapp">
<div class="wrapper">
  <header class="header">
    <h1 class="heading">Список задач</h1>
    <a @click="toCards" class="to-cards"></a>
    <input class="new-todo"
      autofocus autocomplete="off"
      placeholder="Что должно быть сделано?"
      v-model="newTodo"
      @keyup.enter="addTodo"
      @blur="addTodo">
  </header>
  <section class="main" v-show="todos.length" v-cloak>
    <!-- <input class="toggle-all" type="checkbox" v-model="allDone"> -->
    <ul class="todo-list">
      <li v-for="todo in filteredTodos"
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
  <!-- <footer class="footer" v-show="todos.length" v-cloak>
    <span class="todo-count">
      <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
    </span>
    <ul class="filters">
      <li><a href="#/all" :class="{ selected: visibility == 'all' }">All</a></li>
      <li><a href="#/active" :class="{ selected: visibility == 'active' }">Active</a></li>
      <li><a href="#/completed" :class="{ selected: visibility == 'completed' }">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="removeCompleted" v-show="todos.length > remaining">
      Clear completed
    </button>
  </footer> -->
</div>

</section>
</template>

<script>
import store from '../store';
// Full spec-compliant TodoMVC with localStorage persistence
// and hash-based routing in ~120 effective lines of JavaScript.


// localStorage persistence
var STORAGE_KEY = 'todos-vuejs-2.0'
var todoStorage = {
  fetch() {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export default {
  name: 'Todo',
  store,
  data() {
    return {
      todos: todoStorage.fetch(),
      newTodo: '',
      editedTodo: null,
      selectedTodo: null,
      visibility: 'all'
    }
  },

  // watch todos change for localStorage persistence
  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },

  // computed properties
  // http://vuejs.org/guide/computed.html
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
    remaining() {
      return filters.active(this.todos).length
    },
    allDone: {
      get() {
        return this.remaining === 0
      },
      set(value) {
        this.todos.forEach(function (todo) {
          todo.completed = value
        })
      }
    }
  },

  filters: {
    pluralize(n) {
      return n === 1 ? 'item' : 'items'
    }
  },

  // methods that implement data logic.
  // note there's no DOM manipulation here at all.
  methods: {
    addTodo() {
      var value = this.newTodo && this.newTodo.trim()
      if (!value) {
        return
      }
      this.todos.unshift({
        id: todoStorage.uid++,
        title: value,
        completed: false
      })
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

    removeCompleted() {
      this.todos = filters.active(this.todos)
    },

    toCards() {
      this.$router.push('card');
    }
  },

  // a custom directive to wait for the DOM to be updated
  // before focusing on the input field.
  // http://vuejs.org/guide/custom-directive.html
  directives: {
    'todo-focus'(el, binding) {
      if (binding.value) {
        el.focus()
      }
    }
  }
}

// visibility filters
var filters = {
  all(todos) {
    return todos
  },
  active(todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed(todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}

.heading {
  text-align: center;  
  color: #1F236D;
}

.new-todo {
  width: 100%;
  padding: 17px 10px;
  font-size: 25px;
}

.todo-list {
  list-style-type: none;
  margin: 0;
  margin-top: 10px;
  padding: 0 10px;
}

.view {
  position: relative;
}

.toggle-checkbox {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border: 2px solid #1F236D;
  border-radius: 50%;
  margin: auto 0;
}

.toggle {
  margin: 0;
  position: absolute;
  top: -10000vw;
  left: -10000vw;
}

.toggle:checked + .toggle-checkbox::after,
.toggle:checked + .toggle-checkbox::before {
  content: "";
  position: absolute;
  top: 17px;
  left: 11.4px;
  width: 21px;
  height: 3px;
  border-radius: 100px;
  background-color: #1F236D;
  transform: rotate(-52deg);
}

.toggle:checked + .toggle-checkbox::before {  
  content: "";
  position: absolute;
  top: 22px;
  left: 6px;
  width: 12px;
  height: 3px;
  border-radius: 100px;
  background-color: #1F236D;
  transform: rotate(52deg);
}

.edit {
  position: absolute;
  top: 0;
  left: 44px;
  width: 85%;
  padding: 8px 10px 6px 10px;
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
}

.label-edit {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  display: block;
  width: 100%;
  padding: 7px 10px;
  font-size: 25px;
  word-break: break-all;
  flex-grow: 1;
}

.todo {
  position: relative;
}

.view {
  padding: 3px 0;
  display: flex;
}

.checkbox-label {
  width: 53px;
}

.edit-btn,
.destroy {
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 50px;
  height: 50px;
  border: 2px solid #000;
  border-radius: 50%;  
  background-color: #fff;
  background-size: 25px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}

.edit-btn {
  right: 55px;
  background-image: url("../assets/pencil.svg");
}

.destroy {
  background-image: url("../assets/delete.svg");
}

.editing .label-edit {
  overflow: hidden;
  word-break: keep-all;
}

.completed .view {
  opacity: .6;
  text-decoration: line-through;
}

.to-cards {
  position: absolute;
  top: 17px;
  right: 16px;
  display: block;
  width: 40px;
  height: 40px;
  background-image: url("../assets/points.svg");
  background-size: contain;
}

.header {
  padding-top: .1px;

}

</style>
