<template>
<div class="container">
  <div class="news">
       <div class="hr left"></div> <H1 class="title">Yangiliklar</H1><div class="hr right"></div>
       </div>
        <div class="cards">

            <div class="card">
                <img src="../assets/image-6.png" >
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>
            <div class="card">
                <img src="../assets/image-7.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-8.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-9.png" >
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-10.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div>
                    <div class="data">16-03-2022 | 18:23</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>

            <div class="card">
                <img src="../assets/image-11.png" alt="">
                <p class="sub1">O‘quvchi qizlarning kasb-hunarga o‘rgatish maqsadida tashkil etilgan to‘garak jarayoni</p>
                <p class="sub2">Denov tuman 4-son kasb-hunar maktabida o‘quvchi qizlarning kasb-hunarga ...</p>
                <div class="date_btn">
                    <div class="data">16-03-2022 | 18:23</div>
                    <a class="btn">Batafsil</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TheNews'
}
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    // border: red 1px solid;
}

.container {
    margin: 60px 0;
}

.title{
    text-align: center;
    font-size: 47px;
    line-height: 20px;
    font-weight: 400;
    color: #111F50;
}

.news{
    margin: 70px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hr{
    width: 550px;
    height: 4px;
    margin: 0 80px;
    background:  #111F50;
}

.cards{
    justify-content: center;
    // padding: 80px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 60px;

    @media (max-width:1200px) {
    grid-template-columns: auto;
    text-align: center;
    justify-content: center;
    gap: 10px;
    }
}

.cards .card{
    width: 340px;
    // height: 580px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px;
}

.cards .card:hover{
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease 0s;
}

.cards .card img{
    border-radius: 20px 20px 0 0;
    width: 340px;
}

.cards .card div{
    display: flex;
}

.cards .card p{
    color: #000;
}

.cards .card .sub1{
    font-size: 19px;
    font-weight: 400;
    margin: 20px 5px 0;
    line-height: 24px;

}

.cards .card .sub2{
    font-size: 15px;
    font-weight: 300;
    margin: 10px 5px 0;
    line-height: 22px;
}

.cards .card div {
    margin: 5px 10px 5px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cards .card div .btn{
    padding: 10px 25px;
    font-weight: 300;
    font-size: 15px;
    border-radius: 0px 15px 0px 13px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);

}

.cards .card div .btn:hover{
    background: rgba(17, 31, 80, 0.8);
    color: #fff;
    border: none;
}

.cards .card div .data{
    width: 160px;
    height: 20px;
    font-weight: 300;
    font-size: 15px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.6);
}
</style>