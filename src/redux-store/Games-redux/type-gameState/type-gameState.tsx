interface iInfoGameImg {
    id: number,
    img: string
}

 export interface iGame {
    id: number,
    nameGame: string,
    price: number,
    developer: string,
    publisher: string,
    genres: Array<string>
    releaseDate: Array<string | number> ,
    img: string,
    bestGameImg: string,
    searchGameImg: string,
    infoGameImg: Array<iInfoGameImg>,
}


export interface iInintalState {
    game : Array<iGame>,
    gameOne: any
}

