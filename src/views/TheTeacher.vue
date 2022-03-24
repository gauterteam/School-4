<template>
  <div class="container">
        <img src="" alt="">
        <div class="teacher"><div class="hr"></div><h1 class="title">O'qituvchilar</h1><div class="hr"></div></div>

        <div class="cards">
            <div class="card">
                <img src="../assets/image-13.png" alt="">
                <p class="title">Axrorov Baxtiyor</p>
                <p class="subtitle">Maktab direktori</p>
            </div>

            <div class="card">
                <img src="../assets/image-4.png" alt="">
                <p class="title">Sultonov Yashnar</p>
                <p class="subtitle">Ma'naviy va marifat ishlari bo'yicha direktor o'rinbosari </p>
            </div>

            <div class="card">
                <img src="../assets/image-2.png" alt="">
                <p class="title">Azimova Shohida</p>
                <p class="subtitle">Ingliz tili fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-14.png" alt="">
                <p class="title">Narzulloyev Sharof</p>
                <p class="subtitle">Maxsus fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-12.png" alt="">
                <p class="title">Rahmonov Zokir</p>
                <p class="subtitle">O'quv ishlari bo'yicha direktor o'rinbosari</p>
            </div>

            <div class="card">
                <img src="../assets/image-3.png" alt="">
                <p class="title">To’raxonov Abdusalom</p>
                <p class="subtitle">Yordamchi hisobchi</p>
            </div>

            <div class="card">
                <img src="../assets/image-5.png" alt="">
                <p class="title">Juraqulov Nodirbek</p>
                <p class="subtitle">Rus tili fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-16.png" alt="">
                <p class="title">Mardonova Vazira</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-20.png" alt="">
                <p class="title">Abduhalimov Davron</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-19.png" alt="">
                <p class="title">Xusanov Ulug`bek</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-18.png" alt="">
                <p class="title">Ergashova Zaytuna</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>

            <div class="card">
                <img src="../assets/image-17.png" alt="">
                <p class="title">Yuldoshov Adiljon</p>
                <p class="subtitle">fan o’qituvchisi</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TheTeacher',
  components: {}
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  user-select: none;
}

.container img{
    width: 100%;
}

.title{
    text-align: center;
    font-size: 47px;
    line-height: 20px;
    font-weight: 400;
    color: #111F50;
}

.teacher{
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
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 60px;
    margin-bottom: 50px;

    @media (max-width:1200px) {
    grid-template-columns: auto;
    text-align: center;
    justify-content: center;
    gap: 10px;
    }
}

.cards .card{
    width: 260px;
    height: 410px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 20px 20px 0 0;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
}

.cards .card img{
    border-radius: 20px 20px 0 0;
}

.cards .card .title{
    font-weight: 700;
    font-size: 28px;
    line-height: 24px;
    margin-top: 30px;
}

.cards .card .subtitle{
    font-weight: 400;
    font-size: 19px;
    line-height: 24px;
    margin-top: 10px;
}
</style>
