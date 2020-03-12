<template>
    <div class="content">
        <el-row>
            <el-col :span="5" style="padding: 8px; position:relative">
                <el-input
                        class="search-input"
                        size="small"
                        placeholder="搜索内容"
                        prefix-icon="el-icon-search"
                        v-model="search">
                </el-input>
                <draggable class="list-group" v-model="groupArray" @start="drag=true" @end="drag=false">
                    <div class="list-item" v-for="(item,index) in groupArray" :key="index">
                        <div>
                            <i class="el-icon-folder" :class="item.check?'active':''"></i>
                            <span class="name" :class="item.check?'active':''">{{item.name}}</span>
                        </div>
                        <div>
                            <span class="num" :class="item.check?'active':''">20/20</span>
                        </div>
                    </div>
                </draggable>

                <div class="float-box">
                    <div class="add">
                        <i class="el-icon-plus"></i>
                    </div>
                </div>

                <div class="float-set">
                    <i class="el-icon-more"/>
                </div>
            </el-col>
            <el-col :span="19" class="right-box">

            </el-col>
        </el-row>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: 'Home',
        components: {
            draggable
        },
        data() {
            return {
                search: '',
                groupArray: [{
                    id: 1,
                    name: '标题1',
                    check: false
                }, {
                    id: 2,
                    name: '标题2',
                    check: true
                }, {
                    id: 3,
                    name: '标题3',
                    check: false
                }, {
                    id: 4,
                    name: '标题4',
                    check: false
                }, {
                    id: 5,
                    name: '标题5',
                    check: false
                }]
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

    .list-group {
        width 100%
        height 40px
        margin-top 10px

        .list-item {
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            padding-left 8px
            padding-right 8px

            div {
                display flex
                flex-direction row
                align-items center

                .icon {
                    font-size 14px
                    color #1A1A1A
                }

                .name {
                    margin-left 8px
                    font-size 16px
                    color #1A1A1A
                }

                .num {
                    font-size 8px
                    color #7A7A7A
                }

                .active {
                    color #0CB9FE
                }
            }
        }
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
