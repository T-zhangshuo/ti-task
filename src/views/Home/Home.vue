<template>
    <div class="content">
        <el-row class="full-h">
            <el-col class="full-h" :span="5" style="padding: 8px; position:relative">
                <el-input class="search-input" size="small" placeholder="搜索内容" prefix-icon="el-icon-search"
                          v-model="search">
                </el-input>
                <!-- 左边任务分组-->
                <TaskGroup/>
                <!-- 底部浮动的新增-->
                <div class="float-box">
                    <div class="add">
                        <i class="el-icon-plus"></i>
                    </div>
                </div>
                <!-- 更多的设置 -->
                <div class="float-set">
                    <i class="el-icon-more"/>
                </div>
            </el-col>
            <el-col :span="19" class="right-box full-h">
                <TaskList/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import TaskGroup from "../../components/TaskGroup";
    import TaskList from "../../components/TaskList";

    export default {
        name: 'Home',
        components: {
            TaskList,
            TaskGroup
        },
        data() {
            return {
                search: ''
            }
        },
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="stylus">
    .search-input {
        height 20px
        margin-top 40px
    }

    .float-set {
        position absolute
        height 40px
        top 2px
        right 8px

        i {
            color #515151
            font-size 16px
        }
    }

    .float-box {
        position absolute
        width 100%
        height 100px
        bottom 0
        left 0
        display flex
        flex-direction row
        align-items center
        justify-content center

        .add {
            width 40px;
            height 40px
            border-radius 25px
            background-color #0CB9FE
            box-shadow: 0 1px 8px #0CB9FE;
            display flex
            flex-direction row
            align-items center
            justify-content center

            i {
                font-size 20px
                color #FFFFFF
            }
        }
    }

    .right-box {
        background-color #FAFAFA
    }
</style>
