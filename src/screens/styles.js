import { StyleSheet } from "react-native";

export default StyleSheet.create({

  title: {
    backgroundColor: 'white',
    height: 600
  },

  viewTitle: {
    flexDirection: 'row',
    top: 30
  },

  titleText: {
    fontWeight: 'bold',
    left: 20,
    fontSize: 22
  },

  viewDescEmpty: {
    alignItems: 'center', 
    height: 500, 
    justifyContent: 'center'
  },

  textTitleEmpty: {
    fontWeight: '500', 
    fontSize: 14
  },

  textDescEmpty: { 
    fontWeight: '200', 
    fontSize: 14, 
    top: 10 },

  favoriteMoviesButton: {
    height: 30,
    left: 90,
    backgroundColor: '#EFEFF0',
    width: 165,
    borderRadius: 6,
    justifyContent: 'center'
  },

  moviesFlatList: {
    top: 60,
    marginBottom: 120
  },

  imageView: {
    flexDirection: 'row'
  },

  imageContent: {
    width: 18, 
    height: 18, 
    marginHorizontal: 10
  },

  sortSectionView: { 
    flexDirection: 'row', 
    top: 40 
  },

  movieListContent: {

  },


  favoritesView: {

  },

  sortCategoryButton: {
    height: 30, 
    left: 10, 
    top: 10, 
    backgroundColor: '#EFEFF0', 
    width: 165, 
    borderRadius: 6, 
    justifyContent: 'center'

  },

  sortRatingButton: {
    height: 30, 
    left: 30, 
    top: 10, 
    backgroundColor: '#EFEFF0', 
    width: 165, 
    borderRadius: 6, 
    justifyContent: 'center'

  },

}); 