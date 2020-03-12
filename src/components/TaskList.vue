<template>
    <div class="content" style="background-color: #FAFAFA">
        <!--顶部的标题布局-->
        <div class="title-top">
            <!--分组的标题-->
            <div class="left">
                <el-input placeholder="修改分组名" @focus="group.focus = true" @blur="group.focus = false"
                          v-model="group.name" maxlength="8"/>
                <div class="line-box">
                    <div class="line" :class="{'active': group.focus}"></div>
                </div>
            </div>
            <!--顶部右边的布局-->
            <div class="right">
                <i class="el-icon-more"/>
            </div>
        </div>
        <!-- 下面的任务列表-->
        <div class="list-box" v-infinite-scroll="getTaskList" infinite-scroll-disabled="disabled">
            <ul class="list">
                <li v-for="(item,index) in taskList" class="list-item" :key="index">{{item.name}}</li>
            </ul>
            <p v-if="loading" style="margin-top:10px;" class="loading">
                <span><i class="el-icon-loading"/>加载中..</span>
            </p>
        </div>
        <!--底部的输入-->
        <div class="foot-box">
            <i class="el-icon-plus"/>
            <el-input placeholder="添加任务" v-model="addTaskName" clearable maxlength="20" show-word-limit/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TaskList",
        data() {
            return {
                group: {
                    name: '标题',
                    focus: false
                },
                count: 0,
                loading: false,
                totalPages: 10,
                taskList: [],
                addTaskName: ''
            }
        },
        created() {
            this.getTaskList();
        },
        computed: {
            noMore() {
                return this.count > this.totalPages;
            },
            disabled() {
                return this.loading || this.noMore;
            }
        },
        methods: {
            getTaskList() {
                this.loading = true;
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        let value = this.count * 10 + i + "啊";
                        this.taskList.push({
                            item: value
                        })
                    }
                    this.count++;
                    // this.loading = false;
                }, 2000)
            }
        }
    }
</script>

<style lang="stylus">

    .title-top {
        width 100%
        height 60px
        display flex
        flex-direction row
        justify-content space-between
        align-items center

        .left {
            height: 30px;
            position: relative;

            input {
                background-color rgba(0,0,0,0)
                border: none;
                outline: none;
                font-size: 24px;
                caret-color: #0CB9FE;
                color #1A1A1A
            }

            .line-box {
                position: absolute;
                left: 10px;
                bottom: -8px;
                height: 1px;
                background-color: #FFFFFF;

                .line {
                    width: 0px;
                    height: 100%;
                    background-color: #0CB9FE;
                    transition: width 0.3s;

                    &.active {
                        width: 204px;
                        height: 100%;
                        transition: width 0.4s;
                    }
                }
            }
        }

        .right {
            display flex
            flex-direction row
            justify-content flex-end
            margin-right 16px

            .el-icon-more {
                font-size 16px
                color #0CB9FE
            }
        }
    }

    .list-box {
        width 100%
        height 450px
        display flex
        flex-direction column

        .list {
            width: 100%;
            margin: 0 auto;
            overflow-y: auto;

            .list-item {
                width: 100%;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                list-style: none;
                padding: 0 1rem;
                box-sizing: border-box;
                height: 70px;
                line-height: 70px;
                border-bottom: 1px solid #e7e7e7;
            }
        }

        .loading {
            display flex
            flex-direction row
            justify-content center
            align-items center

            span {
                font-size 14px
                color #0CB9FE
            }
        }
    }

    .foot-box {
        height 50px
        margin-right 16px
        background-color rgba(200, 200, 200, 0.4)
        border-radius 8px
        display flex
        flex-direction row
        align-items center
        padding-left 16px
        padding-right 16px
        i{
            font-size 18px
            color #0CB9FE
        }
        input {
            background-color rgba(0, 0, 0, 0)
            border: none;
            outline: none;
            font-size: 16px;
            caret-color: #0CB9FE;
            color #0CB9FE
        }

    }

</style>
