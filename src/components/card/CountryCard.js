import React, { useCallback, useEffect, useState } from "react";
import { Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import InfoCountry from "./InfoCountry";
import axios from "axios";

const {Meta} = Card;

const CountryCard = ({country, text, total}) => {
    const {Country, CountryCode} = country || {}
    const [isVisible, setIsVisible] = useState(false);
    const [flagImage, setFlagImage] = useState("");

    const getFlagImageCountry = useCallback(async () => {
        const res = await axios.get(`https://restcountries.com/v3.1/alpha/${CountryCode}`);
        if(res?.data){
            setFlagImage(res?.data[0]?.flags?.png);
        }
    }, [CountryCode]);

    const checkShowModal = () => {
        setIsVisible(!isVisible);
    }

    useEffect(() => {
        getFlagImageCountry();
    }, [getFlagImageCountry]);

    return (
        <>
            <div>
            <Card
                cover={
                    <img
                        src={flagImage}
                        style={{ height: "150px", objectFit: "cover" }}
                    />
                }
                actions={[
                    <button className="btn btn-outline-primary m-3"  onClick={checkShowModal}>
                        <EyeOutlined className="text-warning" /> <br /> View Country
                    </button>
                  ]}                    
            >
                <Meta 
                    title={`${Country} - ${CountryCode}`}
                    description={`${text}: ${total}`}
                />   
            </Card>
        </div>
        <Modal
                visible={isVisible}
                onOk={checkShowModal}
                onCancel={checkShowModal}
                footer={null}
            >
                <InfoCountry countryCode={CountryCode}/>
            </Modal> 
        </>
    )
}

export default CountryCard;