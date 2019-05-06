import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity
} from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import { connect } from "react-redux";
import { styles, global, coin } from "../../assets/css/Style";
import { Icon } from "native-base";
import { Get_Info, Set_Loading } from "../redux/actions/PublicAction";
import ViewMoreText from "react-native-view-more-text";
import numeral from "numeral";

class CoinDetail extends Component {
  componentDidMount() {
    this.props.setLoading();
    const id = this.props.navigation.getParam("id");
    this.props.getInfo(id);
  }

  static navigationOptions = ({ navigation }) => {
    const icon = navigation.getParam("id");
    const name = navigation.getParam("name");
    return {
      header: (
        <View style={styles.header}>
          <Icon
            style={styles.headerIcon}
            type="Ionicons"
            name="md-arrow-back"
            onPress={() => navigation.pop()}
          />
          <View style={styles.headerBox}>
            <Image
              style={styles.headerLogo}
              source={{
                uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${icon}.png`
              }}
            />
            <Text style={styles.headerText}>{name}</Text>
          </View>
        </View>
      )
    };
  };

  handleOpenUrl = link => {
    Linking.openURL(link);
  };

  renderViewMore(onPress) {
    return (
      <Text style={coin.viewText} onPress={onPress}>
        View more
      </Text>
    );
  }

  renderViewLess(onPress) {
    return (
      <Text style={coin.viewText} onPress={onPress}>
        View less
      </Text>
    );
  }

  render() {
    const id = this.props.navigation.getParam("id");
    return this.props.loading === true ? (
      <View style={styles.container}>
        <UIActivityIndicator color={global.textColor} />
      </View>
    ) : (
      this.props.coin
        .filter(value => value.id == id)
        .map((data, i) => {
          return (
            <ScrollView style={{ ...styles.container }} key={i}>
              <View style={coin.priceBox}>
                <Text style={coin.priceText}>
                  {numeral(data.quote.USD.price).format("$0,0.00")}
                </Text>
                <View style={coin.percentBox}>
                  {data.quote.USD.percent_change_24h >= 0 ? (
                    <Text
                      style={{
                        ...coin.percentText,
                        color: global.goodColor
                      }}
                    >
                      {"+"}
                      {data.quote.USD.percent_change_24h.toFixed(2)}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        ...coin.percentText,
                        color: global.badColor
                      }}
                    >
                      {data.quote.USD.percent_change_24h.toFixed(2)}
                    </Text>
                  )}
                  <Text style={coin.pastText}> Past 24H</Text>
                </View>
              </View>
              <View style={coin.detailContainer}>
                <View style={coin.detailBox}>
                  <Text style={coin.detailText}>Market Cap</Text>
                  <Text style={coin.valueText}>
                    {numeral(data.quote.USD.market_cap)
                      .format("($ 0.00a)")
                      .toUpperCase()}
                  </Text>
                </View>
                <View style={coin.detailBox}>
                  <Text style={coin.detailText}>Circulation Supply</Text>
                  <Text style={coin.valueText}>
                    {numeral(data.circulating_supply)
                      .format("($ 0.00a)")
                      .toUpperCase()}
                  </Text>
                </View>
                <View style={coin.detailBox}>
                  <Text style={coin.detailText}>24H Volume</Text>
                  <Text style={coin.valueText}>
                    {numeral(data.quote.USD.volume_24h)
                      .format("($ 0.00a)")
                      .toUpperCase()}
                  </Text>
                </View>
                <View style={coin.detailBox}>
                  <Text style={coin.detailText}>Platform</Text>
                  <Text style={coin.valueText}>
                    {this.props.info.platform === null
                      ? "n/a"
                      : this.props.info.platform.name}
                  </Text>
                </View>
                <View style={coin.aboutBox}>
                  <Text style={coin.detailTitle}>About</Text>
                  <ViewMoreText
                    numberOfLines={3}
                    renderViewMore={this.renderViewMore}
                    renderViewLess={this.renderViewLess}
                  >
                    <Text style={coin.detailAbout}>
                      {this.props.info.description === null
                        ? "n/a"
                        : this.props.info.description}
                    </Text>
                  </ViewMoreText>
                </View>
                {this.props.info.urls.website[0] === undefined ? null : (
                  <TouchableOpacity
                    onPress={() =>
                      this.handleOpenUrl(this.props.info.urls.website[0])
                    }
                  >
                    <View style={coin.detailBox}>
                      <View style={coin.iconBox}>
                        <Icon
                          style={coin.detailIcon}
                          type="Ionicons"
                          name="ios-link"
                        />
                        <Text style={coin.detailText}>Website</Text>
                      </View>
                      <Icon
                        style={{
                          ...coin.detailIcon,
                          color: global.textColor
                        }}
                        type="Ionicons"
                        name="md-link"
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {this.props.info.urls.twitter[0] === undefined ? null : (
                  <TouchableOpacity
                    onPress={() =>
                      this.handleOpenUrl(this.props.info.urls.twitter[0])
                    }
                  >
                    <View style={coin.detailBox}>
                      <View style={coin.iconBox}>
                        <Icon
                          style={coin.detailIcon}
                          type="Ionicons"
                          name="logo-twitter"
                        />
                        <Text style={coin.detailText}>Twitter</Text>
                      </View>
                      <Icon
                        style={{
                          ...coin.detailIcon,
                          color: global.textColor
                        }}
                        type="Ionicons"
                        name="md-link"
                      />
                    </View>
                  </TouchableOpacity>
                )}

                {this.props.info.urls.reddit[0] === undefined ? null : (
                  <TouchableOpacity
                    onPress={() =>
                      this.handleOpenUrl(this.props.info.urls.reddit[0])
                    }
                  >
                    <View style={coin.detailBox}>
                      <View style={coin.iconBox}>
                        <Icon
                          style={coin.detailIcon}
                          type="Ionicons"
                          name="logo-reddit"
                        />
                        <Text style={coin.detailText}>Reddit</Text>
                      </View>
                      <Icon
                        style={{
                          ...coin.detailIcon,
                          color: global.textColor
                        }}
                        type="Ionicons"
                        name="md-link"
                      />
                    </View>
                  </TouchableOpacity>
                )}

                {this.props.info.urls.chat[0] === undefined ? null : (
                  <TouchableOpacity
                    onPress={() =>
                      this.handleOpenUrl(this.props.info.urls.chat[0])
                    }
                  >
                    <View style={coin.detailBox}>
                      <View style={coin.iconBox}>
                        <Icon
                          style={coin.detailIcon}
                          type="Ionicons"
                          name="md-chatbubbles"
                        />
                        <Text style={coin.detailText}>Chat</Text>
                      </View>
                      <Icon
                        style={{
                          ...coin.detailIcon,
                          color: global.textColor
                        }}
                        type="Ionicons"
                        name="md-link"
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {this.props.info.urls.explorer[0] === undefined ? null : (
                  <TouchableOpacity
                    onPress={() =>
                      this.handleOpenUrl(this.props.info.urls.explorer[0])
                    }
                  >
                    <View style={coin.detailBox}>
                      <View style={coin.iconBox}>
                        <Icon
                          style={coin.detailIcon}
                          type="Ionicons"
                          name="md-search"
                        />
                        <Text style={coin.detailText}>Explorer</Text>
                      </View>
                      <Icon
                        style={{
                          ...coin.detailIcon,
                          color: global.textColor
                        }}
                        type="Ionicons"
                        name="md-link"
                      />
                    </View>
                  </TouchableOpacity>
                )}
                {this.props.info.urls.source_code[0] === undefined ? null : (
                  <TouchableOpacity
                    onPress={() =>
                      this.handleOpenUrl(this.props.info.urls.source_code[0])
                    }
                  >
                    <View style={coin.detailBox}>
                      <View style={coin.iconBox}>
                        <Icon
                          style={coin.detailIcon}
                          type="Ionicons"
                          name="logo-github"
                        />
                        <Text style={coin.detailText}>Github</Text>
                      </View>
                      <Icon
                        style={{
                          ...coin.detailIcon,
                          color: global.textColor
                        }}
                        type="Ionicons"
                        name="md-link"
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            </ScrollView>
          );
        })
    );
  }
}

const mapStateToProps = state => ({
  info: state.public.info,
  loading: state.public.isLoading,
  coin: state.public.coin
});

const mapDispatchToProps = dispatch => {
  return {
    getInfo: id => dispatch(Get_Info(id)),
    setLoading: () => dispatch(Set_Loading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinDetail);
