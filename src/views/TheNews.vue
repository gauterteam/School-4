<template>
  <div class="container">
        <div class="news">
            <H1 class="title"> Yangiliklar </H1>
        </div>
        <div class="cards">

            <div class="card">
                <img src="../assets/image-6.png" >
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <button class="btn">Batafsil</button>
                </div>
            </div>

            <div class="card">
                <img src="..//assets/image-7.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <button class="btn">Batafsil</button>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-8.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <button class="btn">Batafsil</button>
                </div>
            </div>
        </div>

        <div class="cards">
            <div class="card">
                <img src="../assets/image-9.png" >
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <button class="btn">Batafsil</button>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-11.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <button class="btn">Batafsil</button>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-11.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <button class="btn">Batafsil</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TheNews',
  components: {}
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.title{
    padding-top: 30px;
    text-align: center;
    font-size: 59px;
    line-height: 20px;
    font-weight: 400;
}

.cards{
    display: flex;
    justify-content: space-between;
    padding: 40px;
}

.cards .card{
    width: 480px;
    height: 580px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px;
}

.cards .card:hover{
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease 0s;
}

.cards .card img{
    border-radius: 20px;
    width: 480px;
    height: 280px;
}

.cards .card div{
    display: flex;
}

.cards .card p{
    font-size: 24px;
    margin-left: 10px;
    color: #000;
}

.cards .card .sub1{
    font-weight: 400;
    margin-top: 30px;
    line-height: 24px;

}

.cards .card .sub2{
    font-weight: 300;
    margin-top: 33px;
    line-height: 33px;
}

.cards .card div .btn{
    width: 119px;
    height: 45px;
    border-radius: 0px 20px 0px 18px;
    border: 2px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
    margin: 38px 50px 38px 0px;
}

.cards .card div .btn:hover{
    background: rgba(17, 31, 80, 0.8);
    color: #fff;
}

.cards .card div .data{
    width: 165px;
    height: 33px;
    font-weight: 300;
    font-size: 19px;
    line-height: 33px;
    margin: 44px 125px 44px 25px ;
    color: rgba(0, 0, 0, 0.6);
}
</style>
