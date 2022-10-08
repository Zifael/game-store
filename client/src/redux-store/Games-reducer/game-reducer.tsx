import { createSlice } from "@reduxjs/toolkit"
import { iGame, iInintalState } from "./type-gameState/type-gameState"




const gameReducer = createSlice({
    name: 'game',
    initialState: {
        game: [
            {
                id: 1,
                nameGame: 'Horizon',
                price: 2000,
                developer: 'Guerrilla',
                publisher: 'PlayStation PC LLC',
                releaseDate: [18, 'Feb', 2022],
                genres: ['Шутер', 'Экшен', 'Приключение'],
                searchGameImg: 'https://vgtimes.ru/uploads/posts/2021-02/stalo-izvestno-kak-horizon-forbidden-west-budet-nazyvatsya-v-rossii-75047.jpg?1613659978',
                infoGameImg: [
                    { id: 1, img: 'https://vgtimes.ru/uploads/posts/2021-05/77477_4_3.jpg' },
                    { id: 2, img: 'https://media.kg-portal.ru/games/h/horizon2forbiddenwest/trailers/41341t_2x.jpg' },
                    { id: 3, img: 'https://www.videogamer.com/wp-content/uploads/a948698f-edae-4a6f-a922-d102ba20a558_Horizon_Forbidden_West.jpg' },
                    { id: 4, img: 'https://i.playground.ru/p/8J7htFCCJYCngsWuKhMznA.jpeg' },
                    { id: 5, img: 'https://img2.wtftime.ru/store/2020/06/18/6144k4WA.jpg' },
                ],
                bestGameImg: 'https://i.pinimg.com/originals/21/78/9f/21789fa4cd6b75b2e7f964ad607cc360.jpg',
                img: 'https://sun9-22.userapi.com/impf/0ZBAaqDgTKIJsyyJUyn2A3UJ6K66C1sC5PGHFA/d1alSjxnuaI.jpg?size=0x0&quality=90&proxy=1&sign=6daac845c103f6e4af126a4eed8182fe&c_uniq_tag=R5GifeRtcdSLnNSyiSkcHm3R8HxCQeMPSdBXbYxqGRk&type=video_thumb',
            },
            {
                id: 2,
                nameGame: 'God of war',
                price: 2000,
                developer: 'Guerrilla',
                publisher: 'PlayStation PC LLC',
                releaseDate: [20, 'Apr', 2018],
                genres: ['Шутер', 'Экшен', 'Приключение'],
                searchGameImg: 'https://images.stopgame.ru/uploads/images/484543/form/2018/04/13/1523637822.jpg',
                infoGameImg: [
                    { id: 1, img: 'https://i.playground.ru/p/UMh6v3dQff0jSX8iKSUIlA.jpeg' },
                    { id: 2, img: 'https://i.playground.ru/p/CZ-ibXhteUUQl-xZWT4dXA.jpeg' },
                    { id: 3, img: 'https://games.mail.ru/hotbox/content_files/news/2021/05/31/9386d1a9c7a148c5b01aa1a44770dee8.jpg' },
                    { id: 4, img: 'https://i.playground.ru/p/DOCtvBRNLLx4QI1U116Z3Q.jpeg' },
                    { id: 5, img: 'https://gameguru.ru/media/f/screens/3/23/17/28/7777.jpg' },
                ],
                bestGameImg: 'https://avatarfiles.alphacoders.com/250/thumb-1920-250447.jpg',
                img: 'https://images.stopgame.ru/uploads/images/484543/form/2018/04/13/1523637822.jpg',
            },
            {
                id: 3,
                nameGame: 'RESIDENT EVIL:VILAGE',
                price: 2000,
                developer: 'CAPCOM Co., Ltd.',
                publisher: 'CAPCOM Co., Ltd.',
                releaseDate: [7, 'May', 2021],
                genres: ['Шутер', 'Экшен', 'Приключение'],
                searchGameImg: 'https://vgtimes.ru/uploads/posts/2020-12/thumbs/1608291825_fxla3l-jrapl5z6fjfbw6a.jpeg',
                infoGameImg: [
                    { id: 1, img: 'https://i.playground.ru/p/ioVn0Ogc9IwUlTTtngB1SA.jpeg' },
                    { id: 2, img: 'https://i.playground.ru/p/kVFAj4c-nlCWeHppAyQqaw.jpeg' },
                    { id: 3, img: 'https://www.mirf.ru/wp-content/uploads/2021/02/XL3hiVS.jpg' },
                    { id: 4, img: 'https://www.igromagaz.ru/upload/iblock/b5a/ss_363d9c05ee0a974b766938610a3352e7a89b9c92.1920x1080.jpg' },
                    { id: 5, img: 'https://games.mail.ru/hotbox/content_files/gallery/2021/04/14/ec4654566e864ac98872af3213031051.jpg' },
                ],
                bestGameImg: 'https://upload.wikimedia.org/wikipedia/ru/2/24/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_Resident_Evil_Village.jpg',
                img: 'https://vgtimes.ru/uploads/posts/2020-12/thumbs/1608291825_fxla3l-jrapl5z6fjfbw6a.jpeg'
            },

            {
                id: 4,
                nameGame: 'Hitman 3',
                price: 2000,
                developer: 'IO Interactive A/S',
                publisher: 'IO Interactive A/S',
                releaseDate: [20, 'Jan', 2022],
                genres: ['Шутер', 'Экшен', 'Приключение'],
                searchGameImg: 'https://i.ytimg.com/vi/rikIiuJW4Nw/maxresdefault.jpg',
                infoGameImg: [
                    { id: 1, img: 'https://cubiq.ru/wp-content/uploads/2020/01/p1_3219112_d142d9d0.jpg' },
                    { id: 2, img: 'https://games.mail.ru/hotbox/content_files/article/2021/01/27/8b4e7abc4daa49f5a8f38a33c0812c7d.jpg' },
                    { id: 3, img: 'https://pbs.twimg.com/media/EaQk0gTU8AAdF4X.jpg:large' },
                    { id: 4, img: 'https://images.wallpapersden.com/image/download/hitman-3-ps5_bGZnZ2yUmZqaraWkpJRqZmdlrWdtbWU.jpg' },
                    { id: 5, img: 'https://cdn.igromania.ru/mnt/news/1/7/d/3/5/3/101659/0a79fedbe2c23e38_1200xH.jpg' },
                ],
                bestGameImg: 'https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg',
                img: 'https://i.playground.ru/p/ta_DQMj-8qKMrR9fUivL8Q.jpeg'
            },
            {
                id: 5,
                nameGame: 'Tales of Arise',
                price: 2000,
                developer: 'BANDAI NAMCO Studios Inc',
                publisher: 'BANDAI NAMCO Entertainment',
                releaseDate: [10, 'Sep', 2021],
                genres: ['Шутер', 'Экшен',],
                searchGameImg: 'https://difmark.com/images/product/0/7/70050/tales-of-arise-pc_orig_1.jpg',
                infoGameImg: [
                    { id: 1, img: 'https://gameguru.ru/media/f/screens/3/24/97/39/7777.jpg' },
                    { id: 2, img: 'http://squarefaction.ru/files/game/15416/gallery/20210622133557_47ada528.jpg' },
                    { id: 3, img: 'http://squarefaction.ru/files/game/15416/gallery/20210622133331_d3c2d7ca.jpg' },
                    { id: 4, img: 'https://vgtimes.ru/uploads/gallery/main/170903/1622574647_6420.jpeg' },
                    { id: 5, img: 'https://vulcan.dl.playstation.net/ap/rnd/202104/0110/mX2TmrS8RkyZth2skmHeszPk.jpg' },
                ],
                bestGameImg: 'https://upload.wikimedia.org/wikipedia/ru/9/9b/Tales_of_Arise_cover.jpg',
                img: 'https://difmark.com/images/product/0/7/70050/tales-of-arise-pc_orig_1.jpg'
            },
        ],
        gameOne: null,
        gameGenre: [],
    } as iInintalState,
    reducers: {
        setOneGame(state, action: any) {
            console.log(action)
            state.gameOne = state.game.find(game => game.id === action.payload)
        },
        setGameGenre(state, action: any) {
            state.gameGenre = state.game.filter(e => 
                e.genres.some(e => e.toLowerCase() === action.payload.toLowerCase()))
        }
    }
})


export default gameReducer.reducer
export const {setGameGenre, setOneGame,} = gameReducer.actions




