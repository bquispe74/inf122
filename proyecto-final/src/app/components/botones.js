import style from "./botones.module.css";
function Boton(){
    const download = () => {
        alert("Downloading Document");
      };
    return(
        <div class={style["buttons"]}>
                <button class={style["btn-primary"]} onClick={download}>
                    <div class={style["btn-content"]}>
                        <p>Download CV</p>
                        <img src="assets/icons/download.svg" alt="arrow" class="btn-primary-img"/>
                    </div>
                </button>
                <a class={style["btn-secondary"]} href="mailto:contact@me.com">
                    <div class={style["btn-content"]}>
                        <p>Contact me</p>
                    </div>
                </a>
                <script src="index.js"></script>
            </div>
            
    );
}export default Boton;