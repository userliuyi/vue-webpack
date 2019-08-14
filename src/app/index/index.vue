<template>
    <div class="index">
        <el-container style="border: 1px solid #eee">
            <el-aside style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                        <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                        <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header class="clearfix">
                    <div class="pull-right">
                        <span class="margin-right-10">王小虎</span>
                        <el-dropdown >
                            <i class="el-icon-setting margin-right-15"></i>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <span class="margin-right-10">{{$t('message.changeLaguage')}}</span>
                                    <el-radio-group v-model="currentLanguage" @change="changeLanguage">
                                        <el-radio label="en">{{$t('message.english')}}</el-radio>
                                        <el-radio label="zh">{{$t('message.chinese')}}</el-radio>
                                    </el-radio-group>
                                </el-dropdown-item>
                                <el-dropdown-item>{{$t('message.view')}}</el-dropdown-item>
                                <el-dropdown-item>{{$t('message.add')}}</el-dropdown-item>
                                <el-dropdown-item>{{$t('message.delete')}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data () {
        return {
            msg: '',
            currentLanguage: 'en'
        };
    },
    computed: {},
    watch: {},
    created () {},
    mounted () {},
    methods: {
        changeLanguage () {
            this.$i18n.locale = this.currentLanguage;
        }
    }
};
</script>
<style lang="scss">
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
       // line-height: 100px;
    }
  .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        //line-height: 300px;
        -webkit-transition: width 0.28s;
        transition: width 0.28s;
        width: 210px !important;
        background-color: #304156;
        height: 100%;
        position: fixed;
        font-size: 0px;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        //line-height: 200px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
    /* Vuejs的data中return一个{}的原因：因为不使用return包裹的数据会在项目的全局可见，会造成变量污染
       使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。
    */
</style>
