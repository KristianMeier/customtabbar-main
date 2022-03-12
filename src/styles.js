import { StyleSheet, Dimensions, Platform} from "react-native";

export function getWidth() {
  let width = Dimensions.get("window").width
  width = width - 80
  return width / 5
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold"
  },
  header2: {
    paddingBottom:6,
    fontSize: 18,
  },
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
  iconPlus: {
    width: 22,
    height: 22,
    tintColor: 'white'
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
  nextWeek: { 
    paddingTop:6, 
    fontSize: 14, color: "blue", 
    fontWeight: "bold"
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
    containerTable: {  flex: 1, padding: 16, paddingTop: 100, backgroundColor: '#fff' },
    head: {height: 40, backgroundColor: 'gainsboro' },
    wrapper: { flexDirection: 'row' },
    title: {flex: 1, textAlign: 'center' },
    row: {height: 28 },
    text: { fontSize: 11 ,textAlign: 'center' }
});

export default styles;