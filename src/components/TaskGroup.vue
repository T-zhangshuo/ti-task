<template>
    <div style="height: 100%">
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
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "TaskGroup",
        components: {
            draggable
        },
        data(){
            return{
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
        }
    }
</script>

<style lang="stylus">
    .list-group {
        width 100%
        margin-top 10px

        .list-item {
            display flex
            height 32px
            background-color #FFFFFF
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
                    font-size 12px
                    color #1A1A1A
                }

                .name {
                    margin-left 8px
                    font-size 14px
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

</style>
