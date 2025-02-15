const url = 'https://unofficial-pinterest-api.p.rapidapi.com/pinterest/boards/relevance?keyword=${busca}&num=20';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '921844b0c0msh63da159486395dfp10a054jsnf34db5c18ad1',
		'x-rapidapi-host': 'unofficial-pinterest-api.p.rapidapi.com'
	}
};

async function fetchdata(){
    
    try {

        const busca = document.getElementById("test").value.toLowerCase();
        const response = await fetch(`https://unofficial-pinterest-api.p.rapidapi.com/pinterest/boards/relevance?keyword=${busca}&num=20`, options);

        if(!response.ok){
            throw new Error("Pesquisa não encontrada")
        }

        const result = await response.json();
        console.log(result.data)
        const fotoImagem = result.data[0].images["170x"][1].url;
        const fotoImagem2 = result.data[1].cover_images["400x300"].url;
        const fotoImagem3 = result.data[2].images["170x"][1].url;
        const fotoImagem4 = result.data[3].images["170x"][2].url;
        const fotoImagem5 = result.data[4].cover_images["400x300"].url;
        const fotoImagem6 = result.data[5].cover_images["400x300"].url;


        const imgElement = document.getElementById("imagem_random");
        const imgElement2 = document.getElementById("imagem_random2");
        const imgElement3 = document.getElementById("imagem_random3");
        const imgElement4 = document.getElementById("imagem_random4");
        const imgElement5 = document.getElementById("imagem_random5");
        const imgElement6 = document.getElementById("imagem_random6");


        imgElement.src = fotoImagem;
        imgElement.style.display = "block";

        imgElement2.src = fotoImagem2;
        imgElement2.style.display = "block";

        imgElement3.src = fotoImagem3;
        imgElement3.style.display = "block";

        imgElement4.src = fotoImagem4;
        imgElement4.style.display = "block";

        imgElement5.src = fotoImagem5;
        imgElement5.style.display = "block";

        imgElement6.src = fotoImagem6;
        imgElement6.style.display = "block";


    } catch (error) {
        console.error(error);
    }
}

