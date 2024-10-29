import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* header section */}
      <View style={styles.header}>
        <Image
          source={{ uri: "../assets/images/malepro.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.title}>My Wallet</Text>
        <Ionicons name="options-outline" size={24} color="black" />
      </View>

      {/* balance section */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Total Balance</Text>
        <Text style={styles.balanceAmount}>$149.868</Text>
        <Text style={styles.balanceChange}>+49,89%</Text>
        <Ionicons
          name="chevron-down-outline"
          size={24}
          style={styles.balanceIcon}
        />
      </View>

      {/* filter section */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>
          <Ionicons
            name="chevron-up-outline"
            size={20}
            color="black"
            style={{ top: 4 }}
          />
          Short by
        </Text>
        <Text style={styles.filterText}>
          Last 24h
          <Ionicons
            name="chevron-down-outline"
            size={20}
            color="black"
            style={{ top: 5 }}
          />
        </Text>
      </View>

      {/* wallet items section */}
      <ScrollView style={styles.walletItemsContainer}>
        <WalletItem
          icon="dollar-sign"
          color="#5a00ff"
          amount="25.895325"
          value="$89.759"
          change="+4.89"
        />
        <WalletItem
          icon="dollar-sign"
          color="#ff0000"
          amount="15.789325"
          value="$54.724"
          change="+54.23%"
        />
        <WalletItem
          icon="dollar-sign"
          color="#808080"
          amount="5.679121"
          value="$5.385"
          change="-5.93%"
        />
      </ScrollView>

      {/* bottom navigation */}
      <View style={styles.bottomNav}>
        <Ionicons name="wallet-outline" size={27} color="gray" />
        <Ionicons name="bar-chart-outline" size={27} color="gray" />
        <Ionicons name="compass-outline" size={27} color="gray" />
        <Ionicons name="notifications-outline" size={27} color="gray" />
        <Ionicons name="settings-outline" size={27} color="gray" />
      </View>
    </View>
  );
}

function WalletItem({
  icon = "",
  color = "",
  amount = "",
  value = "",
  change = "",
}) {
  return (
    <View style={styles.walletItem}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <FontAwesome6 name={icon} size={24} color="white" />
      </View>
      <View>
        <Text style={styles.walletAmount}>{amount}</Text>
        <Text style={styles.walletValue}>{value}</Text>
      </View>
      <Text
        style={[
          styles.walletChange,
          { color: change.startsWith("+") ? "green" : "red" },
        ]}
      >
        {change}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "system-ui",
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  header: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 20,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  balanceContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  balanceText: {
    fontSize: 20,
    paddingBottom: 10,
    fontWeight: "600",
  },

  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 3,
  },

  balanceChange: {
    fontSize: 15,
    color: "#fff",
    borderRadius: 5,
    marginLeft: 1,
    marginHorizontal: "auto",
    backgroundColor: "green",
  },

  balanceIcon: {
    marginTop: 15,
    marginHorizontal: "auto",
    color: "black",
  },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  filterText: {
    color: "gray",
    fontSize: 14,
  },

  walletItemsContainer: {
    flex: 1,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#e5e5e5",
  },

  walletItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  walletAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },

  walletValue: {
    fontSize: 12,
    color: "gray",
  },

  walletChange: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
