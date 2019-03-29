import { StyleSheet ,Dimensions,StatusBar } from 'react-native';

const BASE_SIZE = 300
const DeviceWidth = Dimensions.get('window').width
const DeviceHeight = Dimensions.get('window').height
const {height, width} = Dimensions.get('window');
const itemWidth = (width - 5) / 3;
export default StyleSheet.create({
    // default container
flex_1:{
    flex:1
},
container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    fontFamily: "Athiti Light",
},
flex_row:{
    flexDirection : 'row'
},
text_center:{
    textAlign:'center'
},
icoinhd:{
    width:19,height:20
},
itemCenter:{
    alignItems:'center'
},
// ส่วนheader สำหรับ header ที่ไม่มี background 
header_nobg:{
    backgroundColor:'transparent',elevation:0, marginTop: StatusBar.currentHeight,
},
// ส่วนheader สำหรับ header มี borderbottom 
header_with_bdb:{
    backgroundColor:'transparent', marginTop: StatusBar.currentHeight,
},
header_not_set_h:{
    backgroundColor:'transparent',elevation:0
},
// headerprofiletab
header_pf:{
    height:210
},
flex3_header:{
    flexDirection: "row", flex: 1,padding:0,borderBottomColor:'#dcdcdc',borderBottomWidth:0.5,paddingTop:20,paddingLeft:10,paddingRight:10,paddingBottom:10
},
subflex3_img:{
    width: '30%',height:90,justifyContent:'center'
},
subflex3_username:{
    width: '50%',height:90, justifyContent: 'center'
},
subflex3_settingico:{
    width: '20%', alignItems: 'center',height:90, justifyContent: 'center',alignItems:'flex-end'
},
imgprofile:{
    width: 85,height:85,borderRadius: 150/2
},
// Text ใน Header
headingCt:{
    fontSize:20,fontWeight:'bold'
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    height:100
    // or 'stretch'
},    
// background
bggray:{
    backgroundColor:'#f7f7f7'
},
bgwhite:{
    backgroundColor:'#fff'
},
bgblack:{
    backgroundColor:'#000'
},
bgtransparent:{
    backgroundColor:'transparent'
},
// fontsize
text_12:{
    fontSize:12
},
text_14:{
    fontSize:14
},
text_15:{
    fontSize:14
    },
text_16:{
    fontSize:16
},
text_18:{
    fontSize:18
},
text_20:{
    fontSize:20
},
text_22:{
    fontSize:22
},
text_24:{
    fontSize:24
},
text_25:{
    fontSize:25
},
text_26:{
    fontSize:26
},
// fontcolor
text_gray:{
    color: '#cdcdcd'
},
text_black:{
    color:'#000'
},
text_graywhite:{
    color: '#dcdcdc'
},
text_darkgray:{
    color: 'gray'
},
textwhite:{
    color:'white'
    },
// padding
pd10:{
    padding:10
},
pd15:{
    padding:15
},
pt5:{
    paddingTop:5
},
pt10:{
    paddingTop:10
},
pt20:{
    paddingTop:20
},
pt15:{
    paddingTop:15
},
pb5:{
    paddingBottom:5
},
pb15:{
    paddingBottom:15
},
pb20:{
    paddingBottom:20
},
pt30:{
    paddingTop:30
},
pt50:{
    paddingTop:50
},
pl10:{
    paddingLeft:10
},
pl15:{
    paddingLeft:15
},
pl20:{
    paddingLeft:20
},
pl25:{
    paddingLeft:25
},
pr20:{
    paddingRight:20
},
pr35:{
    paddingRight:35
},
pr10:{
    paddingRight:10
},
pr15:{
    paddingRight:15
},
mb15:{
    marginBottom:15
},
py10:{
paddingTop:10,
paddingBottom:10
},
boxview:{
    width: '100%', 
    height: 70,
    alignSelf:'center',
    borderRadius:5,
    backgroundColor:'white',
    marginLeft:15,
    marginRight:15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
},
circlenb:{
    borderRadius:20,
    width: 40,
    height: 40,
    backgroundColor:'#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
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

btnstyle:{
    borderRadius:30,width:200,justifyContent:'center'
},
// controlTab
tabsContainerStyle: {
    //custom styles
},
tabStyle: {
    backgroundColor : 'transparent',
    borderColor: '#fff',
    height:40
},
tabTextStyle: {
    color:'#fff',
    fontWeight:'bold',
    fontSize:16
},
activeTabStyle: {
    backgroundColor : 'white'
},
activeTabTextStyle: {
    color:'#000',
    fontWeight:'bold',
    fontSize:16
},
tabBadgeContainerStyle: {
    //custom styles
},
activeTabBadgeContainerStyle: {
    //custom styles
},
tabBadgeStyle: {
    //custom styles
},
activeTabBadgeStyle: {
    //custom styles
},
circle: {

    width:BASE_SIZE*0.6,
    height:BASE_SIZE*0.6, // 60% of the base size
    borderRadius: BASE_SIZE*0.6/2,
    backgroundColor: 'transparent',
    borderColor:'white',
    borderWidth:1
},
Text14B :{
fontSize:14,
fontWeight:'bold'
},
textbold:{
    fontWeight:'bold'
},

btnstyle:{
borderRadius:30,width:200,justifyContent:'center'
}, 
btnview:{
paddingTop:20,flex:1,alignItems: 'center',alignSelf:'center'
},
imgUpload:{
paddingVertical: 30,
width: 100,
height: 100,
borderRadius: 75
},
listProfile:{
flex: 1, flexDirection: 'row',backgroundColor: '#fff',borderBottomWidth:0.5,borderBottomColor:'#ececec'
},
col1_listpf:{
width: '50%',padding:10,justifyContent:'center'
},
col2_listpf:{
width: '50%',paddingRight:10,justifyContent:'center'
},

fullcol:{
width: '100%',padding:10,justifyContent:'center'
},
inputpf:{
fontWeight:'bold',height:40,textAlign: 'right'
},
iconinput:{
color:'#cdcdcd',fontSize:18,textAlign:'right'
},
//   homescreen
tabcustom : {
backgroundColor:'transparent',

justifyContent: 'center',
alignSelf:'center',
},
styletextinput:{
textAlign: 'center',
color:'#fff',
fontSize:14
},
tabheader:{
    backgroundColor:'transparent',justifyContent: 'center',paddingTop:24,height:70
},
subtabheader:{
    backgroundColor:'#fff',width:100
},
textintab:{
    color:'#bdb9b9',fontSize:20,fontWeight:'bold'
},
textintabActive:{
    color:'#000',fontSize:20,fontWeight:'bold'
},
bgimgContentfrist:{
    width: '100%', height: 250,marginLeft: 0, paddingLeft: 0, paddingRight: 0, marginRight: 0,marginTop:0
},
headingcontent:{
    flex:1,justifyContent: 'center',alignItems: 'flex-start',paddingLeft:20
},
imagebutton:{
    justifyContent:'center',marginLeft:10,marginRight:10
},

viewtextinsub:{
    flex:1,justifyContent: 'center',alignItems: 'flex-start',paddingLeft:15
},
textinsubmenu:{
    color:'white',fontSize:25,fontWeight:'bold'
},
styleimgBtn:{
    width: '100%', height: 120,alignSelf:'center'
},
listsaved:{
    padding:15,backgroundColor:'white',borderBottomColor:'#efefef',borderBottomWidth:1
},
gridView: {
    flex: 1,
},
itemContainer: {
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    padding:2,
    height:110
},
imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    maxWidth:itemWidth,
},
backgroundImagefull: {
    flex: 1,
    resizeMode: 'cover', 
    top: 0,
    bottom:0
   // or 'stretch'
},
circleButtonStart:{
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.38,
    height: Dimensions.get('window').width * 0.38,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0
},
pushText70:{
    paddingTop:20,paddingLeft:20,paddingRight:20,paddingTop:DeviceHeight / 3
},
buttonRow:{
    flex: 1, flexDirection: 'row',paddingTop:40,alignItems:'center',justifyContent:'center'
},
centerXY:{
    justifyContent:'center',alignItems:'center'
},
bgacc:{
    backgroundColor:'#fff',
    paddingTop:10,
    paddingBottom:10,
    height:60
},
// accordian Video
flexVdoMainView:{
    flex: 1, flexDirection: 'row',backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'#f9f9f9'
},
ViewIconPlaySwipe:{
    width:'12%',padding:10
},
iconSwipe:{
    height:40,
    width:40
},
ViewtextHeading:{
    padding:10,width:'58%',justifyContent:'center',alignItems:'flex-start'
},
Viewdl:{
    width: '30%', padding:10,alignItems:'flex-end',justifyContent:'center'
},
icodl:{
    height:20,
    width:16
},
H_bgimg:{
    height:220
},
btnTime:{
    borderRadius:50,
    width: 100,
    height: 100,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowColor: '#fff',
    shadowOpacity: 1.0,
},
// box data in program screen
ViewbgPG:{
    width: '100%', height: 120,alignSelf:'center',
},
// กึ่งกลางแนวตั้ง และ ชิดขอบซ้าย
centerYleftX:{
    justifyContent:'center',
    alignItems:'flex-start'
},
centerYlrightX:{
    justifyContent:'center',
    alignItems:'flex-end'
},
boxIntroduction:{
    height: 85,alignSelf:'center',backgroundColor:'white',marginLeft:10,marginRight:10,borderRadius: 5
},
jtfContent:{
    justifyContent:'center'
},
btnFollowstyle:{
    borderRadius:30,width:'100%',justifyContent:'center',height:30
  }, 
btnFollowview:{
    justifyContent:'center',flex:1,alignItems: 'center',alignSelf:'center'
},
// รูปโปรไฟล์ในหน้า follows
imgProfile_fl:{
    width: 60,height:60,borderRadius: 60/2
},
customfont:{
     fontFamily: 'Athiti-Light'
},
imageViewContainer: {
    width: 200,
    height: 200 ,
    margin: 10,
    borderRadius : 10
  },
imgprofilesub:{
    width:50,
    height:50,
    borderRadius: 25
},
fontstest:{
    fontSize: 40,
    fontFamily: "PrintAble4U",
}
});


