export class Media {
    artista: Artista;
}

export class Artista {
    id = 0;
    nome: string;
    genero: Genero;

}

export class Genero {
    id= 0;
    nomeGenero: string;
}

export class TipoMedia{
    id = 0;
    tipoMedia: string;
}