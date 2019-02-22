import React, {
    Component
  } from 'react';
  import PropTypes from 'prop-types';
  import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight,
    Dimensions
  } from 'react-native';
  const BASE_SIZE = 300
  const styles = StyleSheet.create({
      container: {

          alignItems: 'center'
      },
      pulse: {
          position: 'absolute',
          flex: 1
      },
      circle: {

        width:BASE_SIZE*0.6,
        height:BASE_SIZE*0.6, // 60% of the base size
        borderRadius: BASE_SIZE*0.6/2,
        backgroundColor: 'transparent',
        borderColor:'white',
        borderWidth:1
    },
    Text18B :{
      fontSize:22,
      fontWeight:'bold'
    }
  });
  
  class circlebtn extends Component {
      static propTypes = {
          color: PropTypes.string,
          diameter: PropTypes.number,
          duration: PropTypes.number,
          image: PropTypes.object,
          initialDiameter: PropTypes.number,
          numPulses: PropTypes.number,
          pulseStyle: PropTypes.object,
          speed: PropTypes.number,
          style: PropTypes.object
      };
  
      static defaultProps = {
          color: 'gray',
          diameter: 250,
          duration: 1000,
          image: null,
          initialDiameter: 0,
          numPulses: 3,
          pulseStyle: {},
          speed: 10,
          style: {
              top: 0,
              bottom: 0,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
          }
      }
  
      constructor(props){
          super(props);
  
          this.state = {
              color: this.props.color,
              duration: this.props.duration,
              image: this.props.image,
              maxDiameter: this.props.diameter,
              numPulses: this.props.numPulses,
              pulses: [],
              pulseStyle: this.props.pulseStyle,
              speed: this.props.speed,
              started: false,
              style: this.props.style
          };
      }
  
      mounted = true;
  
      componentDidMount(){
          const {numPulses, duration, speed} = this.state;
  
          this.setState({started: true});
  
          let a = 0;
          while(a < numPulses){
              this.createPulseTimer = setTimeout(()=>{
                  this.createPulse(a);
              }, a * duration);
  
              a++;
          }
  
          this.timer = setInterval(() => {
              this.updatePulse();
          }, speed);
      }
  
      componentWillUnmount(){
          this.mounted = false;
          clearTimeout(this.createPulseTimer);
          clearInterval(this.timer);
      }
  
      createPulse = (pKey) => {
          if (this.mounted) {
              let pulses = this.state.pulses;
  
              let pulse = {
                  pulseKey: pulses.length + 1,
                  diameter: this.props.initialDiameter,
                  opacity: .5,
                  centerOffset: ( this.state.maxDiameter - this.props.initialDiameter ) / 2
              };
  
              pulses.push(pulse);
  
              this.setState({pulses});
          }
      }
  
      updatePulse = () => {
          if (this.mounted) {
              const pulses = this.state.pulses.map((p, i) => {
                  let maxDiameter = this.state.maxDiameter;
                  let newDiameter = (p.diameter > maxDiameter ? 0 : p.diameter + 2);
                  let centerOffset = ( maxDiameter - newDiameter ) / 2;
                  let opacity = Math.abs( ( newDiameter / this.state.maxDiameter ) - 1 );
  
                  let pulse = {
                      pulseKey: i + 1,
                      diameter: newDiameter,
                      opacity: (opacity > .5 ? .5 : opacity),
                      centerOffset: centerOffset
                  };
  
                  return pulse;
  
              });
  
              this.setState({pulses});
          }
      }
  
      render(){
          const {color, image, maxDiameter, pulses, pulseStyle, started, style} = this.state;
          const containerStyle = [styles.container, style];
          const pulseWrapperStyle = {width: maxDiameter, height: maxDiameter};
  
          return (
                <View>
                  {started &&
                      <View style={pulseWrapperStyle}>
                          {pulses.map((pulse) =>
                              <View
                                  key={pulse.pulseKey}
                                  style={[
                                      styles.pulse,
                                      {
                                          backgroundColor: color,
                                          width: pulse.diameter,
                                          height: pulse.diameter,
                                          opacity: pulse.opacity,
                                          borderRadius: pulse.diameter / 2,
                                          top: pulse.centerOffset,
                                          left: pulse.centerOffset
                                      },
                                      pulseStyle
                                  ]}
                              />
                          )}
                         
                                   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                   <TouchableHighlight
              style = {{
                borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                width: Dimensions.get('window').width * 0.5,
                height: Dimensions.get('window').width * 0.5,
                backgroundColor:'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor:'white',
                borderWidth:1,
                shadowOffset:{  width: 10,  height: 10,  },
                shadowColor: '#fff',
                shadowOpacity: 1.0,

              }}
              underlayColor = '#ccc'
              onPress={() => this.props.navigation.navigate("FcourseScrSub")} 
            >
              <Text style={[styles.textwhite,styles.Text18B]}>START !</Text>
            </TouchableHighlight>
                               </View>
                          
                      </View>
                      
                  }
             </View>
         
          )
      }
  }
  export { circlebtn };