import style from "./tabs.module.css";

function Tabs(){
    return(
    <div class={style["tabs"]}>
    <button class={style["tabs-background-item-a"]}>
        <p class={style["tabs-background-item-text"]}>Portfolio</p>
    </button>
    <button class={style["tabs-background-item"]}>
        <p class={style["tabs-background-item-text"]}>Skills</p>
    </button>

</div>);
}export default Tabs;