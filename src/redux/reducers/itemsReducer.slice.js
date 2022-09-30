import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [{
        id: "Item_1",
        name: "Puffi RAIN",
        imgUrl:
            "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
        background:
            "https://artist.com/photos/arts/extra-big/rain-in-colorful-umbrellas-1800376912.jpg",
        icon: "BsUmbrella",
        redirect: "rain",
        description: "Descripcion del producto. Este es un texto simulado.",
    },
    {
        id: "Item_2",
        name: "Pufi PUFF",
        imgUrl:
            "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
        background:
            "https://i.pinimg.com/736x/95/a8/9e/95a89e40e4e2e7ccb9d4c0cd30090ea6--bean-bags-puffs.jpg",
        icon: "MdOutlineHouseboat",
        redirect: "puff",
        description: "Descripcion del producto. Este es un texto simulado.",
    },
    {
        id: "Item_3",
        name: "Puffi CART",
        imgUrl:
            "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
        background:
            "https://previews.123rf.com/images/stylephotographs/stylephotographs1407/stylephotographs140700007/29682605-businessman-with-shopping-bag-buying-fresh-vegetables-in-a-supermarket.jpg",
        icon: "IoShirtOutline",
        redirect: "cart",
        description: "Descripcion del producto. Este es un texto simulado.",
    },
    {
        id: "Item_4",
        name: "Puffi NAP",
        imgUrl:
            "https://www.pngplay.com/wp-content/uploads/4/Umbrella-PNG-Photo-Image.png",
        background:
            "https://www.luxuryfurnituremr.com/images/tb/8/6/5/8651/1269387760_w904h3000.jpg",
        icon: "MdOutlineBackpack",
        redirect: "nap",
        description: "Descripcion del producto. Este es un texto simulado.",
    },],
    loading: true,
}

const itemsReducer = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload.items
            state.loading = false;
        },
    },
})

export const {
    setItems,
} = itemsReducer.actions

export default itemsReducer.reducer
