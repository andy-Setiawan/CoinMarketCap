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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   console.log("ok");
    // }, 30000);
    this.props.setLoading();
    //   this.props.getCoin()
  }

  // this.props.loading === true ? (
  //   <View style={styles.container}>
  //     <UIActivityIndicator color={global.textColor} />
  //   </View>
  // ) : 
  

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
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
        <View style={home.titleBox}>
          <Text style={home.titleText}>COIN</Text>
          <Text style={home.titleText}>PRICE</Text>
          <Text style={home.titleText}>24H CHG</Text>
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
                  onPress={() =>
                    this.props.navigation.navigate("CoinDetail", {
                      id: data.id,
                      name: data.name
                    })
                  }
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
                    <Text style={{ ...home.priceText }}>
                      {"$ "}
                      {data.quote.USD.price
                        .toFixed(2)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                    {data.quote.USD.percent_change_24h.toFixed(2) >= 0 ? (
                      <Text
                        style={{ ...home.percentText, color: global.goodColor }}
                      >
                        {data.quote.USD.percent_change_24h.toFixed(2)}
                        {"%"}
                      </Text>
                    ) : (
                      <Text
                        style={{ ...home.percentText, color: global.badColor }}
                      >
                        {data.quote.USD.percent_change_24h.toFixed(2)}
                        {"%"}
                      </Text>
                    )}
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
    // getCoin : () => dispatch(Get_Coin()),
    setLoading: () => dispatch(Set_Loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
