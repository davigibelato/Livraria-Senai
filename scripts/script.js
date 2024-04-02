function verificacao(){

    let usuario = document.getElementById("input-user").value;
    let senha = document.getElementById("input-senha").value;

    if(usuario.trim() === "" || senha.trim() === ""){

    }else{
        if(usuario.trim() === "adm" || senha.trim() === "adm"){
            Swal.fire({
                title: "Login feito com Sucesso!",
                text: "Bem vindo",
                icon: "success"
            }).then((result) =>{
                if(result.isConfirmed){
                    window.open("./pages/Livraria.html")
                }
            })
        }
    }
}