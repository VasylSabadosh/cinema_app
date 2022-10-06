const initialStore = {
    results:[],
    currentPage: 1,
    auth: false,
    title: "Home Cinema",
    counter: 0,
    data:{
      loading:false,
      films:[]
    },
    searchQuery:'',
    selectedMovie: {},
    movieDetails:{},
  };

export default initialStore;