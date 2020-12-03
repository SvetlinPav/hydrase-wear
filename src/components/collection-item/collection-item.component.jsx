import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";
import { store } from "react-notifications-component";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-styles.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const addItemToCart = () => {
    addItem(item);
    store.addNotification({
      title: `${item.name} has been added to your cart.`,
      message: `This cool looking ${item.name} is waiting for you 👀`,
      type: "success",
      insert: "top",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__backInRight"],
      animationOut: ["animate__animated", "animate__backOutRight"],
      showIcon: true,
      dismiss: {
        duration: 4000,
        onScreen: true,
      },
    });
  };

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={addItemToCart} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
