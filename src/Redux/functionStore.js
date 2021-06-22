import { configureStore } from "@reduxjs/toolkit";
import selectArtist from "./selectArtist";

export default configureStore({
    reducer: {
        artistId: selectArtist  
    }
});