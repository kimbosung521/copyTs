import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scroll} stickyHeaderIndices={[0]}>
        <View style={{ paddingTop: Constants.statusBarHeight }}>
          <View style={styles.row}>
            <Text style={styles.doit}> O 할 일 {">"}</Text>
            <Text style={styles.rowRight1}>결제</Text>
            <Text style={styles.rowRight2}>O</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.row2}>
            <Text>★</Text>
            <View style={{ marginLeft: 20, marginRight: 3 }}>
              <Text>6월 8일</Text>
              <Text>버튼 누르고 10원 받기</Text>
            </View>
            <Text style={styles.right1}>X</Text>
          </View>
          <View style={styles.item}>
            <Text style={{ fontWeight: "bold" }}>토스뱅크</Text>
            <Text style={styles.right1}>{">"}</Text>
          </View>
          <View style={styles.row1}>
            <Text>★</Text>
            <View style={{ marginLeft: "20", marginRight: 3 }}>
              <Text style={styles.bold}>100원</Text>
              <Text>나라사랑우대통장</Text>
            </View>
            <Text style={styles.right2}>송금</Text>
          </View>
          <View style={styles.rowf}>
            <Text style={styles.rowf1}>대출 1</Text>
            <Text style={styles.rowf1}>증권 2</Text>
            <Text style={styles.rowf1}>저축 3 </Text>
            <Text style={styles.rowf1}>전체 4</Text>
          </View>
          <View style={styles.row2}>
            <Text>★</Text>
            <View style={{ marginLeft: "20", marginRight: 3 }}>
              <Text style={styles.bold}>100,000원</Text>
              <Text>6월에 쓴 돈</Text>
            </View>
            <Text style={styles.right2}>내역</Text>
          </View>
          <View style={styles.row1}>
            <Text>★</Text>
            <View style={{ marginLeft: "20", marginRight: 3 }}>
              <Text style={{ fontWeight: "bold" }}>내 신용점수</Text>
            </View>
            <Text style={styles.right2}>확인하기</Text>
          </View>
          <View style={styles.rowf}>
            <Text style={styles.rowf1}>계좌개설</Text>
            <Text style={styles.rowf1}>카드발급</Text>
            <Text style={styles.rowf1}>대출받기</Text>
          </View>
          <View style={styles.row2}>
            <Text>★</Text>
            <View style={{ marginLeft: "20", marginRight: 3 }}>
              <Text>립톤 복숭아 제로 아이스티</Text>
              <Text>100% 맛, 0%설탕</Text>
            </View>
          </View>
          <Text style={styles.textt}>김보성님을 위해 준비했어요</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.row3}>
              <View style={{ marginLeft: "20", marginRight: 3 }}>
                <Text style={{ fontWeight: "bold" }}>
                  혜택 받는 {"\n"}신용카드
                </Text>
              </View>
              <Text>★</Text>
            </View>
            <View style={styles.row4}>
              <View style={{ marginLeft: "20", marginRight: 3 }}>
                <Text style={{ fontWeight: "bold" }}>
                  혜택 받는 {"\n"}체크카드
                </Text>
              </View>
              <Text>★</Text>
            </View>
          </View>
          <View style={styles.last}>
            <View style={styles.las}>
              <Text>★</Text>
              <Text style={{ fontWeight: "bold" }}>오늘의 운세</Text>
              <Text style={styles.la}>{">"}</Text>
            </View>
            <View style={styles.las}>
              <Text>★</Text>
              <Text style={{ fontWeight: "bold" }}>내 현금연수증</Text>
              <Text style={styles.la}>{">"}</Text>
            </View>
            <View style={styles.las}>
              <Text>★</Text>
              <Text style={{ fontWeight: "bold" }}>토스프라임</Text>
              <Text style={styles.la}>{">"}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.nav}>
        <View style={styles.nav1}>
          <Text style={styles.nav2}>★{"\n"}홈</Text>
          <Text style={styles.nav2}>★{"\n"}혜택</Text>
          <Text style={styles.nav2}>★{"\n"}토스쇼핑</Text>
          <Text style={styles.nav2}>★{"\n"}증권</Text>
          <Text style={styles.nav2}>★{"\n"}전체</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#E0E0E0",
  },
  scroll: {
    backgroundColor: "#E0E0E0",
  },
  row: {
    marginTop: 0, // ← marginTop 제거
    height: 60,
    backgroundColor: "#E0E0E0",
    flexDirection: "row",
    alignItems: "center",
  },

  rowRight1: {
    marginLeft: "60%",
  },
  rowRight2: {
    flexDirection: "row",
    marginLeft: "7%",
  },
  right1: {
    marginLeft: "auto",
  },

  item: {
    flexDirection: "row",
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  doit: {
    fontSize: 17,
    color: "#CCCCCC",
  },
  row1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 20,
  },
  right2: {
    marginLeft: "auto",
    padding: 5,
    backgroundColor: "#DBDBDB",
    borderRadius: 7,
    padding: 8,
  },
  rowf: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "white",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
  },
  left: {
    marginRight: "auto",
  },
  rowf1: {
    flex: 1,

    borderWidth: 1.2,
    borderColor: "#CCCCCC",
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    paddingLeft: 25,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },
  row3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginRight: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: "50%",
  },
  row4: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width: "50%",
  },
  textt: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
  },
  last: {
    marginTop: 15,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    marginBottom: 100,
  },
  la: {
    marginLeft: "auto",
  },
  las: { flexDirection: "row", margin: 10 },
  body: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  nav: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#DDD",
    zIndex: 100,
  },
  nav1: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "white",
  },
  nav2: {
    flex: 1,
    alignItems: "center",
    borderColor: "#CCCCCC",
    paddingLeft: 30,
  },
  bold: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
