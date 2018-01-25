new Vue({
    el: '#app',
    mounted: function() {
        const that = this;
        window.onresize = function temp() {
            that.winHeight.height = document.documentElement.clientHeight + 'px';
        };
    },
    data: function() {
        return {
            isShow: true,
            selectedmenu: "",
            selectedpath: "",
            winHeight: {
                height: document.documentElement.clientHeight + 'px'
            },
            menus: [{
                id: '1',
                name: '首页',
                icon: 'home'
            }, {
                id: '2',
                name: '管理模块',
                icon: 'settings'
            }, {
                id: '3',
                name: '联动模块',
                icon: 'dashboard',
                children: [{
                    id: '3-1',
                    name: '联动配置',
                    children: [{
                        id: '3-1-1',
                        name: '联动基础'
                    }, {
                        id: '3-1-2',
                        name: '联动硬件'
                    }]
                }, {
                    id: '3-2',
                    name: '分析联动'
                }, {
                    id: '3-3',
                    name: '监察模块'
                }, {
                    id: '3-4',
                    name: '接口管理',
                    children: [{
                        id: '3-4-1',
                        name: '接口对接'
                    }, {
                        id: '3-4-2',
                        name: '接口安全设置'
                    }]
                }]
            }, {
                id: '4',
                name: '证照管理',
                icon: 'launch'
            }],
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
        }
    },
    methods: {
        show: function() {
            this.isShow = !this.isShow;
        },
        toPage: function(url) {
            alert(url);
        },
        selected: function(key, keyPath) {
            this.selectedmenu = key;
            this.selectedpath = keyPath;
        }
    },
    computed: {
        locals: function() {
            if (this.selectedpath != null && this.selectedpath != "") {
                return (this.selectedpath + "").split(",");
            } else {
                return [];
            }
        }
    }
})