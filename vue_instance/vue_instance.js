var vue = new Vue({
    el: '#app',
    data: {
        doubleMustache: '双大括号进行数据绑定',
        bindMessage: 'bind 进行数据绑定',  //angularjs通过ng-bind进行绑定
        bindHtml: '<span style="color: green;">绑定html格式文本</span>',   //angularjs通过ng-bind-html进行绑定
        htmlFeature: 'html特性',
        seen: true,
        count: 1,
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ],
        objs: {
            name: 'mao',
            age: 815,
            sex: 'male'
        },
        message: '',
        reversedMessage: '',
        computedMessage: '',
        reversedComputedMessage: ''
    },
    methods: {
        reversedMessageFun: function(){
            console.log('我是method,我被执行了');
            this.reversedMessage = this.message.split('').reverse().join('');
        }
    },
    computed: {
        reversedComputedMessageFun: function(){
            console.log('我是computed,我被执行了');
            // this.reversedComputedMessage = this.computedMessage.split('').reverse().join('');
            return "";
        }
    },
    watch: {
        message: function(newValue, oldValue){
            console.log('message从' + oldValue + '改变成了' + newValue);
        }
    }

});