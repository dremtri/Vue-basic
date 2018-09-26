Vue.component('my-component-head', {
    template: '<div>我是head</div>'
});

Vue.component('MyComponentBody', {
    template: '<div>我是body</div>'
});

var componentFooter = {
    template: '<div>我是footer</div>'
};

Vue.component('slot-component', {
    data: function(){
        return {
            message: '子组件作用域'
        };
    },
    template: `
        <div>
            我是组件内容
            <slot></slot>
        </div>
    `
});

Vue.component('slot-component-name', {
    template: `
        <div>
            <header>
                <slot name="header"></slot>
            </header>
            <main><slot></slot></main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `
});

Vue.component('blog-element', {
    props: ['blog'],
    methods: {
        changeColor: function(color){
            color = color || 'grey';
            this.$emit('change-color-event', color);
        }
    },
    template: `
        <div>
            <h3>{{blog.title}}</h3>
            <div v-html="blog.content"></div>
            <button v-on:click="changeColor('red')">字体变色</button>
        </div>
    `
});

var vue = new Vue({
    el: '#app',
    components: {
        'component-footer': componentFooter
    },
    methods: {
        changeColorParent: function(color){
            this.color = color;
        }
    },
    data: {
        color: "",
        message: "Hello kk",
        blogs: [
            {
                id: 1,
                title: 'My journey with Vue',
                content: 'Hello mao'
            },
            {
                id: 2,
                title: 'Blogging with Vue',
                content: 'Hello dremtri'
            },
            {
                id: 3,
                title: 'Why Vue is so fun',
                content: 'Hello yu'
            }
        ]
    }
});