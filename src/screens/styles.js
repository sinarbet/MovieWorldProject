import { StyleSheet } from "react-native";

export default StyleSheet.create({

  title: {
    backgroundColor: 'white',
    height: 600,
    flex: 1
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

  movieDetailFavIcon: {
    width: 24, 
    height: 22, 
    marginLeft: 320, 
    marginTop: 20 
  },

  movieDetailView: {
    flexDirection: 'column', 
    alignItems: 'center', 
    marginTop: 10
  },

  movieDetailPoster: {
    height: 300, 
    width: 200, 
    borderRadius: 10 
  },

  movieDetailInfoView: {
    flexDirection: 'column', 
    top: 20,
    marginHorizontal: 30
  },

  movieDetailTitle: {
    fontWeight: 'bold', 
    fontSize: 22, 
    marginVertical: 5 
  },

  movieDetailDescTitle: { 
    fontWeight: 'bold', 
    fontSize: 14, 
    marginVertical: 10
  },

  movieDetailOverview: {
    marginBottom: 80
  },

  movieDetailButton :{
    width: 235
  },

  rowStyle: {
    flexDirection: 'row'
  },

  columnStyle: {
    flexDirection: 'column'
  },

  movieImageView: {
    marginHorizontal: 20, 
    marginBottom: 15
  },

  movieImage: {
    height: 143, 
    width: 100, 
    borderRadius: 10
  },

  movieNameStyle: {
    fontWeight: '500', 
    marginVertical: 10 
  },

  favoriteMovieNameStyle: {
    fontWeight: '500', 
    marginVertical: 10, 
    width: 200 
  },

  movieOverviewText: {
    fontSize: 12, 
    fontWeight: '200'
  },

  movieOverviewView: {
    marginRight: 30 
  },

  starRatingView: {
    top: 10 
  },

  cancelIconStyle: {
    height: 12, 
    width: 12, 
    marginLeft: 5
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