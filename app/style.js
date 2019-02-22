
const StyleCss = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  backgroundImage: {
      flex: 1,
      resizeMode: 'cover', 
      top: 0,
      bottom:0
     // or 'stretch'
  },
  logo:{
    alignItems:'center',justifyContent: 'center',paddingBottom:20
  },
  logosize:{
    width: 150, height: 150
  },
  sectiontab:{
    height:450, marginLeft: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,.3)',
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0, 
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Form:{
    backgroundColor:'transparent',
    marginTop:10,
    color:'white',
  },
  tabcustom : {
    backgroundColor:'transparent',
    width:'80%',
    justifyContent: 'center',
    alignSelf:'center'
  },
  styletextinput:{
    textAlign: 'center',
    color:'#fff',
    fontSize:14
  },
  textwhite:{
    color:'white'
  },
  btnstyle:{
    borderRadius:30,width:200,justifyContent:'center'
  }, 
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bgblack:{
    backgroundColor:'#000'
  },
  bgwhite:{
    backgroundColor:'#fff'
  },
  btnview:{
    paddingTop:20,flex:1,alignItems: 'center',alignSelf:'center'
  },
  pt20:{
    paddingTop:20
  }
 
});

export default StyleCss;