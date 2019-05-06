import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { styles, home, global } from "../../assets/css/Style";
import { Icon } from "native-base";
import { UIActivityIndicator } from "react-native-indicators";
import { Get_Coin, Set_Loading } from "../redux/actions/PublicAction";
import SplashScreen from "react-native-splash-screen";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getCoin();
    }, 10000);
    SplashScreen.hide();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  abbrNum = (number, decPlaces) => {
    decPlaces = Math.pow(10, decPlaces);
    var abbrev = ["k", "M", "B", "T"];
    for (var i = abbrev.length - 1; i >= 0; i--) {
      var size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
        number = Math.round((number * decPlaces) / size) / decPlaces;
        if (number == 1000 && i < abbrev.length - 1) {
          number = 1;
          i++;
        }
        number += abbrev[i];
        break;
      }
    }
    return number;
  };

  goToDetail = async (dataId, dataName) => {
    await this.props.setLoading();
    await this.props.navigation.navigate("CoinDetail", {
      id: dataId,
      name: dataName
    });
  };

  render() {
    return this.props.loading === true ? (
      <View style={styles.container}>
        <UIActivityIndicator color={global.textColor} />
      </View>
    ) : (
      <View style={{ ...styles.container, padding: 10 }}>
        <View style={home.search}>
          <Icon style={home.icon} type="Ionicons" name="md-search" />
          <TextInput
            style={home.input}
            placeholder="Search coins"
            placeholderTextColor={global.textInputColor}
            returnKeyType="done"
            autoCapitalize="none"
            onChangeText={search => this.setState({ search })}
          />
        </View>
        <View style={home.titleContainer}>
          <View style={home.titleBox}>
            <Text style={home.titleText}>COIN</Text>
          </View>
          <View style={{ ...home.titleBox, justifyContent: "flex-end" }}>
            <Text style={home.titleText}>PRICE</Text>
            <Text style={home.titleText}> / </Text>
            <Text style={home.titleText}>24H CHG</Text>
          </View>
          <View style={home.titleBox}>
            <Text style={home.titleText}>M.CAP</Text>
            <Text style={home.titleText}> / </Text>
            <Text style={home.titleText}>VOL</Text>
          </View>
        </View>
        <ScrollView style={home.coinContainer}>
          {this.props.coinData
            .filter(data =>
              data.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((data, i) => {
              return (
                <TouchableOpacity key={i} onPress={() => this.goToDetail(data.id,data.name)}>
                  <View style={home.coinBox}>
                    <View style={home.number}>
                      <Text style={home.numberText}>{i + 1}</Text>
                    </View>
                    <View style={home.coinNameBox}>
                      <Image
                        style={home.coinImage}
                        source={{
                          uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${
                            data.id
                          }.png`
                        }}
                      />
                      <View style={home.coinName}>
                        <Text
                          style={{
                            ...home.coinText,
                            fontSize: 15,
                            fontWeight: "bold"
                          }}
                        >
                          {data.symbol}
                        </Text>
                        <Text style={{ ...home.coinText, fontSize: 12 }}>
                          {data.name}
                        </Text>
                      </View>
                    </View>
                    <View style={home.priceBox}>
                      <Text style={home.priceText}>
                        {"$ "}
                        {data.quote.USD.price
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </Text>
                      {data.quote.USD.percent_change_24h.toFixed(2) >= 0 ? (
                        <Text
                          style={{
                            ...home.percentText,
                            color: global.goodColor
                          }}
                        >
                          {data.quote.USD.percent_change_24h.toFixed(2)}
                          {"%"}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            ...home.percentText,
                            color: global.badColor
                          }}
                        >
                          {data.quote.USD.percent_change_24h.toFixed(2)}
                          {"%"}
                        </Text>
                      )}
                    </View>
                    <View style={home.priceBox}>
                      <Text style={home.priceText}>
                        {"$ "}
                        {this.abbrNum(data.quote.USD.market_cap, 2)}
                      </Text>
                      <Text style={home.percentText}>
                        {"$ "}
                        {this.abbrNum(data.quote.USD.volume_24h, 2)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  coinData: state.public.coin,
  loading: state.public.isLoading
});

const mapDispatchToProps = dispatch => {
  return {
    getCoin: () => dispatch(Get_Coin()),
    setLoading: () => dispatch(Set_Loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
