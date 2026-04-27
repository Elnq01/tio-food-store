"use client";

import { Col, Row } from "react-bootstrap";
import { FaBus, FaPhone, FaTag, FaCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";
import GuranteesStyle from "./Gurantees.module.css";
import Image from "next/image";
import Delivery from '../../../public/delivery-bike.png'
import Secured from '../../../public/atm-card.png'
import Support from '../../../public/customer-service.png'
import Discount from '../../../public/25-percent.png'

export default function Guarantees() {
  const cards = [
    { icon: <Image alt="delivery" width={80} height={80} src={Delivery} />, frontText: "World Class Delivery", backText: "Fast & Reliable" },
    // { icon: <FaBus size={40} />, frontText: "World Class Delivery", backText: "Fast & Reliable" },
    { icon: <Image alt="secured" width={80} height={80} src={Secured} />, frontText: "Secure Shopping", backText: "80% Protected" },
    { icon: <Image alt="support" width={80} height={80} src={Support} />, frontText: "Online Support", backText: "24/7 Available" },
    { icon: <Image alt="discount" width={80} height={80} src={Discount} />, frontText: "Top Discounts", backText: "Best Prices" },
  ];

  return (
    <Row className={GuranteesStyle.container}>
      {/* Overlays */}
      <div className={GuranteesStyle.overlay}></div>
      <div className={GuranteesStyle.overlayColor}></div>
      <div className={GuranteesStyle.heading}>
          <h4 className={GuranteesStyle.headingH1}>WHY TIO FOOD STORE?</h4>
      </div>

      {cards.map((card, idx) => (
        <Col
          key={idx}
          xs={12}
          sm={6}
          md={6}
          lg={3}
          className="d-flex justify-content-center align-items-center mb-4"
        >
          <div className={GuranteesStyle.flipContainer}>
            
              <div >
                {card.icon}
                <p className={GuranteesStyle.front}>{card.frontText}</p>
                <p>{card.backText}</p>
              </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}
