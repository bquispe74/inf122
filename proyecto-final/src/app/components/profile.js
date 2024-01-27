import style from "./profile.module.css";
function Profile(){
    return(<div class={style["profile"]}>

    <figure class={style["profile-img"]}>
        <img src="assets/images/perfil_picture.jpeg" />
    </figure>



    <div class={style["profile-info"]}>
        <h1>Victor Alvarado</h1>
        <p>Software Engineer</p>
        <div class={style["profile-social"]}>
            <a href="https://github.com" target="_blank">
                <img src="assets/icons/github.svg" alt="github" class={style["profile-social-img"]}/>
            </a>
            <a href="https://twitter.com" target="_blank">
                <img src="assets/icons/twitter.svg" alt="twitter" class={style["profile-social-img"]}/>
            </a>
            <a href="https://linkedin.com" target="_blank">
                <img src="assets/icons/linkedin.svg" alt="linkedin" class={style["profile-social-img"]}/>
            </a>
            <a href="https://youtube.com" target="_blank">
                <img src="assets/icons/youtube.svg" alt="youtube" class={style["profile-social-img"]}/>
            </a>
        </div>
    </div>
</div>);
}export default Profile;
