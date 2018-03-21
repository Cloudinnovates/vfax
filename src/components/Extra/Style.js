const React = require("react-native");
const {Platform, Dimensions} = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export  default{
    deviceHeight:deviceHeight,
    deviceWidth:deviceWidth,
    sideMenuContainer:{
        backgroundColor: "#FFFFFF",//#3498db
        justifyContent:"center",
        flex:1,
        alignItems:"stretch" 
    },    
    container: {
        flex: 1,      
        alignItems: 'stretch',
        backgroundColor: "#3498db"
    },
    containerWhite: {
        flex: 1,      
        alignItems: 'stretch',
        backgroundColor: "#FFFFFF"
    },
    header:{
        backgroundColor: "#FFFFFF",
    },
    headerM:{
        backgroundColor: "#FFFFFF",
        marginBottom:20,
    },
    img:{            
        backgroundColor:"#3498db",
        marginTop: 30,
        marginBottom: 30,
        alignSelf: "stretch",
    },
    list:{
       alignSelf: "stretch",
    },    
    textHeader:{
        fontWeight: Platform.OS === "ios" ? "600" : "500",
        fontSize:24,
        marginLeft:20,
        color:"#777"//"#FFFFFF"
    },
    numberHeader:{
        fontWeight: Platform.OS === "ios" ? "400" : "300",
        fontSize:16,
        marginLeft:15,
        color:"#777"//"#FFFFFF"
    }, 
    text:{
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize:22,
        marginLeft:20,
        color:"#777"//"#FFFFFF"
    }, 
    icon:{
        color:'#777',
        fontSize:24,
        width:25
    },
    activeIcon:{
        color:'#3498db',
        fontSize:26,
        width:30
    },
      screenView:{
        flex: 1,
        backgroundColor: "#3498db",
        alignItems: 'center'
      },
      screenViewWhite:{
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center'
      },    
      logoContainer:{
        alignItems:'center',
        flexGrow: 1,
        justifyContent:'center'
      },  
      buttonContainer:{
          paddingVertical:10,
          marginTop:20,
          alignItems:'center',
      },
      buttonText:{
          textAlign: 'center',
          color:'#FFFFFF',
          fontWeight: '700',
          fontSize: 22
      },
      footerTab:{
        backgroundColor: "#3498db",
      },
      drawerCover:{
        backgroundColor: "#3498db",
        alignSelf:"stretch",
        height: deviceHeight / 6,
        width:null,
        marginBottom:10,
        //   paddingBottom:10,
        alignItems:'center'
      },
      bottomTab:{
          backgroundColor:"#3498db",
      },
      imgView:{
          flex:1,
          alignItems:"stretch"
      },
      footerContainer:{
        marginTop:5,
        marginLeft:10,
        marginRight:10,
        marginBottom:10,
    },
    footerText:{
        fontSize:14,
        color:'#aaa',
    },
    slider: {
        height: 10,
        alignSelf:"stretch",
        backgroundColor:"blue",
    },
    soundController:{
        marginLeft:20,
        marginRight:20,
        fontSize:32,
    },
    sliderContainer:{        
        marginLeft:50,
        alignSelf:"stretch",
        backgroundColor:"blue"
    },
};