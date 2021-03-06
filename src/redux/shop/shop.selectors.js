import {createSelector} from "reselect";


const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womans: 4,
  mans: 5
}

const shopSelector = state => state.shop;

export const selectCollections = createSelector([shopSelector], shop => shop.collections);
export const selectCollection = collectionUrlParam => createSelector([selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]))
