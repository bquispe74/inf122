import style from "./container.module.css";

function Contenedores(){
    return( <div class={style["project-container"]}>
    <div class={style["content-card-img"]}>
        <img class={style["image"]} src="assets/images/Hero_2.png" />
        <div class={style["content-card-img-overlay"]}></div>
        <div class={style["content-card-img-detail"]}>
            <p class={style["title"]}>SmarterTrading411</p>
            <p class={style["detail"]}>Landing page of SmarterTrading411 created using WordPress</p>
            <button class={style["btn"]}>
                <img src="assets/icons/link.svg" alt="link"/>
            </button>
        </div>
    </div>
    <div class={style["content-card-img"]}>
        <img class={style["image"]} src="assets/images/bussiness_man.png" />
        <div class={style["content-card-img-overlay"]}></div>
    </div>
    <div class={style["content-card-img"]}>
        <img class={style["image grayscale"]} src="assets/images/pictures_wall.jpeg" />
        <div class={style["content-card-img-overlay"]}></div>
    </div>
    <div class={style["content-card-img"]}>
        <img class={style["image"]} src="assets/images/kitchen.jpeg" />
        <div class={style["content-card-img-overlay"]}></div>
    </div>
    <div class={style["content-card-img"]}>
        <img class={style["image"]} src="assets/images/mobile_app.png" />
        <div class={style["content-card-img-overlay"]}></div>
    </div>
    <div class={style["content-card-img"]}>
        <img class={style["image grayscale"]} src="assets/images/issima_page.png" />
        <div class={style["content-card-img-overlay"]}></div>
    </div>
</div>);
}export default Contenedores;