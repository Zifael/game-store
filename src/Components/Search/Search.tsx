import React from 'react'
import './Search.css'

interface iSearchGames {
    id: number,
    nameGame: string,
    price: number,
    img: string
}

const Search = () => {

    const searchGames: Array<iSearchGames> = [
        {id: 1, nameGame: 'Just Cuase 3', price: 400, img: 'https://s3-alpha-sig.figma.com/img/036c/6fcb/c106eacffdda05e51319b6d33a04752b?Expires=1646611200&Signature=RdMf43E0EqJM-X38wNg9bXRuNJTfDe6S4ODC7ApETd27Eg8l9Ict7PlHiOuvW8gEOReoWXiEiQBGgITEQDpJ3hPOnYwF4OyLg-Kn~u4wURVEzVsG7VlpnyKIB-qlc6qlpZypO5sST6pPrlK60XATbO6kni4EbHH9dVtfqNb77GtLmffOBy3JDoKd1soaWidUJHqN2EuMxk1j~b5~~fJoZCacwShU2XwTLxwViicnwgLd0QKQt~mXHLL~S2BayJ9mmkJ5tbh0GBtBvBeor2dcnfQnZX9MlgW6aKBhmH2Jl6a-HrsMKf1t~lFrPB-nVnQ96hqwhejSf-GTs4NuYVX6nw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {id: 2, nameGame: 'Just Cuase 2', price: 300, img: 'https://s3-alpha-sig.figma.com/img/8519/3181/0a4fcc25aeddb11846a11e0ae8d8f48b?Expires=1646611200&Signature=R861QPN2a~BKCPDH-tRIRdVsOT3LRm066AMLIcQi1QI9MRlcMKA50k2XW2aJXe46WW4dsb0IWSwKtVaw3BEvzivrUwQwArKtDB1O5QbrqZcZ3db4NSYgsDf~TAMduTFktQv1X1wAYBTuIvZsQocQDkm~S1CAxkOBPxbjWUc9OHCNIEF3~ot3RBsXsh2ve6ie6x29iOvCOIuwBrxKDYkcs5PhEa0vn4Cyhn9oRen9FNFP7eUzZGZfy1TQuc7s0jv~cDKC819V-lAmxLSI7R0QoiRS5LZLoa4EgklwusE2FwcAnogg9iUCmiYJdedMUwRHK0VSJneLx3s3FvdcoxtjVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {id: 3, nameGame: 'Just Cuase 1', price: 150, img: 'https://s3-alpha-sig.figma.com/img/8330/2638/fe7872407882e8c2e894ce53da854abd?Expires=1646611200&Signature=g24ZBZczSjnUe0MH5gavcwFx6Ide7iNP12~Mi1BHpMwN5t4hOq056Dolo9Dlmr-0X8bzBXz2obPqTh9LbjiijxtN7xIVkTYAMxYZVugv3tPng0LXHgz17w2UCr-gTo28SmHOhRfstwURWNPFxhR71MIwcS0m8ozsG98Zhr4hk~Q6S6eGv-dqzgffcaa0UFpWTfEevGJovcDtPi4-X0-P9BlzkTxHH-derm4NzPqo-cHGA-P3ZHRfqbmOR1Pvxvvkol-noiuTYMKms16ZcsEdd-4oPZxODxHKCdOE5~MpXepejdI61yniaj0bg4UbtQeHOAutIi2DeNifekaY2NoKaw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    ]

    return (
        <div className='search'>
           {searchGames.map((game, index) => 
                <div key={game.id}>
                    <div className='search__game__block'>
                        <img className='search__game__img' src={game.img}/>
                        <div className='search__game__nameGame'>{game.nameGame}</div>
                        <div className='search__game__price'>{game.price} руб.</div>
                    </div>
                    {searchGames.length - 1 === index ?  '' :  <div className='search__line'></div>} 
                </div>
            )}
        </div>
    )
}


export default Search