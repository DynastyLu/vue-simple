import plLazy from "comp/pl_lazy";

const component={
    install:(Vue)=>{
        Vue.component('pl-lazy', plLazy);
    }
}

export default component;