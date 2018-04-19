import React, { Component,PropTypes } from "react";
import { Form,Input, Button,Checkbox,Select} from '../../base/components/AntdComp';
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const Option = Select.Option;
let provinceData = ['Zhejiang', 'Jiangsu'];
let cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
class LinkageComp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0]
        }
    }
    handleProvinceChange = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    }
    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
        });
    }
    componentDidMount() {
        
    }
    render() {
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
        return (
            <div>
                <Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>
                    {provinceOptions}
                </Select>
                <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
                    {cityOptions}
                </Select>
                <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
                    {cityOptions}
                </Select>
                <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
                    {cityOptions}
                </Select>
            </div>
        );
    }

}

export default LinkageComp;
