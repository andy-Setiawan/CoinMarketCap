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
import {
  Get_Coin,
  Sort_Name,
  Sort_Price,
  Sort_Change,
  Sort_Volume,
  Set_Loading
} from "../redux/actions/PublicAction";
import SplashScreen from "react-native-splash-screen";
import numeral from "numeral";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.props.getCoin();
    this.interval = setInterval(() => {
      switch (this.props.sort) {
        case "coin":
          this.props.getCoin();
          break;
        case "name":
          this.props.sortName();
          break;
        case "price":
          this.props.sortPrice();
          break;
        case "change":
          this.props.sortChange();
          break;
        case "volume":
          this.props.sortVolume();
          break;
        default:
          break;
      }
    }, 20000);
    SplashScreen.hide();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
            <Text
              style={
                this.props.sort == "name" ? home.onTitleText : home.offTitleText
              }
              onPress={() => this.props.sortName()}
            >
              COIN
            </Text>
          </View>
          <View style={{ ...home.titleBox, justifyContent: "flex-end" }}>
            <Text
              style={
                this.props.sort == "price"
                  ? home.onTitleText
                  : home.offTitleText
              }
              onPress={() => this.props.sortPrice()}
            >
              PRICE
            </Text>
            <Text style={home.offTitleText}>{" / "}</Text>
            <Text
              style={
                this.props.sort == "change"
                  ? home.onTitleText
                  : home.offTitleText
              }
              onPress={() => this.props.sortChange()}
            >
              24H CHG
            </Text>
          </View>
          <View style={home.titleBox}>
            <Text
              style={
                this.props.sort == "coin" ? home.onTitleText : home.offTitleText
              }
              onPress={() => this.props.getCoin()}
            >
              M.CAP
            </Text>
            <Text style={home.offTitleText}>{" / "}</Text>
            <Text
              style={
                this.props.sort == "volume"
                  ? home.onTitleText
                  : home.offTitleText
              }
              onPress={() => this.props.sortVolume()}
            >
              VOL
            </Text>
          </View>
        </View>
        <ScrollView style={home.coinContainer}>
          {this.props.coinData
            .filter(data =>
              data.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((data, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => this.goToDetail(data.id, data.name)}
                >
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
                        {numeral(data.quote.USD.price).format("$0,0.00")}
                      </Text>
                      {data.quote.USD.percent_change_24h >= 0 ? (
                        <Text
                          style={{
                            ...home.percentText,
                            color: global.goodColor
                          }}
                        >
                          {numeral(data.quote.USD.percent_change_24h).format(
                            "0.000%"
                          )}
                        </Text>
                      ) : (
                        <Text
                          style={{
                            ...home.percentText,
                            color: global.badColor
                          }}
                        >
                          {numeral(data.quote.USD.percent_change_24h).format(
                            "0.000%"
                          )}
                        </Text>
                      )}
                    </View>
                    <View style={home.priceBox}>
                      <Text style={home.priceText}>
                        {numeral(data.quote.USD.market_cap)
                          .format("($ 0.00a)")
                          .toUpperCase()}
                      </Text>
                      <Text style={home.percentText}>
                        {numeral(data.quote.USD.volume_24h)
                          .format("($ 0.00a)")
                          .toUpperCase()}
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
  loading: state.public.isLoading,
  sort: state.public.sort
});

const mapDispatchToProps = dispatch => {
  return {
    getCoin: () => dispatch(Get_Coin()),
    sortName: () => dispatch(Sort_Name()),
    sortPrice: () => dispatch(Sort_Price()),
    sortChange: () => dispatch(Sort_Change()),
    sortVolume: () => dispatch(Sort_Volume()),
    setLoading: () => dispatch(Set_Loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
