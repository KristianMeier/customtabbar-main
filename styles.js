import { StyleSheet, Dimensions} from "react-native";


export function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 80
  return width / 5
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomBar: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 40,
    marginHorizontal: 20,
    height: 60,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10
    },
    paddingHorizontal: 20,
  },
  icon: {
    position: 'absolute',
    top: 20
  }
});

export default styles;