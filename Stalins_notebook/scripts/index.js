function form_open() {
    document.getElementById("layer_1").classList.add("closed");
}

function enter_activate() {
    document.getElementById("reg_tab").classList.remove("active");
    document.getElementById("enter_tab").classList.add("active");
    document.getElementById("register").classList.add("disabled");
    document.getElementById("enter").classList.remove("disabled");
}

function reg_activate() {
    document.getElementById("enter_tab").classList.remove("active");
    document.getElementById("reg_tab").classList.add("active");
    document.getElementById("enter").classList.add("disabled");
    document.getElementById("register").classList.remove("disabled");
}