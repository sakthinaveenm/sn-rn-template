import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment, useEffect, useRef, useState} from 'react';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import {Slider} from '@miblanchard/react-native-slider';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CText from '../CText';

const VideoPlayer = () => {
  const playerRef = useRef(null);

  const initialState = {
    pause: false,
    lockOrientation: false,
    videoStartDuration: 0,
    videoEndDuration: 10000,
  };

  const [playerState, setPlayerState] = useState(initialState);

  const [player, setPlayer] = useState(null);
  useEffect(() => {
    if (setPlayer) {
      setPlayer(playerRef);
    }
  }, [playerRef]);
  const changePlayerState = value =>
    setPlayerState(prev => ({...prev, ...value}));

  const {pause, lockOrientation, videoEndDuration, videoStartDuration} =
    playerState;

  function toHoursAndMinutes(totalSeconds) {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours > 0) {
      return `${String(hours).length > 1 ? hours : '0' + hours} : ${
        String(minutes).length > 1 ? minutes : '0' + minutes
      } : ${
        String(Math.floor(seconds)).length > 1
          ? Math.floor(seconds)
          : '0' + Math.floor(seconds)
      } `;
    } else {
      return `${String(minutes).length > 1 ? minutes : '0' + minutes} : ${
        String(Math.floor(seconds)).length > 1
          ? Math.floor(seconds)
          : '0' + Math.floor(seconds)
      }`;
    }
  }

  return (
    <Fragment>
      <Video
        ref={playerRef}
        source={{
          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
        }}
        onLoad={vid => {
          changePlayerState({
            videoEndDuration: vid.duration,
          });
        }} // Callback when remote video is buffering
        onProgress={prog => {
          changePlayerState({
            videoStartDuration: prog.currentTime,
          });
        }}
        // onSeek={prog => {
        //   changePlayerState({
        //     videoStartDuration: prog.currentTime,
        //   });
        // }}
        onError={err => console.error(err)} // Callback when video cannot be loaded
        paused={pause}
        style={styles.backgroundVideo}
      />
      <View
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
        }}>
        {/* Section One */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                changePlayerState({
                  pause: !pause,
                });
              }}>
              <Icon
                name={'chevron-back-outline'}
                size={wp(5)}
                color="#FFFFFF"
              />
            </TouchableOpacity>
            <View
              style={{
                paddingLeft: wp(1),
              }}>
              <CText
                style={{
                  fontWeight: wp(15),
                }}>
                Movie Text
              </CText>
            </View>
          </View>
        </View>

        {/* Section Two */}
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingRight: wp(0.5),
              }}>
              <Text>{toHoursAndMinutes(videoStartDuration)}</Text>
            </View>
            <View
              style={{
                width: '80%',
              }}>
              <Slider
                thumbTintColor={'#ffffff'}
                value={videoStartDuration}
                thumbTouchSize={{
                  width: 5,
                  height: 5,
                }}
                maximumValue={videoEndDuration}
                onValueChange={value => {
                  let seekTime = Math.floor(value[0]);
                  if (player) {
                    try {
                      player.current.seek(seekTime);
                    } catch (err) {
                      console.error(err);
                    }
                  }
                }}
              />
            </View>
            <View
              style={{
                paddingLeft: wp(0.8),
              }}>
              <Text>{toHoursAndMinutes(videoEndDuration)}</Text>
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: wp(5),
              paddingBottom: hp(0.2),
            }}>
            {/* First Conatiner */}
            <View>
              {/* Lock Orientation */}
              <TouchableOpacity
                onPress={() => {
                  changePlayerState({
                    lockOrientation: !lockOrientation,
                  });
                }}>
                <Icon
                  name={lockOrientation ? 'md-lock-open' : 'md-lock-closed'}
                  size={wp(5)}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
            </View>
            {/* First Conatiner Ends */}

            <View>
              {/* Play Pause Starts */}
              <View>
                <TouchableOpacity
                  onPress={() => {
                    changePlayerState({
                      pause: !pause,
                    });
                  }}>
                  <Icon
                    name={pause ? 'play' : 'pause'}
                    size={wp(5)}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
              {/* Play Pause Ends */}

              <View></View>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </Fragment>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
