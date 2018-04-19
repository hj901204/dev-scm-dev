import React, { Component, PropTypes } from "react";
import { shouldComponentUpdate } from '../consts/Utils';

class MapComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            map: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search) {
            this.setPlace(nextProps.search)
        }
    }

    componentDidMount() {
        this.setState({
            map: this.createBMap(this.props.id)
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    }

    createBMap = (id) => {
        const {longitude,latitude} = this.props;
        let map = new BMap.Map(id, { enableMapClick: false }),
            point = new BMap.Point(longitude, latitude);
        map.centerAndZoom(point, 14);
        map.enableScrollWheelZoom(); 
        map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_LEFT }));
        map.addControl(new BMap.MapTypeControl());
        var geolocationControl = new BMap.GeolocationControl();
        geolocationControl.addEventListener("locationSuccess", function (e) {
            var address = '';
            address += e.addressComponent.province;
            address += e.addressComponent.city;
            address += e.addressComponent.district;
            address += e.addressComponent.street;
            address += e.addressComponent.streetNumber;
            // console.log("当前定位地址为：" + address);
        });
        geolocationControl.addEventListener("locationError", function (e) {
            // console.log(e.message);
        });
        map.addControl(geolocationControl);
        this.theBrowser(map);
        return map
    }
    marker = (poi) => {
        let marker = new BMap.Marker(poi);
        marker.disableDragging();
        return marker
    }
    theLocation = (longitude, latitude) => {
        if (longitude && latitude) {
            const { map } = this.state;
            map.clearOverlays();
            var new_point = new BMap.Point(longitude, latitude);
            var marker = this.marker(new_point);
            map.addOverlay(marker); 
            map.panTo(new_point);
            var opts = {
                width: 0,
                height: 0,
            };
            var geoc = new BMap.Geocoder();
            geoc.getLocation(new_point, (rs) => {
                var addComp = rs.addressComponents;
                var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                var infoWindow = new BMap.InfoWindow(address, opts);
                map.openInfoWindow(infoWindow, new_point); 
            });
        }
    }
    theBrowser = (m) => {
        const map = m || this.state.map;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition((r) => {
            if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
                this.theLocation(r.point.lng, r.point.lat);
            }
        }, { enableHighAccuracy: true })
    }
    setPlace = (search) => {
        const { map } = this.state;
        const { searchValue, searchCity } = search;
        map.clearOverlays();
        const myFun = () => {
            const point = local.getResults().getPoi(0).point;
            this.theLocation(point.lng, point.lat);
        }
        const local = new BMap.LocalSearch(map, { 
            onSearchComplete: myFun
        });
        if (searchCity) {
            local.setLocation(searchCity);
        }
        if (searchValue) {
            local.search(searchValue);
        } else {
            if (searchCity) {
                local.search(searchCity);
            }
        }
    }
    // getPoint = () => {
    //     const { map } = this.state;
    //     var geoc = new BMap.Geocoder();
    //     geoc.getPoint("北京市海淀区上地10街", (point) => {
    //         if (point) {
    //             map.centerAndZoom(point, 16);
    //             map.addOverlay(new BMap.Marker(point));
    //         } else {
    //             console.log("您选择地址没有解析到结果!");
    //         }
    //     }, "北京市");
    // }
    render() {
        return (
            <div id={this.props.id} ></div>
        )
    }
};


MapComp.defaultProps = {
    id: 'location',
    longitude: 116.404,
    latitude: 39.915,
};
MapComp.propTypes = {
    id: PropTypes.string,
    longitude: PropTypes.number,
    latitude: PropTypes.number,
};

export default MapComp