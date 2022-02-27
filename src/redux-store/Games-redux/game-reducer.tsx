import { iGame, iInintalState } from "./type-gameState/type-gameState"

const SET_ONE_GAME = 'SET_ONE_GAME'


const inintalState: iInintalState  = {   
    game:[
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
                {id: 1, img:'https://vgtimes.ru/uploads/posts/2021-05/77477_4_3.jpg'},
                {id: 2, img:'https://media.kg-portal.ru/games/h/horizon2forbiddenwest/trailers/41341t_2x.jpg'},
                {id: 3, img:'https://www.videogamer.com/wp-content/uploads/a948698f-edae-4a6f-a922-d102ba20a558_Horizon_Forbidden_West.jpg'},
                {id: 4, img:'https://i.playground.ru/p/8J7htFCCJYCngsWuKhMznA.jpeg'},
                {id: 5, img:'https://img2.wtftime.ru/store/2020/06/18/6144k4WA.jpg'},
            ],
            bestGameImg: 'https://s3-alpha-sig.figma.com/img/f8e8/0988/5ba77bb85a64ddd9f22fc89f69851d42?Expires=1646611200&Signature=Y93V3nvaU0CM2djO~TP1a-yGXYwv-E0DNXPB4V1PYC2v~j1zzz9glZcJrd4O8Z1vDfNmiPrOIlZmtzjdb8REiJI3CRndf6Wm3kDS3zIaFGs89nRUHP1znQur7Mo6yn1P0NKftI2SkQiXISMe~s8gVr3ovQg6nZ4oiSPm-Ml-nYmVERRI~~DML2lcYBE4ES~2E8AmDIVBT7iaczymrV2hxXa8XceMkkwT3xjvQngp4Mnx9srMSBQUKSNt-VLDLiOutrMDwRMo3n7kyBGheoRikrNMcUWGQeicMe81~0iloYi8W5dxfLNVL5SfKi5j5drSmmT-Q0W3t8EqCe1dPuYmgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
                {id: 1, img:'https://i.playground.ru/p/UMh6v3dQff0jSX8iKSUIlA.jpeg'},
                {id: 2, img:'https://i.playground.ru/p/CZ-ibXhteUUQl-xZWT4dXA.jpeg'},
                {id: 3, img:'https://games.mail.ru/hotbox/content_files/news/2021/05/31/9386d1a9c7a148c5b01aa1a44770dee8.jpg'},
                {id: 4, img:'https://i.playground.ru/p/DOCtvBRNLLx4QI1U116Z3Q.jpeg'},
                {id: 5, img:'https://gameguru.ru/media/f/screens/3/23/17/28/7777.jpg'},
            ], 
            bestGameImg: 'https://s3-alpha-sig.figma.com/img/3742/a6bd/b8f35ce5e072355ffbf21fbadb60c578?Expires=1646611200&Signature=DbHRlaYEiAbgc7AL6EMpn0K93EMh70cpOCv5B9Z-9lMTJrZv3pwh2rIqx-~om1IAv4szCLOTMpZGCcwtPOQN5AMK6fqLkJYAAg0A~~pxDiDmdWaVT9vpTVQr9a06cs0QRa11XsqwS6vQm6Wr6YWf18yqpbdU1dAvfbLtdl4LDg1q8cIVKjyFjqwaZsrr~l1YbTFgGGKr252cYQCqx~KzZOjJPz9We75C~gxnrU7AFugefvw4TcI3eqVZSEWX6ygYP6TRNhvW8WerMUma40khVWAts0-f3k71pDY61tCG87pGqOZ92jSs03yiIYt~oqKeyq6XEwfADHSTHTc2RGzF7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
                {id: 1, img:'https://i.playground.ru/p/ioVn0Ogc9IwUlTTtngB1SA.jpeg'},
                {id: 2, img:'https://i.playground.ru/p/kVFAj4c-nlCWeHppAyQqaw.jpeg'},
                {id: 3, img:'https://www.mirf.ru/wp-content/uploads/2021/02/XL3hiVS.jpg'},
                {id: 4, img:'https://www.igromagaz.ru/upload/iblock/b5a/ss_363d9c05ee0a974b766938610a3352e7a89b9c92.1920x1080.jpg'},
                {id: 5, img:'https://games.mail.ru/hotbox/content_files/gallery/2021/04/14/ec4654566e864ac98872af3213031051.jpg'},
            ], 
            bestGameImg: 'https://s3-alpha-sig.figma.com/img/0469/152f/3f8139e8c38035cd7d39d364454b2c46?Expires=1646611200&Signature=Y~ebvGLXsFJqTNfaqbBnf1nVdTs11ndVlqc161Jj2XGAjD7aJzxmOj4kedYsNeivxEF2OSps9K1ZzWNdOuEZzccj22AuxvURH1wxGIbFelvqIoBd~1qjfxfACY7HiMvOHCa8aXRne~8sqdOXnhjNjFj8j4Jsq1IwzWq7f61RziGoTW-T9mTIiLZ~cjspNSA5kcQnbctZv22IFm0YdNeETkaya-jR-Kh9U~Ll~QgEHGFewtYwdxPBgLu3QpkXiP13k6Wl2twY7D8Ta~2D2GwQALc0Wti9ayqvowsdjUIxT73WyMLXblaWZ67DUWWT-Fj9SHxOg9lNUXp6Z2Vn39f5ng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
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
                {id: 1, img:'https://cubiq.ru/wp-content/uploads/2020/01/p1_3219112_d142d9d0.jpg'},
                {id: 2, img:'https://games.mail.ru/hotbox/content_files/article/2021/01/27/8b4e7abc4daa49f5a8f38a33c0812c7d.jpg'},
                {id: 3, img:'https://pbs.twimg.com/media/EaQk0gTU8AAdF4X.jpg:large'},
                {id: 4, img:'https://images.wallpapersden.com/image/download/hitman-3-ps5_bGZnZ2yUmZqaraWkpJRqZmdlrWdtbWU.jpg'},
                {id: 5, img:'https://cdn.igromania.ru/mnt/news/1/7/d/3/5/3/101659/0a79fedbe2c23e38_1200xH.jpg'},
            ],  
            bestGameImg: 'https://s3-alpha-sig.figma.com/img/5d6c/b75a/96acdaa30caf4f37b2833d97a8ad33fc?Expires=1646611200&Signature=gFNupqUYhcSrRcx1cDzFbtkde4r3ahuiED~3Rc555qNgQvcHwOyGvJN1ND8nDf~CjzsjayOTuYHBj7OhRkvvFqR3MJZglSymrhZg--Ewov-DrtLtD3v-Q8GPo-6veeHJarNzlX5Urle2DhTTpysMYBNt67pFiwerMWFeSzj--AsO7ey7dAdMr8VxYmun5ToqQdM78gwIeEEQFtu7hw2v6ugLmHUcoyqIexTFWbtdOHRWfY50UobyOrI~oO3VuVS-FPtbhnylnjrGqKvE9jvFNiVyi9aH8kPrOTHSdhyQID-UGGbVoMsqLoLIEzLJ0T0PNoAlhASgMZ5dwqoov-TXTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            img: 'https://i.playground.ru/p/ta_DQMj-8qKMrR9fUivL8Q.jpeg'
        },
        {
            id: 5, 
            nameGame: 'Tales of Arise', 
            price: 2000,
            developer: 'BANDAI NAMCO Studios Inc',
            publisher: 'BANDAI NAMCO Entertainment',
            releaseDate: [10, 'Sep', 2021],
            genres: ['Шутер', 'Экшен', 'Приключение'],
            searchGameImg: 'https://difmark.com/images/product/0/7/70050/tales-of-arise-pc_orig_1.jpg',
            infoGameImg: [
                {id: 1, img:'https://gameguru.ru/media/f/screens/3/24/97/39/7777.jpg'},
                {id: 2, img:'http://squarefaction.ru/files/game/15416/gallery/20210622133557_47ada528.jpg'},
                {id: 3, img:'http://squarefaction.ru/files/game/15416/gallery/20210622133331_d3c2d7ca.jpg'},
                {id: 4, img:'https://vgtimes.ru/uploads/gallery/main/170903/1622574647_6420.jpeg'},
                {id: 5, img:'https://vulcan.dl.playstation.net/ap/rnd/202104/0110/mX2TmrS8RkyZth2skmHeszPk.jpg'},
            ],
            bestGameImg: 'https://s3-alpha-sig.figma.com/img/d069/01a6/1e4008287edfc0324a2b1bdb41aa324d?Expires=1646611200&Signature=BvEyDjfh8qoXOU~uF9rAw9t-KjTR~kMrXFchZheQjHuM-Is-UKD~ya6BKWffxEJNgGCh3DMIa1wA4oDXYuKzMQWv1IqFgapO0sXvOMzswrjSYOm39Q7wrUNKzMjbry0yycRmU5N7FlcNk708wk1fl~9o5ynHEZe3tGKpOP3eE9IE6fCXW5V4uC67eCz9GgK2TBan9-KcJqdA2u3zQO~o7YweYFVT-QfbtcHIhWvEmB9~nNBUet5buyRODAFmatH753hngmr1cxyjKsYSKdN~TL9JAwiItW1mpKeSkm1TWGX22ULzonbq~0Goz~LjH0KZGUeXzLb8lumeYkvm2fnkOw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            img: 'https://pbs.twimg.com/media/EK5bXycWkAAMPE0.jpg'
        },     
    ],
    gameOne: null
}


const gameReducer = (state = inintalState, action: any) => {                
    switch(action.type) {
        case SET_ONE_GAME :            
            return {            
                ...state,
                gameOne: state.game.find(game => game.id === action.id)
            }
        default : 
            return state
        
    }
}


export const setOneGame = (id: number) => ({type: SET_ONE_GAME, id})

export default gameReducer