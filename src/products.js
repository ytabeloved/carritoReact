
const products = [
    {id:1 , name: 'Turquesa', price: 'clp 100' ,  category : 'Cristal', img : 'https://images.freeimages.com/images/large-previews/4b6/turquoise-with-rock-1539532.jpg', stock: 10, description: "Turquoise is also known as the master healer, believed to be an energetic bridge between heaven and earth. Since ancient times, the stunning blue stone has been highly regarded for its protective and lucky properties. Turquoise is also a stone of communication, so it might be able to help you speak up if you're having trouble putting words to your feelings or perspective. Side note: When turquoise is given as a gift, its healing properties are thought to be magnified, so consider passing one to a friend or family member who could use a little luck on their side."},
    {id:2 , name: 'Cuarzo Rosa', price: 'clp 100' ,  category : 'Cristal', img : 'https://images.freeimages.com/images/large-previews/97f/crystal-rose-2-1191558.jpg', stock: 10, description: "Rose quartz is the healing stone of unconditional love. It's thought to open up the heart chakra and encourage us to forgive others and—more importantly—ourselves. Use this chakra stone with the intention to nurture and support you on your journey to find self-love, and see what happens."},
    {id:3 , name: 'Cuarzo blanco', price: 'clp 100' ,  category : 'Cristal', img : 'https://images.freeimages.com/images/large-previews/c9d/quartz-cluster-1565959.jpg', stock: 10, description: "The clear quartz crystal is one of the most popular stones around—and for good reason. Ancient civilizations have long used it to balance the body and clear the mind, and its clear color means that it can be helpful in a variety of scenarios and situations. For that reason, this is a great stone to start with if you're a total beginner to the world of crystal healing."},
    {id:4 , name: 'Celestita', price: 'clp 100' ,  category : 'Cristal', img : 'https://images.freeimages.com/images/large-previews/36e/shattuckite-1539168.jpg', stock: 10, description: "Celestite's name is derived from the Latin word caelestis, meaning celestial. It makes sense: This stone's heavenly blue color can help drum up the kind of peace and happiness we get when looking up at the sky on a clear day. It's an ideal crystal to place in your bedroom to bring tranquillity and a harmonious energy field and encourage restful sleep."},
    {id:5 , name: 'Citrino', price: 'clp 100' ,  category : 'Cristal', img : 'https://images.freeimages.com/images/large-previews/49b/andalusite-with-pyrophyllite-1539005.jpg', stock: 10, description: "Citrine is a crystal of light, happiness, and presence. Holding one serves as a friendly reminder to be really mindful and appreciate the world as it is right now. A wonderful manifestation stone, citrine also encourages us to dream big, maintain a positive state of mind, and walk through life with gratitude."}
]

export const getCategories = () => [
    {id: 'Cristal', description: 'Cristal'},
    {id: 'Incienso', description: 'Incienso'},
    
]

export const getProducts = (category) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
        },1000)
        })
}

export const getProductById = (id) => {    
    return new Promise((resolve, reject) => {
        const product = products.find(prod => Number(prod.id) === Number(id))
        setTimeout(() => resolve(product), 1000)
    })
}