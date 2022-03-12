import { StyleSheet, Dimensions, Platform} from "react-native";


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
  },
  buttomMarker: {
    width: getWidth() - 20,
    height: 2,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 98,
    left: 50,
    borderRadius: 20,
  },
  tabBarIcon: {
    width: 55,
    height: 55,
    backgroundColor: 'red',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS == "android" ? 50 : 30
  },
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff' 
  },
  head: { 
    height: 40, 
    backgroundColor: '#f1f8ff' 
  },
  text: { 
    margin: 6 
  },
  containerTable: { flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'gainsboro' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1 },
  row: { height: 28 },
  text: { textAlign: 'center' },
});

export default styles;