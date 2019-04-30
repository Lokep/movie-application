
<style scoped>
    .social-hot li{
        overflow: hidden;
        width: 6.4rem;
        padding: .25rem;
        height: auto;
        background-color: #fff;
        -o-box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
        -webkit-box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
        box-shadow: 0.5px 0.866px 35px 0 rgba(0, 0, 0, 0.21);
        margin:.2rem auto .1rem;
    }
    .social-hot li h4{
        float: left;
        font-size: .32rem;
        width: 4rem;
    }
    .social-hot li img{
        float: right;
        width: 2rem;
        height: 2rem;
    }
</style>
<template>
    <div class="social-hot">
        <ul>
            <li v-for='(newsList,index) in newsLists' :key='index'>
                <h4>{{newsList.title}}</h4>
                <img :src="newsList.images[0]" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            newsLists:[]
        }
    },
    mounted(){
        this.$axios.get('/zhihu/api/4/news/latest')
            .then(res=>{
                this.newsLists = res.data.stories;
                console.log(this.newsLists);
            })
    }
}

</script>
